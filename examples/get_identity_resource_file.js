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

  const resourceFile = await client.getIdentityResourceFileById(
    "00000000-0000-0000-0000-000000000000",
    "00000000-0000-0000-0000-000000000001",
    "00000000-0000-0000-0000-000000000002",
  );
  console.log(resourceFile);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
