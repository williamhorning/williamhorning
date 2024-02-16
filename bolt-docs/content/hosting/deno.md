# deno

while you may want to use docker in production, local development may be easier
if you use a local copy of deno on your machine.

## prereqs

- deno >= 1.40.4
- git >= 2.43.0
- mongodb >= 4
- redis >= 6.2

## getting started

clone the bolt repo and open a terminal in that folder. run git switch to switch to
a release branch and then install the bolt cli. use `bolt run` to run an instance.

```sh

git clone https://github.com/williamhorning/bolt
cd bolt
git switch 0.5.5
deno install -A --unstable-temporal --name bolt ./packages/bolt-cli/mod.ts
bolt run
```

you may want to [configure](./configure.md) your instance
