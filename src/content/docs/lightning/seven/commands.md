---
title: Commands
---

# 0.7.x Commands

Note that `!` may not be the prefix Lightning uses in your server. if you use
bolt, the prefix is `!bolt`. If you are using a custom prefix, replace `!` with
your prefix.

## help

| Usage | `!help` |
| ----- | ------- |

Displays help.

## ping

| Usage | `!ping` |
| ----- | ------- |

Displays the time it takes for the bot to respond to you.

## version

| Usage | `!version` |
| ----- | ---------- |

Displays the version of Lightning the bot runs.

## bridge

Command for managing bridges in the current channel.

### join

| Usage  | `!bridge join --name=[ID]` |
| ------ | -------------------------- |
| `[ID]` | the name of the bridge     |

Joins the bridge with the given ID.

### leave

| Usage | `!bridge leave` |
| ----- | --------------- |

Leaves the bridge in the current channel.

### toggle

| Usage       | `!bridge toggle --setting=[setting]`  |
| ----------- | ------------------------------------- |
| `[setting]` | one of `use_rawname`, `allow_editing` |

Changes a setting on the bridge. 

### status

| Usage | `!bridge status` |
| ----- | ---------------- |

Displays information about the current bridge
