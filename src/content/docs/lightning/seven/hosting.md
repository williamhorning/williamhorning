---
title: Hosting 0.7.x
---

# Hosting 0.7.x

The recommended way to host Lightning 0.7.x is to use Docker and Docker Compose.
This allows you to use containers and run it more easily using container
management software.

:::note  
You will need to have Docker and Docker Compose installed. See the
[Docker documentation](https://docs.docker.com/get-docker/) for
installation instructions.

You many also want to see [0.8.0](../hosting) for the latest
version of Lightning  
:::

## Setting up the container and database

In a `compose.yml` file, add the following snippet:

```yml
services:
  redis:
    image: redis/redis-stack-server:7.2.0-v10
    ulimits:
      memlock: -1
    ports:
      - 6379:6379
    volumes:
      - ./redis:/data
    restart: always
  lightning:
    image: williamfromnj/bolt:0.7.4
    depends_on:
      - redis
    restart: on-failure
    entrypoint: lightning
    command: run --config=file:///app/data/config.ts
    volumes:
      - ./config:/app/data
```

Note that you will need to make the config folder adjacent to the composefile
and place the `config.ts` file inside.

## Configuring the bot

The `config.ts` is where you setup plugins for the bot. You'll probably not want
all these plugins, so you can remove what you want to

```ts
import type { config } from "jsr:@jersey/lightning@0.7.4";
import { discord_plugin } from "jsr:@jersey/lightning-plugin-discord@0.7.4";
import { guilded_plugin } from "jsr:@jersey/lightning-plugin-guilded@0.7.4";
import { revolt_plugin } from "jsr:@jersey/lightning-plugin-revolt@0.7.4";
import { telegram_plugin } from "jsr:@jersey/lightning-plugin-telegram@0.7.4";

export default {
  cmd_prefix: `!`,
  plugins: [
    discord_plugin.new({
      slash_cmds: true,
      app_id: "YOUR APP ID",
      token: "YOUR BOT TOKEN"
    }),
	guilded_plugin.new({
	  token: "YOUR BOT TOKEN"
	}),
    revolt_plugin.new({
      token: "YOUR BOT TOKEN",
      user_id: "YOUR BOT'S USER ID"
    }),
	telegram_plugin.new({
	  bot_token: "YOUR BOT TOKEN",
	  plugin_port: 8080,
	  plugin_url: "https://example.com:8080"
  ],
  redis_host: "redis",
  redis_port: 6379
} as config.
```

## Running lightning

Use `docker compose up -d lightning` to run lightning
