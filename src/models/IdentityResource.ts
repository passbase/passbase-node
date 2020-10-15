export class IdentityResource {
  type: string;
  datapoints: {[x: string]: string};

  constructor(obj: any) {
    this.type = obj.type;
    this.datapoints = obj.datapoints;
  }
}
