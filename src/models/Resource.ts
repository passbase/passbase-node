import {ResourceFile} from "./ResourceFile";

export enum ResourceStatus {
  Created = "created",
  Processing = "processing",
  Processed = "processed",
  Verified = "verified",
  unverified = "unverified",
}

export class Resource {
  id: string;
  status: ResourceStatus;
  step: string;
  resourceFiles: ResourceFile[];
  created: Date;
  updated: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.step = obj.step;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
    this.resourceFiles = (obj.resource_files || []).map(
      (resourceFile: any) => new ResourceFile(resourceFile),
    );
  }
}
