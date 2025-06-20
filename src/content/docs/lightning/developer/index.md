---
title: Developer Docs
---

# Developer Docs

Lightning is a Go-based chatbot which should make it fairly easy to develop for
and around. Import the package from `github.com/williamhorning/lightning` if you
want to look at the interfaces exposed by lightning. If you want to make a
plugin, look at the template below

```go
package demo

import (
	"github.com/williamhorning/lightning"
)

func init() {
	lightning.RegisterPluginType("demo", newDemoPlugin)
}

func newRevoltPlugin(config any) (lightning.Plugin, error) {
	return &demoPlugin{config}, nil
}

type demoPlugin struct {
	config map[string]any
}

// implement the lightning.Plugin interface...
```