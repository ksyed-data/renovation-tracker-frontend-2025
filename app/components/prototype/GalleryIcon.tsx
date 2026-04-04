import React from "react";
import type { PhotoListing } from "~/components/types/PhotoListing";
import { Spinner } from "./Spinner";

type RoomGallerySectionProps = {
  groupedPhotos: Record<string, PhotoListing[]>;
};

export const GalleryIcon: React.FC<RoomGallerySectionProps> = ({
  groupedPhotos,
}) => {
  const hasPhotos = groupedPhotos && Object.keys(groupedPhotos).length > 0;
  if (!hasPhotos) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium text-black mb-2">
        Completed Renovations
      </h2>
      {Object.entries(groupedPhotos).map(([roomType, roomPhotos]) => (
        <div key={roomType}>
          <h2 className="text-2xl font-medium mb-4 text-gray-600">
            {roomType}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {roomPhotos.map((photo) => (
              <div key={photo.photo_id}>
                <img
                  src={photo.url}
                  alt={`${roomType} - ${photo.photo_id}`}
                  className="object-cover w-full h-48 rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
