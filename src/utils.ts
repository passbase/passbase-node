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
export enum ProcessingStatus {
  Created = "created",
  Pending = "pending",
  Processed = "processed",
}
export enum VerificationStatus {
  Pending = "pending",
  Verified = "verified",
  Unverified = "unverified",
}
export enum ReviewStatus {
  Pending = "pending",
  Approved = "approved",
  Declined = "declined",
}

export class PassbaseResource {
  type: string;
  datapoints: any; // todo

  constructor(obj: any) {
    this.type = obj.type;
    this.datapoints = obj.datapoints;
  }
}

export class PassbaseIdentity {
  id: string;
  processingStatus: ProcessingStatus;
  verificationStatus: VerificationStatus;
  reviewStatus: ReviewStatus;
  createdAt: Date;
  reviewedAt: Date;
  resources: PassbaseResource[];
  watchlist: any; // todo

  constructor(obj: any) {
    this.id = obj.id;
    this.processingStatus = obj.processing_status;
    this.verificationStatus = obj.verification_status;
    this.reviewStatus = obj.review_status;
    this.createdAt = new Date(obj.created_at);
    this.reviewedAt = new Date(obj.reviewed_at);
    this.resources = obj.resources.map(
      (resource: any) => new PassbaseResource(resource),
    );
    this.watchlist = obj.watchlist;
  }
}

export class UICustomizations {
  mainColor: string;
  buttonColor: string;
  fontFamily: string;

  constructor(obj: any) {
    this.mainColor = obj.main_color;
    this.buttonColor = obj.button_color;
    this.fontFamily = obj.font_family;
  }
}

export class VerificationStep {
  step: string;
  resourceTypes: string[];
  constructor(obj: any) {
    this.step = obj.step;
    this.resourceTypes = obj.resource_types;
  }
}

export class PassbaseProjectSettings {
  id: string;
  slug: string;
  environment: string;
  organization: string;
  uiCustomizations: UICustomizations;
  verificationSteps: VerificationStep[];

  constructor(obj: any) {
    this.id = obj.id;
    this.slug = obj.slug;
    this.environment = obj.environment;
    this.organization = obj.organization;
    this.uiCustomizations = new UICustomizations(obj.ui_customizations || {});
    this.verificationSteps = (obj.verification_steps || []).map(
      (step: any) => new VerificationStep(step),
    );
  }
}
