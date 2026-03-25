import type { PhotoListing } from "~/components/types/PhotoListing";
import type { RenovationListingInterface } from "~/components/types/RenovationListingInterface";

export const normalizeRoomName = (room: string) => {
  const r = room.toLowerCase().replace(/\s+/g, "");

  if (r.includes("living")) return "living_room";
  if (r.includes("bath")) return "bathroom";
  if (r.includes("kitchen")) return "kitchen";
  if (r.includes("bed")) return "bedroom";
  if (r.includes("basement")) return "basement";

  return r;
};
export const getRenovatedRoom = (
  listing: RenovationListingInterface,
): string[] => {
  return Object.entries(listing)
    .filter(([key, value]) => key != "listing_id" && value === true)
    .map(([key]) => key);
};

export const filterPhotoByRenovation = (
  photos: PhotoListing[],
  renovatedRooms: string[],
) => {
  if (!renovatedRooms || renovatedRooms.length === 0) {
    return [];
  }

  const normalizedRooms = renovatedRooms.map(normalizeRoomName);

  return photos.filter((photo) => {
    if (!photo.room_type || typeof photo.room_type !== "string") {
      return false;
    }
    return normalizedRooms.includes(normalizeRoomName(photo.room_type));
  });
};

export const groupPhotosByRoom = (
  photos: PhotoListing[],
): Record<string, PhotoListing[]> => {
  const initialValue: Record<string, PhotoListing[]> = {};
  return photos.reduce(
    (acc: Record<string, PhotoListing[]>, photo: PhotoListing) => {
      if (!photo.room_type) {
        return acc;
      }
      if (!acc[photo.room_type]) {
        acc[photo.room_type] = [];
      }

      acc[photo.room_type].push(photo);

      return acc;
    },
    initialValue,
  );
};
