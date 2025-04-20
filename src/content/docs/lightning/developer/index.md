---
title: Developer Docs
---

# Developer Docs

Lightning is a TypeScript-based chatbot which should make it fairly easy to
develop for and around. Take a look at the
[api docs](https://jsr.io/@lightning/lightning/doc) if you want to look at the
interfaces exposed by lightning. If you want to make a plugin, all you need to
do is export an implementation of the `plugin` class with the necessary methods
implemented and a `parse_config` function.
