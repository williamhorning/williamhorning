package main

import (
	"bytes"
	"fmt"
	"io/fs"
	"log/slog"
	"os"
	"path/filepath"
	"strings"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/parser"
	"go.abhg.dev/goldmark/frontmatter"
)

func getWalker(pwd string, markdown goldmark.Markdown) fs.WalkDirFunc {
	return func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			return nil
		}

		slog.Info("starting", "file", path)

		input, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read: %w", err)
		}

		relPath, err := filepath.Rel(filepath.Join(pwd, "content"), path)
		if err != nil {
			return fmt.Errorf("failed to get relative path: %w", err)
		}

		isMarkdown := filepath.Ext(path) == ".md"
		outputPath := filepath.Join(pwd, ".out", relPath)

		if isMarkdown {
			outputPath = strings.ReplaceAll(outputPath, ".md", ".html")
		}

		if err = os.MkdirAll(filepath.Dir(outputPath), os.ModePerm); err != nil {
			return fmt.Errorf("failed to mkdir: %w", err)
		}

		handle, err := os.OpenFile(outputPath, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, os.ModePerm)
		if err != nil {
			return fmt.Errorf("failed to open handle: %w", err)
		}

		if !isMarkdown {
			if _, err := handle.Write(input); err != nil {
				return fmt.Errorf("failed to copy file: %w", err)
			}

			slog.Info("copied", "file", outputPath)

			return nil
		}

		return handleMarkdown(handle, input, markdown, relPath, outputPath)
	}
}

func handleMarkdown(handle *os.File, input []byte, markdown goldmark.Markdown, relPath, outputPath string) error {
	var buf bytes.Buffer

	ctx := parser.NewContext()

	if err := markdown.Convert(input, &buf, parser.WithContext(ctx)); err != nil {
		return fmt.Errorf("failed to convert markdown: %w", err)
	}

	data := frontmatter.Get(ctx)

	var meta struct {
		Title       string `toml:"title"`
		Description string `toml:"description"`
		Image       string `toml:"image"`
		Icon        string `toml:"icon"`
	}

	if err := data.Decode(&meta); err != nil {
		return fmt.Errorf("failed to decode frontmatter: %w", err)
	}

	if _, err := handle.WriteString(
		getFirstSkeleton(strings.Split(relPath, "/")[0], meta.Title, meta.Description, meta.Icon, meta.Image),
	); err != nil {
		return fmt.Errorf("failed to write first skeleton: %w", err)
	}

	content := strings.ReplaceAll(buf.String(), "font-weight:bold", "font-weight:500")

	if _, err := handle.WriteString(content); err != nil {
		return fmt.Errorf("failed to write content: %w", err)
	}

	if _, err := handle.WriteString(getSecondSkeleton()); err != nil {
		return fmt.Errorf("failed to write second skeleton: %w", err)
	}

	if err := handle.Close(); err != nil {
		return fmt.Errorf("failed to close handle: %w", err)
	}

	slog.Info("generated", "file", outputPath)

	return nil
}
