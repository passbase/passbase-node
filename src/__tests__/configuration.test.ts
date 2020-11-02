/* tslint: disable */
import {PassbaseConfiguration, ResponseFormats} from "../";

describe("can be initialized", () => {
  it("stores the api key properly", () => {
    const configuration = new PassbaseConfiguration({
      apiKey: "123",
    });
    expect(configuration.apiKey).toBe("123");
  });

  it("errors if the api key is not provided", () => {
    expect(() => {
      new PassbaseConfiguration();
    }).toThrow(/apiKey/);
  });

  it("checks if the format is present", () => {
    const configuration = new PassbaseConfiguration({
      apiKey: "123",
      format: ResponseFormats.Xml,
    });
    expect(configuration.format).toBe("application/xml");
  });

  it("defaults the format to json if not present", () => {
    const configuration = new PassbaseConfiguration({
      apiKey: "123",
    });
    expect(configuration.format).toBe("application/json");
  });
  it("checks if the basePath is present", () => {
    const configuration = new PassbaseConfiguration({
      apiKey: "123",
      basePath: "test_base_path",
    });
    expect(configuration.basePath).toBe("test_base_path");
  });

  it("defaults the basePath to prod if not present", () => {
    const configuration = new PassbaseConfiguration({
      apiKey: "123",
    });
    expect(configuration.basePath).toBe(
      "https://api.passbase.com/verification/v1",
    );
  });
});
