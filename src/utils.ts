/* tslint:disable:max-classes-per-file */

export class PassbaseError extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.message = `[passbase-sdk]: ${this.message}`;
  }
}

export enum Method {
  Get = "GET",
  Post = "POST",
}
