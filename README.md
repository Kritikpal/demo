## The node.js demo tlz app



## Requirements

* Node 18.18.2
* Npm 10.2.1
* Git

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Kritikpal/demo.git
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
