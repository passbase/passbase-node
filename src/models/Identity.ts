import { IdentityOwner } from "./IdentityOwner";
import { IdentityResource } from "./IdentityResource";
import { Watchlist } from "./Watchlist";
import { Network } from "./Network";


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
  owner: IdentityOwner | null;
  score: number;
  resources: IdentityResource[];
  metadata: { [x: string]: any } | null;
  watchlist: Watchlist | null;
  network: Network | null;

  constructor(obj: any) {
    this.id = obj.id;
    this.status = obj.status;
    this.created = new Date(obj.created * 1000);
    this.updated = new Date(obj.updated * 1000);
    this.owner = obj.owner ? new IdentityOwner(obj.owner) : null;
    this.score = obj.score;
    this.resources = (obj.resources || []).map(
      (resource: any) => new IdentityResource(resource),
    );
    this.metadata = obj.metadata;
    this.watchlist = obj.watchlist ? new Watchlist(obj.watchlist) : null;
    this.network = obj.network ? new Network(obj.network) : null;
  }
}
