import type { ListingInterface } from "./ListingInterface";
import type { PhotoResponse } from "./PhotoResponse";
import type { RenovationListingInterface } from "./RenovationListingInterface";

export interface FullListingDetailInterface {
  listing: ListingInterface;
  renovation: RenovationListingInterface;
  photos: PhotoResponse;
}
