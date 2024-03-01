# developing for bolt

bolt is built on top of a codebase written in typescript for deno which has support
for plugins built in along with an easy to follow structure for adding to it.

## plugins

plugins allow you to extend bolt's functionality by supplying support for
other platforms or by adding commands. to create a plugin, export
an implementation of the `BoltPlugin` class

### example

```js
import {
  create_message,
  bolt_plugin,
  Bolt,
} from "https://williamhorning.dev/bolt/x/bolt/0.5.4/mod.ts";

export class example_plugin extends bolt_plugin<undefined> {
  name = "example";
  version = "1.0.0";
  support = ["0.5.5"];

  constructor(bolt: Bolt) {
    bolt.on("event", () => {});
    bolt.cmds.register({
      name: "hello",
      description: "h",
      execute: () =>
        create_message({
          text: `world`,
        }),
    });
  }
}
```

## bolt itself

hey there! thanks for being interested in developing bolt! as a project, work is
mostly divided between a few different areas and repos:

- `bolt` itself, sometimes refered to as `core`. this is where stuff like the
  plugin api, bridge systems, and commands live
- `bolt-cli`, the fun package that implements the `bolt` cli
- `bolt-docs`, the docs. part of `williamhorning/williamhorning`
- `bolt-migrations`, the database migrations necessary to move between versions
- first-party plugins like `bolt-discord` that're used for the hosted version
- upstream projects, including those we depend on, that are used by many people

some stuff, such as consistent styling, commit messages, linting, and
more are shared among these projects. see below for some guidelines

### general guidelines

- use prettier to format code. consistent style across files makes stuff nicer
  and far easier to read. don't use `deno fmt` or spaces instead of tabs.
- use `deno lint` to check for issues in the stuff you write and try to fix errors
  instead of adding ignore directives.
- follow conventional commits and semver 2.0.0 whenever reasonable
- try to not introduce breaking changes unless they're necessary

### `bolt`

bolt, also referred to as `core` or `bolt/lib`, is where all the public api,
bridging, commands, and shared stuff lives. none of the stuff in bolt should
be platform-dependant, as all of that should live in plugins. breaking changes
are things that require changes to be made to consumers of public apis. try
avoiding breaking changes, especially in the plugin system. if you do need to
make breaking changes to the plugin system, please increment `boltversion` on
the plugin class. also, try to not overly use the bolt name in exports.

### `bolt-cli`

the cli is self-explanitory. keep it simple, don't break stuff unless you have to.
the stuff from `bolt` and `bolt-migrations` are used here to provide a nice command
line experience for those self-hosting.

### `bolt-docs`

as part of `williamhorning/williamhorning`, the docs site should follow all the stuff
there except for writing style and theming.

### `bolt-migrations`

this exists to provide a simple way to migrate data. don't change stuff unless you
have to, please make an issue if you're considering changes to this.

### first-party plugins

try to follow the guidelines here and to match style

### upstream projects

upstream projects should work just fine for a lot of stuff, but if we need to implement
something others may find useful, we should contribute to them. follow any docs and stuff
that they may have.
