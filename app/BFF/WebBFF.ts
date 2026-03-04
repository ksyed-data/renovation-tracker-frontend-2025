import type { ListingInterface } from "~/components/types/ListingInterface";
import { AxiosInstance } from "./API/AxiosInstance";
import { BuildRenovationListing, GetListingIdByURL, IsValidURL } from "./WebBFFHelper";
import type { RenovationInputInterface } from "~/components/types/RenovationInputInterface";
import type { FullListingDetailInterface } from "~/components/types/FullListingDetailInterface";
import type { ListingResponseInterface } from "~/components/types/ListingResponseInterface";
import type { PredictedRenovationResponse } from "~/components/types/PredictRenovationResponse";
import type { RenovationListingInterface } from "~/components/types/RenovationListingInterface";
import type { PhotoResponse } from "~/components/types/PhotoResponse";

//Create a Listing
export async function CreateListing(
  url: string,
): Promise<CreateListingResponseInterface> {
  try {
    const { data } = await AxiosInstance.post<CreateListingResponseInterface>(
      `/listings/url`,
      null,
      { params: { url } },
    );
    return data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
}
//Get the listing and renovation data base on the URL
export async function GetFullListingDetail(
  url: string,
): Promise<FullListingDetailInterface> {
  try {
    //validating the url
    if(!IsValidURL(url)) {
      alert("Invalid URL.")
      throw new Error("Invalid URL");
    }

    let id: number | null = await GetListingIdByURL(url);
    let predictedData;

    //if no listing is found, we will create a listing by url
    if (id == null) {
      const data = await CreateListing(url);
      id = data.listing_id;
      predictedData = await PredictRenovation(data.description);
      let renovationListing = BuildRenovationListing(
        id,
        predictedData.result.items,
      );
      CreateRenovation(renovationListing);
    }

    //getting data
    const listingData = await GetListing(id);
    const renovationData = await ReadRenovation(id);
    const photoDetail = await ReadListingPhotos(id);

    return {
      listing: listingData,
      renovation: renovationData,
      photos: photoDetail,
    };
  } catch (error) {
    console.error("GET Listing failed:", error);
    alert("Could not find listing.")
    throw error;
  }
}

//Read all of the listing up to a limit of 100. Return every single listing data.
export async function ReadListing(
  id: number = 100,
): Promise<ListingResponseInterface[]> {
  try {
    const { data } = await AxiosInstance.get(`/listings/`, {
      params: { limit: 100 },
    });
    return data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
}

//Update listing information base on URL as input. Payload should be type HomeListing.
export async function UpdateListing(
  url: string,
  updateListing: ListingInterface,
): Promise<ListingInterface> {
  try {
    const id: number | null = await GetListingIdByURL(url);
    const { data } = await AxiosInstance.put(`/listings/${id}`, updateListing);
    return data;
  } catch (error) {
    console.error("PUT command failed:", error);
    throw error;
  }
}

//Delete the listing base on the URL.
export async function DeleteListing(url: string): Promise<void> {
  try {
    const id: number | null = await GetListingIdByURL(url);
    const { data } = await AxiosInstance.delete(`/listings/${id}`);
    return data;
  } catch (error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
}

//predict renovation
export async function PredictRenovation(
  description: string,
): Promise<PredictedRenovationResponse> {
  try {
    const { data } = await AxiosInstance.post("/predict-renovations", {
      description: description,
    });
    return data;
  } catch (error) {
    console.error("Predict request failed:", error);
    throw error;
  }
}
//Creating Renovation listing
export async function CreateRenovation(
  renovationDetail: RenovationInputInterface,
): Promise<RenovationListingInterface> {
  try {
    const { data } = await AxiosInstance.post(
      "/renovations/",
      renovationDetail,
    );
    return data;
  } catch (error) {
    console.error("POST Renovation request failed:", error);
    throw error;
  }
}
//Getting Photo details
export async function ReadListingPhotos(
  listingId: number,
): Promise<PhotoResponse> {
  try {
    const { data } = await AxiosInstance.get(`/photos/${listingId}/read`);
    return data;
  } catch (error) {
    console.error("GET Photo request failed:", error);
    throw error;
  }
}
//Getting Listing
export async function GetListing(
  listingId: number,
): Promise<ListingResponseInterface> {
  try {
    const { data } = await AxiosInstance.get(`/listings/${listingId}`);
    return data;
  } catch (error) {
    console.error("GET Listing request failed:", error);
    throw error;
  }
}
//Getting Renovation
export async function ReadRenovation(
  listingId: number,
): Promise<RenovationListingInterface> {
  try {
    const { data } = await AxiosInstance.get(`/renovations/${listingId}/read`);
    return data;
  } catch (error) {
    console.error("GET Renovation request failed:", error);
    throw error;
  }
}
