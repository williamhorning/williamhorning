# docker

docker's the way we host the hosted version of bolt and is what we recommend.

# prereqs

- docker >= 20.10.21
- docker compose >= 2 (optional)

# getting started (compose)

on your server, make a new folder and create a compose file similar to the one below:

```yaml
version: '2'
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

you may want to change where you store data and [configure](./configure.md) your instance.
if you want to do something similar to the above, set `database.mongo` to
`mongodb://mongo:27017` and `database.redis.hostname` to `redis` in your config. to
access the cli, use `docker compose exec bolt ...`

if you want to run from source, follow the steps above, except instead of a new folder,
use one containing the bolt repository, and change your compose file to look like this:

```yaml
services:
  bolt:
    build: .
    volumes:
      ...
```

if your plugins require ports to be forwarded, add the necessary forwarding rules in your
compose file
