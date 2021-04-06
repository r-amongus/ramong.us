---
id: how-to-contribute
title: How to Contribute
layout: contributing
permalink: docs/how-to-contribute.html
next: codebase-overview.html
redirect_from:
  - "contributing/how-to-contribute.html"
  - "tips/introduction.html"
---

ramong.us is one of our subreddit's first open source projects that is both under very active development and is also being used to ship code to everybody on [ramong.us](https://ramong.us). We're still working out the kinks to make contributing to this project as easy and transparent as possible, but we're not quite there yet. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

### [Code of Conduct](https://github.com/amongussubreddit/ramong.us/blob/main/CODE_OF_CONDUCT.md) {#code-of-conduct}

/r/AmongUs has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it. Please read [the full text](https://github.com/amongussubreddit/ramong.us/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Open Development {#open-development}

All work on ramong.us happens directly on [GitHub](https://github.com/amongussubreddit/ramong.us). Both core team members and external contributors send pull requests which go through the same review process.

### Branch Organization {#branch-organization}

Submit all changes directly to the [`main branch`](https://github.com/amongussubreddit/ramong.us/tree/main). We don't use separate branches for development or for upcoming releases. We do our best to keep `main` in good shape, with all tests passing.

### Bugs {#bugs}

#### Where to Find Known Issues {#where-to-find-known-issues}

We are using [GitHub Issues](https://github.com/amongussubreddit/ramong.us/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

#### Reporting New Issues {#reporting-new-issues}

The best way to get your bug fixed is to provide a reduced test case.

### How to Get in Touch {#how-to-get-in-touch}

We communicate through our [Discord server](https://discord.gg/hde4HCSRA8)

### Proposing a Change {#proposing-a-change}

If you intend to change public content, or make any non-trivial changes, we recommend [filing an issue](https://github.com/amongussubreddit/ramong.us/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Your First Pull Request {#your-first-pull-request}

Working on your first Pull Request? You can learn how from this free video series:

**[How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)**

To help you get your feet wet and get you familiar with our contribution process, we have a list of **[good first issues](https://github.com/amongussubreddit/ramong.us/issues?q=is:open+is:issue+label:"good+first+issue")** that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take it over but you should still leave a comment.

### Sending a Pull Request {#sending-a-pull-request}

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We'll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/amongussubreddit/ramong.us) and create your branch from `main`.
2. Run `yarn` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Format your code (`yarn check-all`).

### Contribution Prerequisites {#contribution-prerequisites}

* You have [Node](https://nodejs.org) installed at v8.0.0+ and [Yarn](https://yarnpkg.com/en/) at v1.2.0+.
* You are familiar with Git.

### Style Guide {#style-guide}

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `yarn check-all` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

### Request for Comments (RFC) {#request-for-comments-rfc}

Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a consensus among the ramong.us core team.

The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project.

### License {#license}

By contributing to ramong.us, you agree that your contributions will be licensed under its CC-BY-4.0 license.

### What Next? {#what-next}

Read the [next section](/docs/codebase-overview.html) to learn how the codebase is organized.
