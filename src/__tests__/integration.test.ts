/* tslint: disable */
import {PassbaseConfiguration, PassbaseClient} from "../";

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
    expect(list.length).toBe(2);
  });

  it("gets 1 identity", async () => {
    const identity = await client.getIdentityById(
      "c6b7e897-ce5e-4769-8938-76cb69d0802c",
    );
    expect(identity.id).toBe("c6b7e897-ce5e-4769-8938-76cb69d0802c");
    expect(identity.owner).toEqual({
      email: "nicolas@passbase.com",
      firstName: "NICOLAS",
      lastName: "BRUGNEAUX",
    });
  });

  it("gets 1 identity resources", async () => {
    const resources = await client.listIdentityResources(
      "c6b7e897-ce5e-4769-8938-76cb69d0802c",
    );
    expect(resources.length).toBe(1);
    expect(resources[0].type).toBe("PASSPORT");
  });

  it("gets 1 identity resources", async () => {
    const resource = await client.getIdentityResourceById(
      "c6b7e897-ce5e-4769-8938-76cb69d0802c",
      "44d9c186-5c08-4128-a893-10c1edcb6d28",
    );
    expect(resource.id).toBe("44d9c186-5c08-4128-a893-10c1edcb6d28");
    expect(resource.type).toBe("PASSPORT");
  });

  it("doesnt get 1 identity resource file", async () => {
    expect(
      async () =>
        await client.getIdentityResourceFileById(
          "c6b7e897-ce5e-4769-8938-76cb69d0802c",
          "44d9c186-5c08-4128-a893-10c1edcb6d28",
          "82ac204f-782d-4f06-9491-da2342f6bf24",
        ),
    ).rejects.toEqual(
      new Error("[passbase-sdk]: Request failed with status=401"),
    );
  });
});
