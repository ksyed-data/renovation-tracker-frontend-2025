import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { PhotoListing } from "../types/PhotoListing";
import { Spinner } from "./Spinner";
import { useState } from "react";
import { GalleryIcon } from "./GalleryIcon";

type RoomGallerySectionProps = {
  groupedBeforePhotos: Record<string, PhotoListing[]>;
  groupedAfterPhotos: Record<string, PhotoListing[]>;
  loading: boolean;
};
export const CompareSlider: React.FC<RoomGallerySectionProps> = ({
  groupedBeforePhotos,
  groupedAfterPhotos,
  loading,
}) => {
  const [selectBefore, setSelectBefore] = useState<string>(
    "https://cdn.vectorstock.com/i/1000v/27/88/select-image-vector-10832788.jpg",
  );
  const [selectAfter, setSelectAfter] = useState<string>(
    "https://cdn.vectorstock.com/i/1000v/27/88/select-image-vector-10832788.jpg",
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="pb-10">
      <h1 className="text-2xl font-medium text-black mb-2">Compare Tool</h1>
      <p className="text-lg font-normal text-gray-600 mb-6">
        Click an image from the before section and an image from the after
        section. Then start comparing!
      </p>
      <div className="flex justify-center items-center w-full pb-4">
        <div className="w-full max-w-400 aspect-video">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={selectBefore} />}
            itemTwo={<ReactCompareSliderImage src={selectAfter} />}
          />
        </div>
      </div>
      <div className="w-full flex justify-center space-x-3">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-medium text-black mb-2" text-center>
            Before Images
          </h2>
          <div className="overflow-y-auto w-250 h-300">
            {Object.keys(groupedBeforePhotos).length === 0 ||
            Object.values(groupedBeforePhotos).every(
              (photos) => photos.length === 0,
            ) ? (
              <div>No imges available</div>
            ) : (
              Object.entries(groupedBeforePhotos).map(
                ([roomType, roomPhotos]) => (
                  <div key={roomType} className="p-4">
                    <h2 className="text-2xl font-medium mb-4 text-gray-600 bg-gray-200">
                      {roomType}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-2">
                      {roomPhotos.map((photo) => (
                        <div key={photo.photo_id}>
                          <img
                            src={photo.url}
                            alt={`${roomType} - ${photo.photo_id}`}
                            className={`object-cover w-full h-40 rounded-lg shadow-md cursor-pointer ${selectBefore === photo.url ? "outline-4 outline-orange-400" : ""}`}
                            loading="lazy"
                            onClick={() => setSelectBefore(photo.url)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )
            )}
          </div>
        </div>
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-medium text-black mb-2">After Images</h2>
          <div className=" overflow-y-auto w-250 h-300">
            {Object.keys(groupedAfterPhotos).length === 0 ||
            Object.values(groupedAfterPhotos).every(
              (photos) => photos.length === 0,
            ) ? (
              <div>No images available</div>
            ) : (
              Object.entries(groupedAfterPhotos).map(
                ([roomType, roomPhotos]) => (
                  <div key={roomType} className="p-4">
                    <h2 className="text-2xl font-medium mb-4 text-gray-600 bg-gray-200">
                      {roomType}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-2">
                      {roomPhotos.map((photo) => (
                        <div key={photo.photo_id}>
                          <img
                            src={photo.url}
                            alt={`${roomType} - ${photo.photo_id}`}
                            className={`object-cover w-full h-40 rounded-lg shadow-md cursor-pointer ${selectAfter === photo.url ? "outline-4 outline-orange-400" : ""}`}
                            loading="lazy"
                            onClick={() => setSelectAfter(photo.url)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
