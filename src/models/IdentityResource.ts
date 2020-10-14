import {ResourceType, ResourceStatus} from "./Resource";

export class IdentityResource {
  type: ResourceType;
  datapoints: {[x: string]: string};

  constructor(obj: any) {
    this.type = obj.type;
    this.datapoints = obj.datapoints;
  }
}
