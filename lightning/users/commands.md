# Commands

Note that `!` may not be the prefix Lightning uses in your server

## help

| Usage | `!help` |
| ----- | ------- |

Displays help.

![help image](./commands/help.png)

## ping

| Usage | `!ping` |
| ----- | ------- |

Displays the time it takes for the bot to respond to you.

![ping image](./commands/ping.png)

## version

| Usage | `!version` |
| ----- | ---------- |

Displays the version of Lightning the bot runs.

![version image](./commands/version.png)

## bridge

Command for managing bridges in the current channel.

### create

| Usage    | `!bridge create [name]` |
| -------- | ----------------------- |
| `[name]` | a name of your choice   |

Creates a bridge with the name provided, returns the ID of the bridge.

![creating bridge image](./commands/create.png)

### join

| Usage  | `!bridge join [ID]` |
| ------ | ------------------- |
| `[ID]` | an ID of a bridge   |

Joins the bridge with the given ID.

![joining bridge image](./commands/join.png)

### leave

| Usage | `!bridge leave` |
| ----- | --------------- |

Leaves the bridge in the current channel.

![leaving bridge image](./commands/join.png)

### toggle

| Usage       | `!bridge toggle [setting]`                              |
| ----------- | ------------------------------------------------------- |
| `[setting]` | one of `allow_editing`, `allow_everyone`, `use_rawname` |

Changes a setting on the bridge. See [_bridge settings_](settings.md)

![bridge toggle image](./commands/toggle.png)

### status

| Usage | `!bridge status` |
| ----- | ---------------- |

Displays information about the current bridge

![bridge status image](./commands/status.png)
