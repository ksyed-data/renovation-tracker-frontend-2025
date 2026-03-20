import React, { useRef } from "react";
import type { PhotoListing } from "~/components/types/PhotoListing";
import { Spinner } from "./Spinner";

type BannerGalleryProps = {
  photos: PhotoListing[];
  loading: boolean;
};

export const BannerGallery: React.FC<BannerGalleryProps> = ({
  photos,
  loading,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading) {
    return <Spinner />;
  }
  const hasPhotos = photos && Object.keys(photos).length > 0;
  if (!hasPhotos) return null;

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
      >
        &#8594;
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide"
      >
        {photos.map((photo) => (
          <div
            key={photo.photo_id}
            className="flex-shrink-0 w-100 h-100 snap-start"
          >
            <img
              src={photo.url}
              alt={`Photo ${photo.photo_id}`}
              className="object-cover w-full h-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
