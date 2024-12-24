# Configuring Lightning

Lightning is configured using a `config.ts`, allowing you to import and
configure the bot and plugins in the same place.

## Example

```ts
import type { config } from 'jsr:@jersey/lightning@0.8.0';
import { discord_plugin } from 'jsr:@jersey/lightning-plugin-discord@0.8.0'; 
import { guilded_plugin } from 'jsr:@jersey/lightning-plugin-guilded@0.8.0'; 

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
} as config;
```

## Properties

| name      | type                     | notes                                        |
|-----------|--------------------------|----------------------------------------------|
| error_url | string?                  | Discord-compatible webhook for error logging |
| database  | database_config          | See [_configuring a database_](database.md)  |
| plugins   | create_plugin&lt;any>[]? | See [_plugins_](plugins.md)                  |
| prefix    | string                   | The prefix used for commands                 |
