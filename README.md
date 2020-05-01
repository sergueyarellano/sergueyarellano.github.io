# this is a static website

A personal [website](https://sergueyarellano.github.io) for github pages. 

There I put my posts and other content about javascript mainly.

# deploy

It is a little hacky since it is deployed to github pages. Here is how I do it using git subtree:

```
$ git subtree push --prefix dist origin master
```
- create master from a subtree of your current branch
- contents of dist/ is what we will see on master
- it has to be master if the repo is named username.github.io

When using rebase you might find trouble:

```
$ git push origin `git subtree split --prefix dist develop`:master --force
```
- When rebasing you could find problems using the first command. In that case we have to force push to master.
- Develop is the branch where I generate the builds in `dist/`

