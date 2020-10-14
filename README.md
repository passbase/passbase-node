![banner](https://passbase-sdk-banner.netlify.app/node.png)

# Passbase Node SDK ![ci](https://github.com/passbase/passbase-node/workflows/ci/badge.svg)

Welcome to the Passbase Verifications API docs. This documentation will help you understand our models and the Verification API with its endpoints. Based on this you can build your own system (i.e. verification) and hook it up to Passbase.

This package is a client meant to be used on the server-side to communicate with Passbase servers.
You can find more information here: https://docs.passbase.com/server/api

Example how to use the SDK

```js
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");

async function main() {
  const apiKey = "[redacted]";

  const config = new PassbaseConfiguration({
    apiKey,
    format: ResponseFormats.Json,
  });
  const client = new PassbaseClient(config);

  const settings = await client.getProjectSettings();

  console.log(JSON.stringify(settings, null, 4));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

## How to develop

You need to have node LTS installed.

Then run: `make dev`

This will install dependencies and start the tests watcher.

## How to release

Run **one** of the following commands

```
make release-patch
make release-minor
make release-major
```
