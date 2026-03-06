import type { ListingInterface } from "./ListingInterface";
import type { PhotoListing } from "./PhotoListing";
import type { RenovationListingInterface } from "./RenovationListingInterface";

export interface FullListingDetailInterface {
  listing: ListingInterface;
  renovation: RenovationListingInterface;
  photos: PhotoListing[];
}
