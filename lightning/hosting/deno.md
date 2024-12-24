# Hosting with Deno

> [!TIP]
> In production environments, you may want to use [Docker](docker.md) instead

It's possible to host Lightning using Deno. This approach allows you to avoid
the complexity associated with container-based setups but limits your ability to
isolate the bot from your host environment.

## Installing Prerequisites

### Deno

First, you must install Deno:

::: code-group

```sh [MacOS / Linux]
curl -fsSL https://deno.land/install.sh | sh
```

```pwsh [Windows]
irm https://deno.land/install.ps1 | iex
```

:::

### your database

After you install Deno, you'll need to install a database. See
[_database options_](database.md) for more information on choosing and setting
up a database to use with Lightning

## Installing Lightning

Once you have the necessary prerequisites installed, you can run the following
command to install the `lightning` cli:

```sh
deno install -g jsr:@jersey/lightning@0.8.0
```

### Configuring lightning

When you have lightning installed, you should make a `config.ts` file with the
necessary configuration for your database and plugins. See
[_configuration_](configuration.md) and [_plugins_](plugins.md)

### Running Lightning

You can run lightning by using the `lightning run` command
