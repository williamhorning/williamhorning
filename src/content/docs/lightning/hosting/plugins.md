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

```ts {1, 15-21}
import { discord_plugin } from 'jsr:@jersey/lightning-plugin-discord@0.8.0';

export default {
	prefix: '!',
	database: {
		type: 'postgres',
		config: {
			user: 'server',
			database: 'lightning',
			hostname: 'postgres',
			port: 5432,
			host_type: 'tcp',
		},
	},
	plugins: [
		discord_plugin.new({
			token: 'your_token',
			application_id: 'your_application_id',
			slash_commands: true,
		}),
	],
};
```

## lightning-plugin-guilded

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-guilded)](https://jsr.io/@jersey/lightning-plugin-guilded)

lightning-plugin-guilded adds support for Guilded. To use it, you'll first need
to create a Guilded bot. After you do that, you'll need to add the following to
your config file:

```ts {1, 13-17}
import { guilded_plugin } from 'jsr:@jersey/lightning-plugin-guilded@0.8.0';

export default {
	prefix: '/lightning ',
	database: {
		type: 'redis',
		config: {
			hostname: 'localhost',
			transport: 'tcp',
			port: 6380,
		},
	},
	plugins: [
		guilded_plugin.new({
			token: 'your_token',
		}),
	],
};
```

## lightning-plugin-revolt

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-revolt)](https://jsr.io/@jersey/lightning-plugin-revolt)

lightning-plugin-telegram adds support for Revolt. To use it, you'll need to
create a Revolt bot first. After that, you need to add the following to your
config file:

```ts {1, 14-19}
import { revolt_plugin } from 'jsr:@jersey/lightning-plugin-revolt@0.8.0';

export default {
	prefix: '!bolt ',
	database: {
		type: 'mongo',
		database: 'mongodb://mongo:27017/lightning',
		redis: {
			hostname: 'redis',
			transport: 'tcp',
			port: 6380,
		},
	},
	plugins: [
		revolt_plugin.new({
			token: 'your_token',
			user_id: 'your_bot_user_id',
		}),
	],
};
```

## lightning-plugin-telegram

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-telegram)](https://jsr.io/@jersey/lightning-plugin-telegram)

lightning-plugin-telegram adds support for Telegram. Before using it, you'll
need to talk with @BotFather to create a bot. After that, you need to add the
following to your config:

```ts {1, 15-21}
import { telegram_plugin } from 'jsr:@jersey/lightning-plugin-telegram@0.8.0';

export default {
	prefix: 'bot!',
	database: {
		type: 'postgres',
		config: {
			user: 'server',
			database: 'lightning',
			hostname: 'postgres',
			port: 5432,
			host_type: 'tcp',
		},
	},
	plugins: [
		telegram_plugin.new({
			bot_token: 'your_token',
			plugin_port: 8080,
			plugin_url: 'https://your.site:8080',
		}),
	],
};
```

Additionally, you will need to expose the port provided at the URL provided for
attachments sent from Telegram to work properly

## Adding a plugin

To develop a plugin and get it added to this list, please read the
[_Developer Docs_](../../developer)
