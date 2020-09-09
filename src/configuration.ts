import {PassbaseError} from "./utils";
// @ts-ignore
import {name, version} from "../package.json";

export interface ConfigurationParameters {
  apiKey: string;
  format?: ResponseFormats;
  basePath?: string;
}

export enum ResponseFormats {
  Json = "application/json",
  Xml = "application/xml",
}

export const SDK_NAME = `${name}@${version}`;
export class PassbaseConfiguration {
  readonly apiKey: string;
  readonly format: ResponseFormats;
  readonly basePath: string;

  constructor(param: ConfigurationParameters) {
    if (!param.apiKey) {
      throw new PassbaseError("missing apiKey");
    }

    if (
      param.format &&
      !Object.values(ResponseFormats).includes(param.format)
    ) {
      throw new PassbaseError(`unsupported response format`);
    }

    this.apiKey = param.apiKey;
    this.format = param.format || ResponseFormats.Json;
    this.basePath =
      param.basePath || "https://api.passbase.com/api/verification/v1";
  }
}
