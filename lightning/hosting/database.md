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

```ts
import { revolt_plugin } from 'jsr:@jersey/lightning-plugin-revolt@0.8.0';

export default {
	prefix: '!bolt ',
	database: { // [!code focus]
		type: 'mongo', // [!code focus]
		database: 'mongodb://mongo:27017/lightning', // [!code focus]
		redis: { // [!code focus]
			hostname: 'redis', // [!code focus]
			transport: 'tcp', // [!code focus]
			port: 6380, // [!code focus]
		}, // [!code focus]
	}, // [!code focus]
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

```ts
import { guilded_plugin } from 'jsr:@jersey/lightning-plugin-guilded@0.8.0';

export default {
	prefix: '/lightning ',
	database: { // [!code focus]
		type: 'redis', // [!code focus]
		config: { // [!code focus]
			hostname: 'localhost', // [!code focus]
			transport: 'tcp', // [!code focus]
			port: 6380, // [!code focus]
		}, // [!code focus]
	}, // [!code focus]
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

```ts
import { discord_plugin } from 'jsr:@jersey/lightning-plugin-discord@0.8.0';

export default {
	prefix: '!',
	database: { // [!code focus]
		type: 'postgres', // [!code focus]
		config: { // [!code focus]
			user: 'server', // [!code focus]
			database: 'lightning', // [!code focus]
			hostname: 'postgres', // [!code focus]
			port: 5432, // [!code focus]
			host_type: 'tcp', // [!code focus]
		}, // [!code focus]
	}, // [!code focus]
	plugins: [
		discord_plugin.new({
			token: 'your_token',
			application_id: 'your_application_id',
			slash_commands: true,
		}),
	],
};
```
