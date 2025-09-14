// Package build is a program to build the caecilian site
package main

import (
	"log/slog"
	"os"
	"path/filepath"

	chromahtml "github.com/alecthomas/chroma/v2/formatters/html"
	"github.com/lmittmann/tint"
	"github.com/yuin/goldmark"
	highlighting "github.com/yuin/goldmark-highlighting/v2"
	"github.com/yuin/goldmark/extension"
	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
	"go.abhg.dev/goldmark/frontmatter"
)

func main() {
	slog.SetDefault(slog.New(tint.NewHandler(os.Stderr, &tint.Options{})))

	pwd, err := os.Getwd()
	if err != nil {
		slog.Error("failed to get pwd", "err", err.Error())

		os.Exit(1)
	}

	dir := filepath.Join(pwd, "content")

	slog.Debug("using directory", "dir", dir)

	markdown := goldmark.New(
		goldmark.WithExtensions(
			&frontmatter.Extender{},
			extension.NewCJK(),
			extension.NewFootnote(),
			extension.NewTypographer(),
			extension.GFM,
			highlighting.NewHighlighting(
				highlighting.WithStyle("github-dark"),
				highlighting.WithFormatOptions(
					chromahtml.WithLineNumbers(true),
				),
			),
		),
		goldmark.WithParserOptions(parser.WithAutoHeadingID()),
		goldmark.WithRendererOptions(html.WithUnsafe()),
	)

	if err := filepath.WalkDir(dir, getWalker(pwd, markdown)); err != nil {
		slog.Error("failed walking directory", "err", err)
	}
}
