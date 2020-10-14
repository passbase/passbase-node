import {ResourceFile} from "./ResourceFile";

export enum ResourceType {
  Passport = "PASSPORT",
  DriversLicense = "DRIVERS_LICENSE",
  NationalIdCard = "NATIONAL_ID_CARD",
  HealthInsuranceCard = "HEALTH_INSURANCE_CARD",
  SelfieVideo = "SELFIE_VIDEO",
  ProofOfAddress = "PROOF_OF_ADDRESS",
  Email = "EMAIL",
}

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
  type: ResourceType;
  resourceFiles: ResourceFile[];
  created: Date;
  updated: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.type = obj.type;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
    this.resourceFiles = obj.resource_files.map(
      (resourceFile: any) => new ResourceFile(resourceFile),
    );
  }
}
