# hosting lightning

since lightning's codebase is fairly simple, it's pretty easy to run an instance for
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
  lightning:
    image: williamfromnj/bolt:0.6.0
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

- the image _is not_ williamfromnj/lightning
- this is how you'll want to use lightning in a production environment
- your config file will be in a `config` folder in the same folder as your compose file
- when configuring your instance, set `mongo_uri` to `mongodb://mongo:27017` and `redis_host` to `redis`
- when trying to access the cli, you will need to use `docker compose exec lightning ...` instead of `lightning ...`
- if you want to run from source, replace the line with `image: williamfromnj` with `build: .`
- if your plugins require ports to be forwarded, add the necessary forwarding rules to your compose file

## with deno

### prerequisites

- deno >= 1.40.4
- git >= 2.43.0
- mongodb >= 4
- redis >= 6.2

### deno cli

clone the lightning repo and open a terminal in that folder. run git switch to switch to
a release branch and then install the lightning cli. use `lightning run` to run an instance.

```sh

git clone https://github.com/williamhorning/lightning
cd lightning
git switch 0.6.0
deno install -A --unstable-temporal --name lightning ./cli.ts
lightning --run
```

### notes

- don't do this in production
- switch 0.6.0 with main to use the main branch
- you'll need your own copy of mongodb running
- your config file will be in the directory you use `lightning --run` in

# configuring lightning

lightning looks for a config file passed using the `--config` flag passed to `lightning --run`
or a `config.ts` file in the current directory. options you can pass are defined in
the file `/utils/config.ts`.

## example

```ts
import { define_config } from "jsr:@jersey/lightning@0.6.0";
import { discord_plugin } from "jsr:@jersey/bolt-discord@0.6.0";

export default define_config({
  mongo_database: "lightning-canary",
  mongo_uri: "mongodb://localhost:27017",
  redis_host: "localhost",
  redis_port: 6379,
  plugins: [
    discord_plugin.new({
      // ...
    }),
  ],
});
```

# database migrations

between different versions of lightning/bolt, the way the database has been setup has changed
signifigantly, and to account for differences, the `lightning --migrations` command in the
cli should let you migrate between versions. if you need help, join the support server.
the latest version listed in that tool is the one you should use with the latest version
of lightning. a list of versions and which db version you can use is below:

| Type     | Versions    |
| -------- | ----------- |
| 0.4      | <= 0.4.12   |
| 0.4-beta | 0.4.0-0.5.0 |
| 0.5      | >= 0.5.0    |
