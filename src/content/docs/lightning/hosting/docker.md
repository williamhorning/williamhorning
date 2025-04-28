---
title: Hosting with Docker
next:
  link: /lightning/developer
  label: Developers
---

# Hosting with Docker

Another way to host Lightning aside from using Deno directly is to use Docker
and Docker Compose. This allows you to use containers and run it more easily
using container management software.

:::note  
You will need to have Docker and Docker Compose installed. See the
[Docker documentation](https://docs.docker.com/get-docker/) for
installation instructions.  
:::

In this example we will use Docker Compose to set up container for
Lightning, and optionally, the database as well.


## Setting up the Lightning container

Create a new folder that will store the configuration of our Docker container.
Inside, create a `compose.yml` file, containing the following snippet:

```yml
services:
  lightning:
    image: ghcr.io/williamhorning/lightning:latest
    volumes:
      - ./config:/data
    restart: always
```

Now, create a folder named `config` adjacent to the composefile.
Inside, create a `lightning.toml` file, containing Lightning's configuration.

In our example, we are going to use the following configuration:

```toml
prefix = "!"

[database]
type = "postgres"
config = "postgresql://postgres@localhost:5432/postgres"

[[plugins]]
plugin = "jsr:@lightning/discord@0.8.0-alpha.1"
config.token = "YOUR_DISCORD_BOT_TOKEN"

[[plugins]]
plugin = "jsr:@lightning/revolt@0.8.0-alpha.1"
config.token = "YOUR_REVOLT_BOT_TOKEN"
config.user_id = "YOUR_REVOLT_BOT_USER_ID"
```

This configuration uses Postgres database and sets up a bridge between Discord
and Revolt, however you can customize it however you want - see [_configuration_](../configuration)
and [_plugins_](../plugins).


## Setting up a database in Docker (optional)

Lightning requires a databse to work. You can install it locally on your machine, but
if you want to use Docker to host the database as well, you can edit the `compose.yml`
file to include a container for that as well.

In our case, the updated file will look like this:

```yml
services:
  lightning:
    image: ghcr.io/williamhorning/lightning:latest
    volumes:
      - ./config:/data
    restart: always
  db:
    image: postgres
    restart: always
    ports:
       - '5432:5432'
    environment:
      POSTGRES_HOST_AUTH_METHOD: trust
```

This will create an additional container with Postgres database. 

:::note  
Because you are hosting your database in container instead of locally, in `lightning.toml`
you need to replace `localhost` with `172.17.0.1`.
:::

Keep in mind this example uses `POSTGRES_HOST_AUTH_METHOD: trust` to simplify
configuration of database container. If you don't want to use it because of
security concerns, you need to set up the database accordingly.


## Running the container(s)

Use `docker compose up -d` to run our container(s).

You can use command line, or alternatively, if you are using Windows, create a simple `start.bat` file:

```batch
@echo off
docker compose up -d
pause
```

Executing the command line or batch file will start both containers.
