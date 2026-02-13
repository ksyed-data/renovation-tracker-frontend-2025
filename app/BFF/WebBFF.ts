import type { HomeListing } from "~/components/types/HomeListing";
import { AxioInstance } from "./API/AxioInstance";
import type { PropertyInterface } from "~/components/types/PropertyInterface";

//http://127.0.0.1:8000/ hosting address

//create listing
//Confirmed that it works
export async function CreateListing(testPayload: HomeListing) {
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

//read Reading listing
export async function ReadListing(id: number) {
  try {
    const { data } = await AxioInstance.get(`/listings/${id}`);
    return data;
  }
  catch (error) {
    console.error("GET request failed:", error)
    throw error;
  }

}

//update listing
export async function UpdateListing(id: number, updateListing: HomeListing) {
  try {
    const { data } = await AxioInstance.put(`/listings/${id}`, updateListing);
    return data;    
  }
  catch(error) {
    console.error("PUT command failed:", error);
    throw error;
  }

}

//delete relevant entities
export async function DeleteListing(id: number) {
  try {
    const { data } = await AxioInstance.delete(`/listings/${id}`);
    return data;
  }
  catch(error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
}
