---
title: Hosting with Docker
next:
  link: /lightning/developer
  label: Developers
---

# Hosting with Docker

Another way to host Lightning aside from using the cli directly is to use Docker
and Docker Compose. This allows you to use containers and run it more easily
using container management software.

:::note  
You will need to have Docker and Docker Compose installed. See the
[Docker documentation](https://docs.docker.com/get-docker/) for
installation instructions.  
:::

## Setting up the container

In a `compose.yml` file, add the following snippet:

```yml
lightning:
  image: ghcr.io/williamhorning/lightning:0.8.0-alpha.6
  volumes:
    - ./config:/data
  restart: always
```

Note that you will need to make the config folder adjacent to the composefile
and place the `lightning.toml` file inside. See [_configuration_](../configuration)

## Running lightning

Use `docker compose up -d lightning` to run lightning
