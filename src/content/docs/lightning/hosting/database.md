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

```toml
[database]
type = 'redis'
config.hostname = 'localhost'
config.port = 6379
```

## PostgreSQL

PostgreSQL can be used on its own with Lightning using the following database
config. You can configure how Lightning connects to PostgreSQL by passing a
connection string.

```toml
[database]
type = "postgres"
config = "postgresql://server@localhost:5432/lightning"
```

In above example, `server` is username, `localhost` is the server's IP adress, and `lightning` the database's name.
You can read more about connection strings [here](https://stackoverflow.com/questions/3582552/what-is-the-format-for-the-postgresql-connection-string-url).

[//]: <> (TODO: MongoDB example? Would do it myself, but sadly I haven't used it before ~Garden)