# using bolt

bolt's a cross-platform chat bot that bridges communities. to get started,
invite the bot with one of these links:

- [Discord](https://discord.com/api/oauth2/authorize?client_id=946939274434080849&permissions=8&scope=bot)
- [Guilded](https://www.guilded.gg/b/9fc1c387-fda8-47cd-b5ec-2de50c03cd64)
- [Revolt](https://app.revolt.chat/bot/01G1Y9M6G254VWBF41W3N5DQY5)

need help? take a look at those pages or join one of the support servers linked on the
[main page](../index.md), where you can also find a changelog.

# commands

the prefix bolt uses is `!bolt` but you may also be able to use slash commands
or other platform-specific ways to run commands. square brackets are used for
optional parameters and angle brackets are for required parameters.

## informational commands

### help

links to this site and lists commands

### info

shows information about the bolt

### ping

how long it takes for bolt to respond to you

### site

links to this site

## bridge commands

### bridge status

tells you if the current channel is in a bridge

### bridge join --bridge=\<name\>

joins a bridge with the name given

### bridge reset --bridge=[name]

_introduced on 0.5_

resets this channels bridge with the name provided or the current bridges name

### bridge leave

leaves the bridge the current channel is in
