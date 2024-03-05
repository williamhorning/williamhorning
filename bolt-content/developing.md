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

- bolt itself, sometimes refered to as `core`. this is where stuff like the
  plugin api, bridge systems, and commands live
- first-party plugins like `bolt-discord` that're used for the hosted version
- the docs (part of `williamhorning/williamhorning`)
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

### bolt

bolt, also referred to as `core` or `lib`, is where all the public api,
bridging, commands, migrations, and cli lives. none of the stuff in bolt should
be platform-dependant, as all of that should live in plugins. it's further divided
into a few different folders, each with their own standards. overall, try to not
make breaking changes unless necessary

#### `bolt/bridges`

the bridging system exposes very few public api interfaces and it should stay that
way, don't complicate things

#### `bolt/cli.ts`

try not messing with the cli, it's meant to be a nice command for self-hosting bolt

#### `bolt/cmds`

the command system should also be simple. try to not do crazy things and split stuff
if necessary

#### `bolt/migrations` and `bolt/utils`

please don't make changes unless really necessary, make an issue if you're considering
changes to stuff in here

### first-party plugins

try to follow the guidelines here and to match style

### the docs

as part of `williamhorning/williamhorning`, the docs site should follow all the stuff
there except for writing style and theming.

### upstream projects

upstream projects should work just fine for a lot of stuff, but if we need to implement
something others may find useful, we should contribute to them. follow any docs and stuff
that they may have.
