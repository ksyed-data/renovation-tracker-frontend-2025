import { AxioInstance } from "./API/AxioInstance";
import { GetListingIdByURL } from "./WebBFFHelper";

//Create a Listing. Format should match HomeListing.ts interface. NOTE: URL and Street Address must be unique otherwise it will throw an ERROR.
export async function CreateListing(testPayload: ListingInterface) {
  try {
    const { data } = await AxioInstance.post("/listings/", testPayload);
    console.log(data);
    return data;    
  } 
  catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }

}
//Get the listing base on the URL
export async function GetListingWithRenovation(url: string) {
  try {
    const id:number = await GetListingIdByURL(url);
    const {data: listingData} = await AxioInstance.get<ListingInterface>(`/listings/${id}`);
    const {data: renovationData} = await AxioInstance.get<RenovationListingInterface[]>(`/renovations/${id}/read`)
    return {
      listing: listingData,
      renovation: renovationData[0]
    };  
  }
  catch (error) {
    console.error("GET Listing failed:", error)
    throw error;
  }
}

//Read all of the listing up to a limit of 100. Return every single listing data.
export async function ReadListing(id: number = 100) {
  try {
    const { data } = await AxioInstance.get(`/listings/`, {params: {limit:100}});
    return data;
  }
  catch (error) {
    console.error("GET request failed:", error)
    throw error;
  }

}

//Update listing information base on URL as input. Payload should be type HomeListing. 
export async function UpdateListing(url: string, updateListing: ListingInterface) {
  try {
    const id:number = await GetListingIdByURL(url);
    const { data } = await AxioInstance.put(`/listings/${id}`, updateListing);
    return data;    
  }
  catch(error) {
    console.error("PUT command failed:", error);
    throw error;
  }

}

//Delete the listing base on the URL.
export async function DeleteListing(url: string) {
  try {
    const id:number = await GetListingIdByURL(url);
    const { data } = await AxioInstance.delete(`/listings/${id}`);
    return data;
  }
  catch(error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
}
