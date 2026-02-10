import { BackendClient } from "./API/BackendClient";
import type { PropertyInterface } from "~/components/types/PropertyInterface";

//http://127.0.0.1:8000/listings/?limit=2


export async function getListing(id: number) {
  const { data } = await BackendClient.get(`/listings/${id}`);

  return data;
}
