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
  /** @deprecated Use `type` instead */ step: string;
  type: string;
  resourceFiles: ResourceFile[];
  created: Date;
  updated: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.type = obj.type || obj.step;
    this.step = this.type;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
    this.resourceFiles = (obj.resource_files || []).map(
      (resourceFile: any) => new ResourceFile(resourceFile),
    );
  }
}
