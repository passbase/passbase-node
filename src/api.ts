import {stringify} from "querystring";
import fetch from "node-fetch";
import {
  PassbaseConfiguration,
  ResponseFormats,
  SDK_NAME,
} from "./configuration";
import {PassbaseError, Method} from "./utils";
import {Identity} from "./models/Identity";
import {ProjectSettings} from "./models/ProjectSettings";
import {Resource} from "./models/Resource";

const API_KEY_HEADER = "X-API-KEY";

type Cursor = {next: string | null};

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

  private async getPaginatedData<T>(
    getter: (cursor?: string) => Promise<{cursor: Cursor; data: T[]}>,
  ): Promise<T[]> {
    const results = [];
    let cursor: Cursor | null = null;
    let data: T[];
    while (!cursor || cursor.next) {
      ({cursor, data} = await getter(
        cursor && cursor.next ? cursor.next : undefined,
      ));
      results.push(...data);
    }
    return results;
  }

  /**
   * List authorized identities
   */
  public async listIdentities() {
    const identities: any[] = await this.getPaginatedData(cursor =>
      this.fetchPassbaseAPI("/identities", Method.Get, {cursor}),
    );
    return identities.map(identity => new Identity(identity));
  }

  /**
   * Get identity
   */
  public async getIdentity(identityId: string) {
    const identity: any = await this.fetchPassbaseAPI(
      `/identities/${identityId}`,
    );
    return new Identity(identity);
  }

  /**
   * List identity resources
   */
  public async listIdentityResources(identityId: string) {
    const resources: any[] = await this.getPaginatedData(cursor =>
      this.fetchPassbaseAPI(`/identity/${identityId}/resources`, Method.Get, {
        cursor,
      }),
    );
    return resources.map(resource => new Resource(resource));
  }

  /**
   * Get resource
   */
  public async getIdentityResource(identityId: string, resourceId: string) {
    const resource: any = await this.fetchPassbaseAPI(
      `/identity/${identityId}/resources/${resourceId}`,
    );
    return new Resource(resource);
  }

  /**
   * Get project settings
   */
  public async getProjectSettings() {
    const settings: any = await this.fetchPassbaseAPI(`/settings`);
    return new ProjectSettings(settings);
  }
}
