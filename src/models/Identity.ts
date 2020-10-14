import {IdentityResource} from "./IdentityResource";
import {Watchlist} from "./Watchlist";

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

export class Identity {
  id: string;
  status: IdentityStatus;
  created: Date;
  updated: Date;
  resources: IdentityResource[];
  watchlist: Watchlist | null;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
    this.resources = obj.resources.map(
      (resource: any) => new IdentityResource(resource),
    );
    this.watchlist = obj.watchlist ? new Watchlist(obj.watchlist) : null;
  }
}
