---
title: About
next:
  link: /lightning/users
  label: Users Guide
---

![lightning logo](/assets/lightning/wordmark_gradient_dark.svg)

# lightning

- **Connecting Communities**: bridges many popular messaging apps
- **Extensible**: support for messaging apps provided by plugins which can be
  enabled/disabled by the user
- **Easy to run**: able to run in Docker with multiple database options
- **Based on TypeScript**: uses the flexibility of JavaScript along with the
  safety provided by typing and Deno

## the problem - and solution

If you've ever had a community, chances are you talk to them in many different
places, whether that be on Discord, Revolt, Telegram, or Guilded. Over time,
however, you end up with fragmentation as your community starts to grow and
change. Many people end up using multiple messaging apps only for various
versions of your community, people get upset about the differences between the
messaging apps in your community, and it becomes a mess.

Now, you could just say "_X is the only chat app we're using from now on_", but
that risks alienating your community.

What other options are there? Bridging! Everyone gets to use their preferred app
of choice, gets the same messages, and is on the same page.

## prior art

Many bridges have existed before the existence of lightning, however, many of
these solutions have had issues. Some bridges didn't play well with others,
others didn't handle attachments, others refused to handle embedded media, and it
was a mess. With lightning, part of the goal was to solve these issues by
bringing many platforms into one tool, having it become the handler of truth.

## supported platforms

Currently, the following platforms are supported: Discord, Guilded, Revolt, and
Telegram. Support for more platforms is possible to do, however, support for
these platforms should be up to par with support for other platforms and
messages should be presented as similarly to other messages as possible, subject
to platform limitations.

### matrix notes

The Matrix Specification is really difficult to correctly handle, especially
with the current state of JavaScript libraries. Solutions that work without a
reliance on `matrix-appservice-bridge` but still use JavaScript and are
_consistently reliable_ aren't easy to implement and currently I don't have time
to work on implementing this. If you would like to implement Matrix support,
please take a look at #66 for a prior attempt of mine.

### requesting another platform

If you would like support for another platform, please open an issue! I'd love
to add support for more platforms, though there are a few requirements they
should fulfil:

1. having a pre-existing substantial user base
2. having JavaScript libraries with decent code quality
3. having rich-messaging support of some kind

## licensing

lightning is available under the MIT license
