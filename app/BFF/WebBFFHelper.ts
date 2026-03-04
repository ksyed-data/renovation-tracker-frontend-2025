import type { RenovationInputInterface } from "~/components/types/RenovationInputInterface";
import { ReadListing } from "./WebBFF";
import type { ListingResponseInterface } from "~/components/types/ListingResponseInterface";

//function to get the id of the listing through url
export async function GetListingIdByURL(url: string): Promise<number | null> {
  //getting all of the listing
  const listings: ListingResponseInterface[] = await ReadListing(100);

  //normalizing the url by removing any space
  const normalize = (value: string) => value.trim();

  //checking for matching url
  const match = listings.find(
    (listing: any) => normalize(listing.url) == normalize(url),
  );

  //throw error if nothing is found
  if (!match) {
    return null;
  }

  return match.listing_id;
}

//building payload for renovation endpoint
export function BuildRenovationListing(
  listing_id: number,
  items: { name: string; renovated: boolean }[],
): RenovationInputInterface {
  const getRenovated = (field: string): boolean => {
    return items.find((i) => i.name == field)?.renovated ?? false;
  };

  return {
    listing_id,
    bathroom: getRenovated("bathroom"),
    kitchen: getRenovated("kitchen"),
    living_room: getRenovated("living_room"),
    bedroom: getRenovated("bedroom"),
    basement: getRenovated("basement"),
  };
}
//add a validation function
export function IsValidURL(url: string) {
    const pattern = /^https:\/\/www\.homes\.com\/property\/.+\/$/;
    return pattern.test(url);
}