import { BackendClient } from "./API/BackendClient";
import type { PropertyInterface } from "~/components/types/PropertyInterface";

export async function getListing(
  listingURL: string,
): Promise<PropertyInterface> {
  const normalizeURL = listingURL.trim().toLowerCase();

  const { data: resolved } = await BackendClient.get("/properties/resolve", {
    params: { url: normalizeURL },
  });

  //fetch propery data
  const { data: property } = await BackendClient.get(
    `/properties/${resolved.id}`,
  );

  //aggregate for frontend
  return {
    url: property.url,
  };
}
