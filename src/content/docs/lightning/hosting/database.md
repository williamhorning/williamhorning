---
title: Configuring a database
---

# Configuring a database

Lightning supports multiple databases, with MongoDB, Redis, and PostgreSQL all
being offered as options.

## MongoDB + Redis

MongoDB + Redis can be used with Lightning using the following database config.

If you don't want to use a connection string for MongoDB, you may use a
[ConnectOptions](https://jsr.io/@db/mongo/doc/types/~/ConnectOptions) object.
For Redis, you may configure it by passing a
[Deno.ConnectOptions](https://docs.deno.com/api/deno/~/Deno.ConnectOptions)
object

```ts {5-13}
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

## Redis

Redis can be used on its own with Lightning using the following database config.

You can configure how Lightning connects to Redis by passing a
[Deno.ConnectOptions](https://docs.deno.com/api/deno/~/Deno.ConnectOptions)
object

```ts {5-12}
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

## PostgreSQL

PostgreSQL can be used on its own with Lightning using the following database
config.

You can configure how Lightning connects to PostgreSQL by passing a
[ClientOptions](https://jsr.io/@db/mongo/doc/types/~/ClientOptions) object

```ts {5-14}
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
