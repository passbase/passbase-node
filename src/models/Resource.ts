export enum ResourceStatus {
  Created = "created",
  Processing = "processing",
  Processed = "processed",
  Verified = "verified",
  unverified = "unverified",
}

export class Resource {
  type: string;
  datapoints: any; // todo

  constructor(obj: any) {
    this.type = obj.type;
    this.datapoints = obj.datapoints;
  }
}
