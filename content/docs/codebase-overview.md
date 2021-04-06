---
id: codebase-overview
title: Codebase Overview
layout: contributing
permalink: docs/codebase-overview.html
prev: how-to-contribute.html
redirect_from:
  - "contributing/codebase-overview.html"
---

This section will give you an overview of the ramong.us codebase organization, its conventions, and the implementation.

If you want to [contribute to ramong.us](/docs/how-to-contribute.html) we hope that this guide will help you feel more comfortable making changes.

### Top-Level Folders {#top-level-folders}

After cloning the [ramong.us repository](https://github.com/amongussubreddit/ramong.us), you will see a few top-level folders in it:

* [`content`](https://github.com/amongussubreddit/ramong.us/tree/master/packages) contains the articles themselves. **If your change is related to the content, the `content` subdirectory of each article is where you'll spend most of your time.**
* [`src`](https://github.com/amongussubreddit/ramong.us/tree/master/src) contains components and other various Gatsby-related content.
* `public` is the build output of ramong.us. It is not in the repository but it will appear in your ramong.us clone after you build it for the first time.
