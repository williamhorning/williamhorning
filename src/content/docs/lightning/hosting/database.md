---
title: Configuring a database
---

# Configuring a database

Lightning supports multiple databases, with MongoDB, Redis, and PostgreSQL all
being offered as options.

## Redis

Redis can be used on its own with Lightning using the following database config.
You can configure how Lightning connects to Redis by passing an object with a
hostname and port property.

```toml {3-7}
prefix = "!"

[database]
type = 'redis'
config.hostname = 'localhost'
config.port = 6379

[[plugins]]
plugin = "jsr:@lightning/guilded@0.8.0-alpha.1"
config.token = "your_bot_token"
```

## PostgreSQL

PostgreSQL can be used on its own with Lightning using the following database
config. You can configure how Lightning connects to PostgreSQL by passing a
connection string

```toml {3-5}
prefix = "!"

[database]
type = "postgres"
config = "postgresql://server@localhost:5432/lightning"

[[plugins]]
plugin = "jsr:@lightning/discord@0.8.0-alpha.1"
config.token = "your_bot_token"
```
