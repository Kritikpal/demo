> **Note**: This repo is no longer officially maintained as of Jan, 2023.
> Feel free to use it, fork it and patch it for your own needs.

## The node.js example app

[![CircleCI](https://img.shields.io/circleci/project/github/contentful/the-example-app.nodejs.svg)](https://circleci.com/gh/contentful/the-example-app.nodejs)

The node.js example app teaches the very basics of how to work with Contentful:

- consume content from the Contentful Delivery and Preview APIs
- model content
- edit content through the Contentful web app

The app demonstrates how decoupling content from its presentation enables greater flexibility and facilitates shipping higher quality software more quickly.

<a href="https://the-example-app-nodejs.herokuapp.com/" target="_blank"><img src="https://images.contentful.com/qz0n5cdakyl9/4GZmvrdodGM6CksMCkkAEq/700a527b8203d4d3ccd3c303c5b3e2aa/the-example-app.png" alt="Screenshot of the example app"/></a>

You can see a hosted version of `The node.js example app` on <a href="https://the-example-app-nodejs.contentful.com/" target="_blank">Heroku</a>.

## What is Contentful?

[Contentful](https://www.contentful.com) provides a content infrastructure for digital teams to power content in websites, apps, and devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app that enable developers and content creators to ship digital products faster.

## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

## Common setup

Clone the repo and install the dependencies.

```bash
git clone  https://github.com/Kritikpal/demo.git
cd demo
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:4000](http://localhost:4000) and take a look around.
