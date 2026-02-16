import { ReadListing } from "./WebBFF";

//function to get the id of the listing through url
export async function GetListingIdByURL(url: string) {
    //getting all of the listing
    const listings = await ReadListing(100);

    //normalizing the url by removing any space
    const normalize = (value: string) => value.trim();

    //checking for matching url
    const match = listings.find((listing: any) => normalize(listing.url) == normalize(url));

    //throw error if nothing is found
    if (!match) {
        throw new Error("Listing not found for the provided URL.")
    }

    return match.listing_id;

}