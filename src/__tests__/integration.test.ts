/* tslint: disable */
import {PassbaseConfiguration, PassbaseClient} from "../";

if (!process.env.PASSBASE_SECRET_API_KEY) {
  throw new Error(
    "Please run the integration tests with the PASSBASE_SECRET_API_KEY environment variable defined.",
  );
}

const configuration = new PassbaseConfiguration({
  apiKey: process.env.PASSBASE_SECRET_API_KEY,
});

describe("can request data", () => {
  const client = new PassbaseClient(configuration);

  it("gets project settings", async () => {
    const settings = await client.getSettings();
    expect(settings.id).toBe("1e2f07e6-5bd9-4c94-8927-e751694b0988");
    expect(settings.environment).toBe("sandbox");
    expect(settings.organization).toBe("SDK Testing");
    expect(settings.slug).toBe("sdk");
  });

  it("gets identities", async () => {
    const list = await client.listIdentities();
    expect(list.length).toBe(10);
  });

  it("gets 1 identity", async () => {
    const identity = await client.getIdentityById(
      "0f4725ae-0877-4121-b892-eb77b5768c6e",
    );
    expect(identity.id).toBe("0f4725ae-0877-4121-b892-eb77b5768c6e");
    expect(identity.owner).toEqual({
      email: "server-side-sdk-tester@passbase.com",
      firstName: "AASAMUND SPECIMEN",
      lastName: "OESTENBYEN",
    });
  });

  it("gets 1 identity's resources", async () => {
    const resources = await client.listIdentityResources(
      "0f4725ae-0877-4121-b892-eb77b5768c6e",
    );
    expect(resources.length).toBe(1);
    expect(resources[0].type).toBe("PASSPORT");
  });

  it("gets 1 resource", async () => {
    const resource = await client.getIdentityResourceById(
      "0f4725ae-0877-4121-b892-eb77b5768c6e",
      "ac3f51ff-02c8-4179-b3c6-4e915ffd6dc2",
    );
    expect(resource.id).toBe("ac3f51ff-02c8-4179-b3c6-4e915ffd6dc2");
    expect(resource.type).toBe("PASSPORT");
  });

  it("doesnt get 1 identity resource file", async () => {
    const result = await client.getIdentityResourceFileById(
      "0f4725ae-0877-4121-b892-eb77b5768c6e",
      "ac3f51ff-02c8-4179-b3c6-4e915ffd6dc2",
      "1aed2e1b-ca2f-4142-8cf6-29701586fec9",
    );
    expect(result.type).toBe("image/png");
    expect(result.size).toBeGreaterThanOrEqual(640000);
  });
});
