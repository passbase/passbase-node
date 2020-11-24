export class IdentityResourceFile {
  id: string;
  file: Buffer;
  created: Date;
  updated: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.file = Buffer.from(obj.file);
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
  }
}
