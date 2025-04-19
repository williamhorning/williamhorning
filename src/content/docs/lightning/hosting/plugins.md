---
title: Plugins
---

# Plugins

Lightning uses a plugin system in order to support multiple platforms while
remaining extensible and light, allowing you to choose which messaging apps you
support. There are a number of existing plugins which are available:

## lightning-plugin-discord

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-discord)](https://jsr.io/@jersey/lightning-plugin-discord)

lightning-plugin-discord adds support for Discord to Lightning. To use it,
you'll first need to create a Discord bot at the
[Discord Developer Portal](https://discord.com/developers/applications). After
you do that, you will need to add the following to your config file:

```toml {7-9}
prefix = "!"

[database]
type = "postgres"
config = "postgresql://server@localhost:5432/lightning"

[[plugins]]
plugin = "jsr:@jersey/lightning-plugin-discord@0.8.0"
config.token = "your_bot_token"
```

## lightning-plugin-guilded

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-guilded)](https://jsr.io/@jersey/lightning-plugin-guilded)

lightning-plugin-guilded adds support for Guilded. To use it, you'll first need
to create a Guilded bot. After you do that, you'll need to add the following to
your config file:

```toml {9-11}
prefix = "/lightning "

[database]
type = "redis"
config.hostname = "redis"
config.port = 6379
config.transport = "tcp"

[[plugins]]
plugin = "jsr:@jersey/lightning-plugin-guilded@0.8.0"
config.token = "your_bot_token"
```

## lightning-plugin-revolt

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-revolt)](https://jsr.io/@jersey/lightning-plugin-revolt)

lightning-plugin-telegram adds support for Revolt. To use it, you'll need to
create a Revolt bot first. After that, you need to add the following to your
config file:

```toml {7-10}
prefix = "!bolt "

[database]
type = "postgres"
config = "postgresql://server@localhost:5432/lightning"

[[plugins]]
plugin = "jsr:@jersey/lightning-plugin-revolt@0.8.0"
config.token = "your_bot_token"
config.user_id = "your_bot_user_id"
```

## lightning-plugin-telegram

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-telegram)](https://jsr.io/@jersey/lightning-plugin-telegram)

lightning-plugin-telegram adds support for Telegram. Before using it, you'll
need to talk with @BotFather to create a bot. After that, you need to add the
following to your config:

```ts {9-13}
prefix = "l!"

[database]
type = "redis"
config.hostname = "redis"
config.port = 6379
config.transport = "tcp"

[[plugins]]
plugin = "jsr:@jersey/lightning-plugin-telegram"
config.token = "your_bot_token"
config.proxy_port = 9090
config.proxy_url = "https://example.com:9090"
```

Additionally, you will need to expose the port provided at the URL provided for
attachments sent from Telegram to work properly

## Adding a plugin

To develop a plugin and get it added to this list, please read the
[_Developer Docs_](../../developer)
