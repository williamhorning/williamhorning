---
title: Configuring Lightning
prev:
  link: /lightning/hosting
  label: Hosting
---

# Configuring Lightning

Lightning is configured using a `lightning.toml`, file. This file is
used to configure the Lightning instance, including the database and
plugins.

## Example

```toml
prefix = "!"
error_url = "https://discord.com/api/webhooks/your_webhook_id/your_webhook_token"

[database]
type = 'postgres'
config = 'postgresql://server@localhost:5432/lightning'

[[plugins]]
plugin = "jsr:@lightning/discord@0.8.0-alpha.2"
config.token = "your_bot_token"
```

## Properties

### Prefix

The prefix used for commands. This is optional, and defaults to `!`, but must be a string.

### Error URL (optional)

The error URL is a Discord-compatible webhook URL for error logging. This is optional, but
recommended. If you do not provide a URL, errors will only be logged to the console.

### Database

The database object is used to configure the database used by Lightning. This is
required, and must be a valid database configuration. See [_configuring a database_](../database)

### Plugins

The plugins array is used to configure the plugins used by Lightning. This is required,
and should contain at least one plugin. See [_plugins_](../plugins) for more information.