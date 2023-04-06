## Instructions

### Install and Run

Clone repository and install. Client is setup to work with `simpledo-server`. You can clone and setup the server first, if you haven't already. 

Repo: `https://github.com/ozbeksu/simpledo-server`

```shell
git clone https://github.com/ozbeksu/simpledo-client
cd simpledo-server
yarn
cp .env.dev .env
```

After installion finishes run `simpledo-server` and client:

```shell
yarn dev
```

### Developent

If you make any changes to `schema.graphql` file, you can generate new types with command:

```shell
yarn codegen
```