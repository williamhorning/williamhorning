+++
title = "Framework · Lightning · Jersey"
description = "a framework for truly powerful cross-platform bots"
image = "lightning-opengraph.png"
icon = "lightning.png"
+++

<div class="hero"><div>

# build cross-platform bots with

# lightning

<span aria-label="button group">
<a class="primary button" href="/lightning/framework/hello-world">get started -></a>
<a class="button" href="/go/lightning/godoc">0.8.0-rc.2 api docs ↗</a>
<a class="button" href="https://github.com/williamhorning/lightning" target="_blank">github ↗</a>
</span></div><img alt="lightning logo" src="/assets/lightning.png"></div>

# the lightning framework

Lightning is a framework for building cross-platform bots, allowing you to make
bots that support multiple platforms without having to worry about
platform-specific code. The framework is built in Go, making it easy to work
with, and is designed to handle things like commands, events, rate-limits,
attachments, and more, all while being battle-tested in Bolt, which has handled
over half-a-million messages during just the summer of 2025.

The framework consists of the core library, which is platform-agnostic, and
plugins, which add support for specific platforms, such as Discord, Guilded,
Stoat, and Telegram. The only platform-specific code is in the plugins, making
it possible to support new platforms without modifying your bot's core logic.

## architecture

The framework is built around a few key concepts:

- **package `lightning`**: The core library, with the platform-agnostic stuff,
such as commands, events, and the definition of the plugin interface.
- **plugins**: The platform-specific code, which implements the plugin
interface. Each plugin is a separate package, which can be imported and used.
- **event handlers**: Functions that are called when specific events occur,
like a sent message. These can be registered with the AddHandler method.
- **commands**: Actions that users can trigger, like `/ping`, or `!help`.
These can be registered with the AddCommand method.

The plugins are lower-level than the core library, so they can be used
directly, but the core library should be used instead.

## features

- **Cross-platform**: the framework is designed to be cross-platform, with
support for multiple platforms, including Discord, Guilded, Stoat, and
Telegram. More platforms can be added by creating new plugins.
- **Attachment support**: the framework deals with attachments, allowing
you to send and receive files, images, and other media by URL.
- **Embed handling**: embeds are supported across platforms, even if the
platform doesn't support them natively.
- **Emoji handling**: emojis are supported across platforms, with custom
emoji handled natively where possible.

## resources

- [Github repository](https://github.com/williamhorning/lightning)
- [Go documentation](/go/lightning/godoc)
- [Getting started guide](./hello-world)
