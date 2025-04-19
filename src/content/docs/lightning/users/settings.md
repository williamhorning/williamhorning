---
title: Bridge Settings
next:
  link: /lightning/hosting
  label: Hosting
---

# Bridge Settings

Settings are a way to change certain ways lightning works. As of right now,
there are only the following settings:

To see if a setting is on, use `!bridge status`\
To toggle a setting, use `!bridge toggle [setting]`

## `allow_everyone`

This setting allows you to decide whether to bridge mass-pings (such as
`@everyone` or `@here`). This defaults to `false` (off) for safety reasons. When
enabled, it will allow mass-pings to be sent to the bridged channel.

| on                                | off (default)                       |
| --------------------------------- | ----------------------------------- |
| ![on](./settings/everyone-on.png) | ![off](./settings/everyone-off.png) |
