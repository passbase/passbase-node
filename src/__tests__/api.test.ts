import {PassbaseConfiguration, PassbaseClient} from "../";

const configuration = new PassbaseConfiguration({
  apiKey: "123",
});

describe("can be initialized", () => {
  it("accepts a configuration", () => {
    const client = new PassbaseClient(configuration);
    expect(client.config.apiKey).toBe("123");
    expect(client.config.format).toBe("application/json");
  });

  it("errors if no config is provided", () => {
    expect(() => {
      new PassbaseClient();
    }).toThrow(/missing config/);
  });
});

describe("can request data", () => {
  const client = new PassbaseClient(configuration);

  it("gets identities", async () => {
    const fetchMock = jest
      .spyOn(client, "fetchPassbaseAPI")
      .mockImplementation(() => {
        return {
          data: [
            {id: "fake_id1", resources: []},
            {id: "fake_id2", resources: []},
          ],
          cursor: {next: null},
        };
      });
    await client.listIdentities();

    expect(fetchMock.mock.calls[0][0]).toBe("/identities");

    fetchMock.mockClear();
  });

  it("gets one identity by id", async () => {
    const fetchMock = jest
      .spyOn(client, "fetchPassbaseAPI")
      .mockImplementation(() => {
        return {id: "fake_id", resources: []};
      });
    await client.getIdentity("fake_id");

    expect(fetchMock.mock.calls[0][0]).toBe("/identities/fake_id");
    fetchMock.mockClear();
  });

  it("gets identity resources", async () => {
    const fetchMock = jest
      .spyOn(client, "fetchPassbaseAPI")
      .mockImplementation(() => {
        return {
          data: [
            {id: "fake_resource_id1", resource_files: []},
            {id: "fake_resource_id2", resource_files: []},
          ],
          cursor: {next: null},
        };
      });
    await client.listIdentityResources("fake_id");

    expect(fetchMock.mock.calls[0][0]).toBe("/identity/fake_id/resources");
    fetchMock.mockClear();
  });

  it("gets a specific identity resource", async () => {
    const fetchMock = jest
      .spyOn(client, "fetchPassbaseAPI")
      .mockImplementation(() => {
        return {id: "fake_resource_id1", resource_files: []};
      });
    await client.getIdentityResource("fake_id", "fake_resource_id1");

    expect(fetchMock.mock.calls[0][0]).toBe(
      "/identity/fake_id/resources/fake_resource_id1",
    );
    fetchMock.mockClear();
  });

  it("gets project settings", async () => {
    const fetchMock = jest
      .spyOn(client, "fetchPassbaseAPI")
      .mockImplementation(() => {
        return {id: "fake_id"};
      });
    await client.getProjectSettings();

    expect(fetchMock.mock.calls[0][0]).toBe("/settings");
    fetchMock.mockClear();
  });
});
