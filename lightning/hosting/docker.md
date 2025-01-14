# Hosting with Docker

Another way to host Lightning aside from using Deno directly is to use Docker
and Docker Compose. This allows you to use containers and run it more easily
using container management software.

## Installing prerequisite

### Docker + Docker Compose

To install Docker, you should see
[the official documentation](https://docs.docker.com/engine/install/)

To install Docker Compose, you should see
[the offical documentation](https://docs.docker.com/compose/install/)

## Setting up the container

In a `docker-compose.yml` file, add the following snippet:

```yml
lightning:
  image: williamfromnj/bolt:0.8.0
  volumes:
    - ./config:/app/data
  restart: always
```

Note that you will need to make the config folder adjacent to the compose file and place the `config.ts` file inside. See [_configuration_](configuration.md) and [_plugins_](plugins.md)

## Running lightning

Use `docker compose up -d lightning` to run lightning