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

  const settings = await client.getProjectSettings();
  console.log(JSON.stringify(settings, null, 4));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
