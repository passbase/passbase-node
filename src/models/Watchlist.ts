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

export class Watchlist {
  isClean: boolean;
  listings: {[x: string]: Listing};
  media: Media[];
  sources: string[];
  types: string[];

  constructor(obj: any) {
    this.isClean = obj.clean;
    this.listings = obj.listings;
    this.media = obj.media;
    this.sources = obj.sources;
    this.types = obj.types;
  }
}
