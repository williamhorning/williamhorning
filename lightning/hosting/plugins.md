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

```ts
import { discord_plugin } from 'jsr:@jersey/lightning-plugin-discord@0.8.0'; // [!code focus]

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
	plugins: [ // [!code focus]
		discord_plugin.new({ // [!code focus]
			token: 'your_token', // [!code focus]
			application_id: 'your_application_id', // [!code focus]
			slash_commands: true, // [!code focus]
		}), // [!code focus]
	], // [!code focus]
};
```

## lightning-plugin-guilded

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-guilded)](https://jsr.io/@jersey/lightning-plugin-guilded)

lightning-plugin-guilded adds support for Guilded. To use it, you'll first need
to create a Guilded bot. After you do that, you'll need to add the following to
your config file:

```ts
import { guilded_plugin } from 'jsr:@jersey/lightning-plugin-guilded@0.8.0'; // [!code focus]

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
	plugins: [ // [!code focus]
		guilded_plugin.new({ // [!code focus]
			token: 'your_token', // [!code focus]
		}), // [!code focus]
	], // [!code focus]
};
```

## lightning-plugin-revolt

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-revolt)](https://jsr.io/@jersey/lightning-plugin-revolt)

lightning-plugin-telegram adds support for Revolt. To use it, you'll need to
create a Revolt bot first. After that, you need to add the following to your
config file:

```ts
import { revolt_plugin } from 'jsr:@jersey/lightning-plugin-revolt@0.8.0'; // [!code focus]

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
	plugins: [ // [!code focus]
		revolt_plugin.new({ // [!code focus]
			token: 'your_token', // [!code focus]
			user_id: 'your_bot_user_id', // [!code focus]
		}), // [!code focus]
	], // [!code focus]
};
```

## lightning-plugin-telegram

[![JSR](https://jsr.io/badges/@jersey/lightning-plugin-telegram)](https://jsr.io/@jersey/lightning-plugin-telegram)

lightning-plugin-telegram adds support for Telegram. Before using it, you'll
need to talk with @BotFather to create a bot. After that, you need to add the
following to your config:

```ts
import { telegram_plugin } from 'jsr:@jersey/lightning-plugin-telegram@0.8.0'; // [!code focus]

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
	plugins: [ // [!code focus]
		telegram_plugin.new({ // [!code focus]
			bot_token: 'your_token', // [!code focus]
			plugin_port: 8080, // [!code focus]
			plugin_url: 'https://your.site:8080', // [!code focus]
		}), // [!code focus]
	], // [!code focus]
};
```

Additionally, you will need to expose the port provided at the URL provided for
attachments sent from Telegram to work properly

## Adding a plugin

To develop a plugin and get it added to this list, please read the 
[*Developer Docs*](/developer)