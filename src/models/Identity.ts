// tslint:disable: max-classes-per-file

import {Resource} from "./Resource";

enum IdentityStatus {
  Created = "created",
  Processing = "processing",
  Processed = "processed",
  Verified = "verified",
  Unverified = "unverified",
  Pending = "pending",
  Approved = "approved",
  Declined = "declined",
}

type Listing = {
  url: string;
  name: string;
  aml_types: string[];
  listing_started_utc: string;
};

type Media = {
  url: string;
  date: string;
  title: string;
};

class Watchlist {
  isClean: boolean;
  listings: {[x: string]: Listing};
  media: Media[];
  sources: string[];
  types: string[];

  constructor(obj: any) {
    this.isClean = obj.is_clean;
    this.listings = obj.listings;
    this.media = obj.media;
    this.sources = obj.sources;
    this.types = obj.types;
  }
}

export class Identity {
  id: string;
  status: IdentityStatus;
  created: Date;
  updated: Date;
  resources: Resource[];
  watchlist: Watchlist;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.created = new Date(obj.created_at * 1000);
    this.updated = new Date(obj.reviewed_at * 1000);
    this.resources = obj.resources.map(
      (resource: any) => new Resource(resource),
    );
    this.watchlist = obj.watchlist;
  }
}
