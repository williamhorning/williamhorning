# hosting bolt

since bolt's codebase is fairly simple, it's pretty easy to run an instance for
yourself. you can use either docker (recomended) or deno to setup an instance that
you can then configure or run database migrations on.

## with docker (recomended)

### prerequisites

- docker >= 20.10.21
- docker compose >= 2

### compose

on your server, make a new folder and create a compose file similar to the one below:

```yaml
version: "2"
services:
  bolt:
    image: williamfromnj/bolt:0.5.5
    volumes:
      - ./config:/app/data
    restart: always
  mongo:
    image: mongo:6-jammy
    ports:
      - 27017:27017
    volumes:
      - ./db:/data/db
    restart: always
  redis:
    image: redis:6.2-alpine
    ports:
      - 6379:6379
    volumes:
      - ./redis:/data
    restart: always
```

### notes

- this is how you'll want to use bolt in a production environment
- your config file will be in a `config` folder in the same folder as your compose file
- when configuring your instance, set `mongo_uri` to `mongodb://mongo:27017` and `redis_host` to `redis`
- when trying to access the cli, you will need to use `docker compose exec bolt ...` instead of `bolt ...`
- if you want to run from source, replace the line with `image: williamfromnj` with `build: .`
- if your plugins require ports to be forwarded, add the necessary forwarding rules to your
  compose file

## with deno

### prerequisites

- deno >= 1.40.4
- git >= 2.43.0
- mongodb >= 4
- redis >= 6.2

### deno cli

clone the bolt repo and open a terminal in that folder. run git switch to switch to
a release branch and then install the bolt cli. use `bolt run` to run an instance.

```sh

git clone https://github.com/williamhorning/bolt
cd bolt
git switch 0.5.5
deno install -A --unstable-temporal --name bolt ./packages/bolt/cli.ts
bolt --run
```

### notes

- don't do this in production
- switch 0.5.5 with main to use the main branch
- you'll need your own copy of mongodb running
- your config file will be in the directory you use `bolt --run` in

# configuring bolt

bolt looks for a config file passed using the `--config` flag passed to `bolt --run`
or a `config.ts` file in the current directory. options you can pass are defined in
the file `/packages/bolt/utils/config.ts`.

## example

```ts
import { define_config } from "https://williamhorning.dev/bolt/x/bolt/0.5.5/mod.ts";
import { discord_plugin } from "https://williamhorning.dev/bolt/x/bolt-discord/0.5.5/mod.ts";

export default define_config({
  mongo_database: "bolt-canary",
  mongo_uri: "mongodb://localhost:27017",
  redis_host: "localhost",
  redis_port: 6379,
  plugins: [
    {
      type: discord_plugin,
      config: {
        appId: "...",
        token: "...",
      },
    },
  ],
  prod: false,
});
```

# database migrations

between different versions of bolt, the way the database has been setup has changed
signifigantly, and to account for differences, the `bolt --migrations` command in the
cli should let you migrate between versions. if you need help, join the support server.
the latest version listed in that tool is the one you should use with the latest version
of bolt. a list of versions and which db version you can use is below:

| Type     | Versions    |
| -------- | ----------- |
| 0.4      | <= 0.4.12   |
| 0.4-beta | 0.4.0-0.5.0 |
| 0.5      | >= 0.5.0    |
