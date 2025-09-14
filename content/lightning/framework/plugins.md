+++
title = "Plugins · Framework · Lightning · Jersey"
description = "a guide on the plugins available for the Lightning framework"
image = "lightning-opengraph.png"
icon = "lightning.png"
+++

# plugins for lightning

Lightning is built to be extended by plugins, which add support for different
platforms, including Discord, Guilded, Revolt, and Telegram, allowing your bot
to be multi-platform with ease.

## adding platform plugins

To add a platform plugin, you'll need to do three steps:

1. Import the plugin package
2. Add the plugin type to the framework
3. Tell the framework to setup the plugin

See the [hello world guide](./hello-world) for a detailed example of how to add
a platform plugin.

## official plugins

The following plugins are officially supported by Lightning:

- Discord
- Guilded
- Revolt
- Telegram

### discord [![Go Reference](https://pkg.go.dev/badge/github.com/williamhorning/lightning/pkg/platforms/discord.svg)](https://pkg.go.dev/github.com/williamhorning/lightning/pkg/platforms/discord)

The Discord plugin allows your bot to connect to Discord, supporting all the
features of Lightning. To use the Discord plugin, you'll need to add import
the plugin, add the plugin type to the framework, and setup the plugin with the
following configuration options:

- `token` (string, required): The bot token to use for authentication

### guilded [![Go Reference](https://pkg.go.dev/badge/github.com/williamhorning/lightning/pkg/platforms/guilded.svg)](https://pkg.go.dev/github.com/williamhorning/lightning/pkg/platforms/guilded)

The Guilded plugin allows your bot to connect to Guilded, supporting all the
features of Lightning. To use the Guilded plugin, you'll need to add import
the plugin, add the plugin type to the framework, and setup the plugin with the
following configuration options:

- `token` (string, required): The bot token to use for authentication

### revolt [![Go Reference](https://pkg.go.dev/badge/github.com/williamhorning/lightning/pkg/platforms/revolt.svg)](https://pkg.go.dev/github.com/williamhorning/lightning/pkg/platforms/revolt)

The Revolt plugin allows your bot to connect to Revolt, supporting all the
features of Lightning. To use the Revolt plugin, you'll need to add import
the plugin, add the plugin type to the framework, and setup the plugin with the
following configuration options:

- `token` (string, required): The bot token to use for authentication

### telegram [![Go Reference](https://pkg.go.dev/badge/github.com/williamhorning/lightning/pkg/platforms/telegram.svg)](https://pkg.go.dev/github.com/williamhorning/lightning/pkg/platforms/telegram)

The Telegram plugin allows your bot to connect to Telegram, supporting all the
features of Lightning. To use the Telegram plugin, you'll need to add import
the plugin, add the plugin type to the framework, and setup the plugin with the
following configuration options:

- `token` (string, required): The bot token to use for authentication, which
  you can get from [BotFather](https://t.me/BotFather)
- `proxy_port` (int, required): The port to use for the built-in Telegram file
  proxy, which is used to serve files from Telegram without exposing your token
- `proxy_url` (string, required): The publicly accessible URL of the Telegram
  file proxy

## creating plugins

Plugins are defined by implementing the `Plugin` interface, which requires
the following methods:

```go
SetupChannel(channel string) (any, error)
SendCommandResponse(message *Message, opts *SendOptions, user string) ([]string, error)
SendMessage(message *Message, opts *SendOptions) ([]string, error)
EditMessage(message *Message, ids []string, opts *SendOptions) error
DeleteMessage(channel string, ids []string) error
SetupCommands(command map[string]*Command) error
ListenMessages() <-chan *Message
ListenEdits() <-chan *EditedMessage
ListenDeletes() <-chan *BaseMessage
ListenCommands() <-chan *CommandEvent
```
