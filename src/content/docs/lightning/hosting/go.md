---
title: Hosting with Go
---

# Hosting with Go

:::tip
In production environments, you may want to use [Docker](../docker) instead
:::

It's possible to host Lightning using the traditional Go tools. This approach
allows you to avoid the complexity associated with container-based setups but
limits your ability to isolate the bot from your host environment.

## Installing Prerequisites

### Go

First, you must [install Go](https://go.dev/doc/install)

### your database

After you install Go, you'll need to install a database. See
[configuring](../configuring) for more information on choosing and setting
up a database to use with Lightning

## Installing Lightning

Once you have the necessary prerequisites installed, you can run the following
command to install the `lightning` cli:

```sh
go install github.com/williamhorning/lightning/cli@latest
```

### Configuring lightning

When you have lightning installed, you should make a `lightning.toml` file with the
necessary configuration for your database and plugins. See
[_configuration_](../configuration)

### Running Lightning

You can run lightning by using the `lightning run` command
