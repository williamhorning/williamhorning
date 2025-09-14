+++
title = "Configuring · Hosting · Bridge · Lightning · Jersey"
description = "configure Lightning: a cross-platform bridge bot"
image = "lightning-opengraph.png"
icon = "lightning.png"
+++

<link rel="stylesheet" href="./configuring.css" />

<form>

# Configuring Lightning

Lightning is an extensible bridge bot with some options you can configure when
hosting it. This page will let you make a `lightning.toml` file you can use to
self-host the bot.  

## General Settings

<label for="prefix">Command Prefix</label>

This is the prefix used for text commands. If you say `!`, you would use
`!ping` to run the ping command.

<input type="text" id="prefix" name="prefix" value="!" required />

<label for="log_level">Log Level (optional)</label>

The log level determines how much the bot logs. This defaults to info, but you
may want to set it to something else.

<select id="log_level" name="log_level">
  <option value="8">Error (rarely log things)</option>
  <option value="4">Warn (log less critical things)</option>
  <option value="0" selected>Info (decently informative logs)</option>
  <option value="-4">Debug (some more detail than info)</option>
</select>

<label for="error_webhook">Logging Webhook (optional)</label>

If you want your logs to go to a webhook, you can setup a logging webhook.

<input type="url" id="error_webhook" name="error_webhook" placeholder="..." />
<br />

## Database Settings

<label for="database_type">Database Type</label>

Lightning supports PostgreSQL, but more databases may be supported soon.

<select id="database_type" name="database_type">
  <option value="postgres" selected>PostgreSQL</option>
</select>

<label for="database_connection">Database Connection</label>

For PostgreSQL, this is a standard
[connection string](https://postgresql.org/docs/current/libpq-connect.html).

<input type="text" id="database_connection" name="database_connection"
  placeholder="postgres://localhost" required /><br />

## Plugins

### Discord

To use Discord with Lightning, you'll first need to create a Discord bot at the
[Discord Developer Portal](https://discord.com/developers/applications)
and enable the Message Content Intent.

<div>
  <label for="enable_discord">Enable Discord Plugin</label>
  <input type="checkbox" id="enable_discord" name="enable_discord" />
</div>
<label for="discord_token">Discord Bot Token</label>
<input type="text" id="discord_token" name="discord_token" disabled />

### Guilded

To use Guilded with Lightning, you'll first need to create a Guilded bot and get
its token.

<div>
  <label for="enable_guilded">Enable Guilded Plugin</label>
  <input type="checkbox" id="enable_guilded" name="enable_guilded" />
</div>
<label for="guilded_token">Guilded Bot Token</label>
<input type="text" id="guilded_token" name="guilded_token" disabled />

### Revolt

To enable Revolt support for Lightning, you need to enable the plugin and
provide a bot token.

<div>
  <label for="enable_revolt">Enable Revolt Plugin</label>
  <input type="checkbox" id="enable_revolt" name="enable_revolt" />
</div>
<label for="revolt_token">Revolt Bot Token</label>
<input type="text" id="revolt_token" name="revolt_token" disabled />

### Telegram

To enable Telegram support for Lightning, you'll need to talk to
[@BotFather](https://t.me/botfather) on Telegram to create a bot and get its
token. Additionally, you will need to expose the port provided at the URL for
attachments sent from Telegram to work properly.

<div>
  <label for="enable_telegram">Enable Telegram Plugin</label>
  <input type="checkbox" id="enable_telegram" name="enable_telegram" />
</div>
<label for="telegram_token">Telegram Bot Token</label>
<input type="text" id="telegram_token" name="telegram_token" disabled />
<label for="telegram_port">Telegram Proxy Port</label>
<input type="number" id="telegram_port" name="telegram_port" disabled />
<label for="telegram_url">Telegram Proxy URL</label>
<input type="url" id="telegram_url" name="telegram_url" disabled />
<br />

## Generated Config
  
<pre><code id="config-output"></code></pre>

</form>

<script src="./configuring.js"></script>
