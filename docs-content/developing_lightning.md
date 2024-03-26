# developing for lightning

lightning is a codebase written in typescript for deno which has support
for plugins built in along with an easy to follow structure for adding to it

## plugins

plugins allow you to extend bolt's functionality by supplying support for
other platforms or by adding commands. to create a plugin, export
an implementation of the `plugin` class

// TODO: add JSR link

## lightning itself

hey there! thanks for being interested in developing lightning! as a project, work is
mostly divided between a few different areas and repos:

- lightning itself, sometimes refered to as `core`. this is where stuff like the
  plugin api, bridge systems, and commands live
- first-party plugins like `bolt-discord` that're used for Bolt
- the docs (part of `williamhorning/williamhorning`)
- upstream projects, including those we depend on, that are used by many people

some stuff, such as consistent styling, commit messages, linting, and
more are shared among these projects. see below for some guidelines

### general guidelines

- use prettier to format code. consistent style across files makes stuff nicer
- use `deno lint` and try to fix errors instead of adding ignore directives
- follow conventional commits and semver 2.0.0 whenever reasonable
- try to not introduce breaking changes unless they're necessary

### lightning

lightning, also referred to as `core` or `lib`, is where all the public api,
bridging, commands, migrations, and cli lives. none of the stuff in lightning should
be platform-dependant, as all of that should live in plugins. it's further divided
into a few different folders, each with their own standards. overall, try to not
make breaking changes unless necessary

### first-party plugins

try to follow the guidelines here and to match style

### the docs

as part of `williamhorning/williamhorning`, the docs site should follow all the stuff
there except for writing style and theming.

### upstream projects

upstream projects should work just fine for a lot of stuff, but if we need to implement
something others may find useful, we should contribute to them. follow any docs and stuff
that they may have.
