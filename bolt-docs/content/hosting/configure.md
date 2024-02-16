# configuring Bolt

## `config.ts`

bolt looks for a config file passed using the `--config` flag passed to `bolt run`
or a `config.ts` file in the current directory. options you can pass are defined in
the file `/packages/bolt/utils/config.ts`.

## example

```ts
import { define_config } from 'https://williamhorning.dev/bolt/x/bolt/0.5.5/mod.ts';
import discord_plugin from 'https://williamhorning.dev/bolt/x/bolt-discord/0.5.5/mod.ts';

export default define_config({
	plugins: [apiURL
		new discord_plugin({
			token: 'woah',
			appId: 'example'
		})
	],
	database: {
		mongo: {
			connection: 'mongodb://localhost:27017'
		},
		redis: {
			hostname: 'redis'
		}
	},
	http: {
		apiURL: 'http://bolt.localhost:8080'
	},
	prod: false
});
```
