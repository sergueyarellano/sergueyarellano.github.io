You work in a repo in `github`, you have friends or teammates and want to be more efficient with your development. Here is how we do it.

# Branches

- `master` - reflects the code that is in production.
- `develop` - it is created from `master`. `feat/*` branches will integrate into `develop`.
- `feat/name` - are created from `develop`. `feat/account-form`, `feat/button-animation`, etc... they are work in progress (WIP), and when complete, they integrate into `develop`.
- `fix/name` - are created from `develop`. They reflect changes that solve a bug in the codebase and will integrate into `develop`

```
        H---I---J feat/button-animation
      /
    D---E---F---G develop
  /
A---B---C master
```

# Create feature branch

Checkout branch develop, update and checkout a new feature branch
```
$ git checkout develop
$ git pull
$ git checkout -b feat/button-animation
```

If you set an `alias`
```
$ git config --global alias.cd !sh -c "git checkout develop; git pull"
```

next time you can do
```
$ git cd
$ git checkout -b feat/button-animation
```

# Workflow in a feature branch

## Notes
One rule, if you rebase (that is what you should do IMO) you should not share a feature branch with another person. [Checkout the perils of rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

The reason is that rebasing a branch `re-hashes` the new commits that you have in the **feature** branch, integrates new commits from the branch you are rebasing, and finally puts that re-hashed commits **on top** of the **feature** branch. 

Basically, you are changing the `base/parent` commit from where the feature branch was created to the latest commit that came in.

## Update local feature branch with develop origin/develop


before rebasing
```
    H---I---J feat/button-animation
  /
D---E---F---G develop origin/develop
```

Get the latest state of `origin/develop` (where everybody in your team is integrating their features/changes)
```
$ git checkout feat/button-animation
$ git fetch -p origin develop
$ git rebase FETCH_HEAD
```

After rebasing:

```
                H'---I'---J' feat/button-animation
              /
D---E---F---G develop origin/develop
```

## Push changes to your `feature` remote branch `origin/feat`

```
$ git push
```

If you just rebased `develop` and your remote branch looks different:

Local
```
                H'---I'---J' feat/button-animation
              /
D---E---F---G develop
```

Remote

```
    H---I---J origin/feat/button-animation
  /
D---E---F---G origin/develop
```

Then, an error will occur and git will recommend you to update your local branch with remote branch, but we don't want to do that. You don't have other way but to push your local branch with brutal force.

```
$ git push --force
```

Scary uh? this is where you understand that rebasing is a destruction process.

If you prefer a safer option, then you can do instead

```
$ git push --force-with-lease
```

that will fail if there is work from somebody else in the remote branch, but remember to not share feature branches with people in the first place.

Rebasing is destructive, but the history ends up cleaner. It is like having drafts (feature branches) that have to be polished before using them in the novel you are writting.

# Integrate features in develop

1. Create a `pull request`
2. Ask for code review
3. CI checks must pass. You can set a CI with [Github actions](https://github.com/features/actions)
4. Squash commits before merging into develop

# Squash commits

## Notes
You can choose to squash commits or not.

Do you, and your team prefer more commits like this:

```
$ git log --oneline

// This is what I call draft
7 feat: add complete ripple effect to button
6 feat: add button animation transform
5 fix: css button width responsiveness
4 chore: use differente library for button animation
3 style: apply some eslint rules
2 feat: add button animation size
1 chore: add css Y animation dependency
```

or just one commit like this:

```
$ git log

commit xxxx
Author: Mr x
Date: today

  feat: add ripple animation to button

  - add CSS x animation library. It works better than Y because ...
  - Button is responsive both for desktop and mobile
```

It depends on how you want to present history and how do you prefer to [bisect](https://www.metaltoad.com/blog/beginners-guide-git-bisect-process-elimination) if you need it. Also, this kind of decisions are related on the use of [semver](https://semver.org/). 

Imagine you want to generate a `changelog` automatically because you follow (and you should) [semantic commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) convention. If you squash your commits it will look better and will focus the attention in just one `feat` commit than in several.

```
Changelog

Added:
- feat: add ripple animation to button [link to commit] 

// Good :)
```

```
Changelog

Added:
- feat: add complete ripple effect to button [link to commit]
- feat: add button animation transform [link to commit]
- feat: add button animation size [link to commit]

// Bad :(
```

As you can see, this is a decission you need to make with your peers.

## Squash

First update your local branch with latest changes
```
$ git checkout feature/button-animation
$ git fetch -p origin develop
$ git rebase FETCH_HEAD
```

Let's see our history
```
$ git log --oneline

7 feat: add complete ripple effect to button
6 feat: add button animation transform
5 fix: css button width responsiveness
4 chore: use differente library for button animation
3 style: apply some eslint rules
2 feat: add button animation size
1 chore: add css Y animation dependency

// and parent commits for this feature
z chore: update package 
y feat: add account form
...
```

to squash from, use interactive option and provide the parent commit. You will see commits in reverse order

```
$ git rebase -i z

pick 1 chore: add css Y animation dependency
pick 2 feat: add button animation size
pick 3 style: apply some eslint rules
pick 4 chore: use differente library for button animation
pick 5 fix: css button width responsiveness
pick 6 feat: add button animation transform
pick 7 feat: add complete ripple effect to button
```

Use your editor to leave the first commit with `pick` and the rest with `squash`

```
pick 1 chore: add css Y animation dependency
squash 2 feat: add button animation size
squash 3 style: apply some eslint rules
squash 4 chore: use differente library for button animation
squash 5 fix: css button width responsiveness
squash 6 feat: add button animation transform
squash 7 feat: add complete ripple effect to button
```

Save when ready and continue rebasing. You will get a chance to amend the squashed commit and write a nice commit message with the final draft information:

```
commit xxxx
Author: Mr x
Date: today

  feat: add ripple animation to button

  - add CSS x animation library. It works better than Y because ...
  - Button is responsive both for desktop and mobile
```

You can always do `git commit --amend` to edit the commit again.

Then update your remote branch with new changes:

```
$ git push -f
```

And if the changes pass the tests, and all checks in the `PR` are green, then it is time to press `rebase and merge` button.

