1. Add @passbase/node npm package to your package.json. Passbase has no dependency but expects node version to be LTS (12.x).

```sh
# yarn
yarn add @passbase/node

# npm
npm install @passbase/node --save
```

2. Import `PassbaseClient`, `PassbaseConfiguration` from `@passbase/node` in your app

```js
const {PassbaseClient, PassbaseConfiguration} = require("@passbase/node");

async function main() {
  const apiKey = "{{YOUR_SECRET_API_KEY}}";

  const config = new PassbaseConfiguration({
    apiKey,
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
