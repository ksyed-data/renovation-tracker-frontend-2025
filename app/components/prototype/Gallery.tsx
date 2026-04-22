import React, { useEffect, useState } from "react";
import type { PhotoListing } from "~/components/types/PhotoListing";
import { Spinner } from "./Spinner";
import { ImageModal } from "./ImageModal";

type RoomGallerySectionProps = {
  groupedPhotos: Record<string, PhotoListing[]>;
  loading: boolean;
};

export const Gallery: React.FC<RoomGallerySectionProps> = ({
  groupedPhotos,
  loading,
}) => {
  //control modal open or close
  const[isOpen, setIsOpen] = useState(false);
  //setting current clicked image
  const[currentModalImage, setCurrentModalImage] = useState("");
  //setting current clicked roomType
  const[currentRoomType, setCurrentRoomType] = useState("");
  //setting current photo gallery
  const[currentPhotoGallery, setCurrentPhotoGallery] = useState<PhotoListing[]>([]);


  //passing image into modal

  //prevent scroll when modal is open
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen])

  if (loading) {
    return <Spinner />;
  }
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
                  className={`object-cover w-full h-48 rounded-lg shadow-md`}
                  loading="lazy"
                  onClick={() => {setIsOpen(true); setCurrentModalImage(photo.url); setCurrentRoomType(roomType); setCurrentPhotoGallery(roomPhotos)}}
                />
              </div>
            ))}
            <ImageModal isOpen={isOpen} onClose={() => setIsOpen(false)} imgURL={currentModalImage} roomType={currentRoomType} roomPhotos={currentPhotoGallery}/>
          </div>
        </div>
      ))}
    </div>
  );
};
