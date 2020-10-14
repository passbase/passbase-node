export enum ResourceFileType {
  FaceVideo = "face_video",
  DocumentImage = "document_image",
}

export class ResourceFile {
  id: string;
  type: ResourceFileType;
  page: number;
  created: Date;
  updated: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.type = obj.type;
    this.page = obj.page;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
  }
}
