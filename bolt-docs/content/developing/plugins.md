# Developing plugins

plugins allow you to extend bolt's functionality by supplying support for
other platforms or by adding commands. to create a plugin, export
an implementation of the `BoltPlugin` class

## Example:

```ts
import {
	create_message,
	BoltPlugin,
	Bolt
} from 'https://williamhorning.dev/bolt/x/bolt/0.5.4/mod.ts';

export default class ExamplePlugin extends BoltPlugin {
	name = 'example';
	version = '1.0.0';
	bridgeSupport = {
		text: false,
	};
	async start(bolt: Bolt) {
		bolt.on('event', () => {});
		bolt.cmds.register({
			name: 'hello',
			description: 'h',
			execute: () => create_message({
				text: `world`
			})
		})
	}
}
```
