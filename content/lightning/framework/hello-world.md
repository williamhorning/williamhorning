+++
title = "Getting Started · Framework · Lightning · Jersey"
description = "a simple guide to building a bot with Lightning"
image = "lightning-opengraph.png"
icon = "lightning.png"
+++

# getting starting with Lightning: hello world

Lightning is a framework for building cross-platform bots, allowing you to make
bots that support multiple platforms without having to worry about
platform-specific code. This guide will help you make a simple bot that uses
the framework to implement a simple hello world command.

## setting up

To get started, you'll need to
[install Go on your machine](https://go.dev/doc/install) and setup a
development environment. Once you have Go installed, you can create a new
directory for your bot and initialize a new Go module:

```sh
mkdir my-bot
cd my-bot
go mod init https://github.com/your-username/my-bot
```

Next, you'll need to add the Lightning framework to your project. You can do
this by running:

```sh
go get github.com/williamhorning/lightning@v0.8.0-rc.4
```

## writing your bot

Now that you have the framework installed, you can start writing your bot.
Create a new file called `main.go` in your project directory and add the
following code:

```go
package main

import (
    "os"
    "os/signal"
    "log/slog"
    "syscall"

    "github.com/williamhorning/lightning/pkg/lightning"
)

func main() {
    bot := lightning.NewBot(lightning.BotOptions{
        Author: lightning.MessageAuthor{
            Username:       "Example Bot",
            Nickname:       "example-bot",
            ID:             "example-bot",
            ProfilePicture: nil,
            Color:          "#ffffff",
        },
        Prefix: "!",
    })

    if err := bot.AddCommand(&lightning.Command{
        Name:        "hello",
        Description: "says hello",
        Executor: func(_ lightning.CommandOptions) string {
            return "hello world!"
        },
    }); err != nil {
        slog.Error("failed to add command", "error", err)
        os.Exit(1)
    }

    // TODO: add platform plugins, see below

    slog.Info("started!")

    quitChannel := make(chan os.Signal, 1)
    signal.Notify(quitChannel, os.Interrupt, syscall.SIGTERM)
    <-quitChannel

    slog.Info("stopped!")
}
```

Now, you can run the bot using:

```sh
go run main.go
```

This will start the bot, but it doesn't work on any platform yet. To make it
work, you'll need to add platform plugins.

## adding platform plugins

Lightning supports multiple platforms via plugins. You can add support for
Discord, Guilded, Stoat, and Telegram. To add a platform plugin, you'll
need to do three steps:

1. Import the plugin package
2. Add the plugin type to the framework
3. Tell the framework to setup the plugin

For example, to add support for Discord, you would do the following:

### Import the plugin package

```go
import (
    "github.com/williamhorning/lightning/pkg/plugins/discord"
)
```

### Add the plugin type to the framework

```go
bot.AddPluginType("discord", discord.New)
```

Note that this might return an error, so you should handle it appropriately.

### Tell the framework to setup the plugin

```go
bot.UsePluginType(
    "discord",
    "",
    map[string]string{"token": os.Getenv("DISCORD_BOT_TOKEN")},
)
```

Other plugins can be added in a similar way, but have different configuration
options. Additionally, you can add multiple instances of the same plugin type
by providing a unique name as the second argument to `UsePluginType`:

```go
bot.UsePluginType(
    "discord",
    "my-other-bot", 
    map[string]string{"token": os.Getenv("MY_OTHER_DISCORD_BOT_TOKEN")},
)
```

Now, when you run your bot, it will connect to Discord and respond to the
`!hello` command with "hello world!". It will also setup a `/hello` slash
command, which will also respond with "hello world!". If you want to add
support for other platforms, you can follow the same steps, but use the
[plugin documentation](./plugins) for specific configuration options.

## next steps

Now that you have a basic bot up and running, you can start adding more
commands and functionality. You can listen to messages, delete messages,
and do more. Check out the [api documentation](/go/lightning/godoc)
for more methods and types you can use.
