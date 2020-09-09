const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("../lib");

async function main() {
  const apiKey = "[redacted]";

  const config = new PassbaseConfiguration({
    apiKey,
    format: ResponseFormats.Json,
  });
  const client = new PassbaseClient(config);

  const identities = await client.listIdentityResources(
    "00000000-0000-0000-0000-000000000000",
  );
  console.log(JSON.stringify(identities, null, 4));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
