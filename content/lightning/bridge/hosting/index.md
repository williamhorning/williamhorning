+++
title = "Hosting · Bridge · Lightning · Jersey"
description = "setup a bridge with Lightning: a cross-platform bot"
image = "lightning-opengraph.png"
icon = "lightning.png"
+++

# Hosting the Lightning bridge

Lightning can be hosted pretty easily, using either the Go toolchain, or use
container-based tools to run the bridge. There are a few steps you'll need to
take before you start to host the bot:

1. Setup PostgreSQL - the database used by the bridge
2. [Setup a `lightning.toml` file](./configuring) - configure the bot

And, to host the bot, there are two possible options:

- using the Go toolchain
- using Docker (and Docker Compose)

## Using the Go toolchain

1. You'll need to [install Go](https://go.dev/doc/install)
2. Install the `lightning` cli:

```sh
go install github.com/williamhorning/lightning/cmd/lightning@v0.8.0-rc.1
```

3. Put the `lightning.toml` file in your current working directory
4. Run `lightning run` in your working directory

## Using Docker (and Docker Compose)

1. You'll need to [install Docker](https://docs.docker.com/get-docker/)
2. Setup a `compose.yml` file:

```yml
lightning:
  image: ghcr.io/williamhorning/lightning:0.8.0-alpha.6
  volumes:
    - ./config:/data
  restart: always
```

3. Make a config folder adjacent to your `compose.yml` file
4. Place your `lightning.toml` file in the config folder
5. Run `docker compose up -d lightning`
