# configuring Bolt

## `config.ts`

bolt looks for a config file passed using the `--config` flag passed to `bolt run`
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
