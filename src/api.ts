import {stringify} from "querystring";
import fetch from "node-fetch";
import {
  PassbaseConfiguration,
  ResponseFormats,
  SDK_NAME,
} from "./configuration";
import {
  PassbaseError,
  Method,
  PassbaseResource,
  PassbaseIdentity,
  PassbaseProjectSettings,
} from "./utils";

const API_KEY_HEADER = "X-API-KEY";

export class PassbaseClient {
  config: PassbaseConfiguration;

  constructor(config: PassbaseConfiguration) {
    if (!config) {
      throw new PassbaseError("missing configuration object");
    }
    this.config = config;
  }

  private async fetchPassbaseAPI(
    url: string,
    method: Method = Method.Get,
    params?: {[x: string]: any},
  ): Promise<any> {
    if (!url) {
      throw new PassbaseError("missing url");
    }

    let body;
    if (method === Method.Get) {
      url = url.concat(`?${stringify(params)}`);
    } else {
      body = JSON.stringify(params);
    }

    const response = await fetch(`${this.config.basePath}${url}`, {
      method,
      body,
      headers: {
        "User-Agent": SDK_NAME,
        [API_KEY_HEADER]: this.config.apiKey,
        Accept: this.config.format,
      },
    });

    if (!response.ok) {
      throw new PassbaseError(await response.text());
    }
    if (this.config.format === ResponseFormats.Json) {
      return response.json();
    }
    return response.text();
  }

  /**
   * List authorized identities
   */
  public async listIdentities() {
    const identities: any[] = await this.fetchPassbaseAPI("/identities");
    return identities.map(identity => new PassbaseIdentity(identity));
  }

  /**
   * Get identity
   */
  public async getIdentity(identityId: string) {
    const identity: any = await this.fetchPassbaseAPI(
      `/identity/${identityId}`,
    );
    return new PassbaseIdentity(identity);
  }

  /**
   * List identity resources
   */
  public async listIdentityResources(identityId: string) {
    const resources: any[] = await this.fetchPassbaseAPI(
      `/identity/${identityId}/resources`,
    );
    return resources.map(resource => new PassbaseResource(resource));
  }

  /**
   * Get resource
   */
  public async getIdentityResource(identityId: string, resourceId: string) {
    const resource: any = await this.fetchPassbaseAPI(
      `/identity/${identityId}/resource/${resourceId}`,
    );
    return new PassbaseResource(resource);
  }

  /**
   * Get project settings
   */
  public async getProjectSettings() {
    const settings: any = await this.fetchPassbaseAPI(`/settings`);
    return new PassbaseProjectSettings(settings);
  }
}
