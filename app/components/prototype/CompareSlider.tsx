import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { PhotoListing } from "../types/PhotoListing";
import { Spinner } from "./Spinner";
import { useState } from "react";

type RoomGallerySectionProps = {
  groupedComparePhotos: Array<{
    room_type: string;
    before: PhotoListing[];
    after: PhotoListing[];
  }>;
  loading: boolean;
};
export const CompareSlider: React.FC<RoomGallerySectionProps> = ({
  groupedComparePhotos,
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
        <div className="w-full max-w-350 aspect-video">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={selectBefore} />}
            itemTwo={<ReactCompareSliderImage src={selectAfter} />}
          />
        </div>
      </div>
      <div className="w-full flex justify-center space-x-3">
        <div className="space-y-6 text-center">
          <div className="flex w-full items-center">
            <h2 className="text-2xl w-full font-medium text-black mb-2 text-center">
              Before Images
            </h2>
            <h2 className="text-2xl w-full font-medium text-black mb-2 text-center">
              After Images
            </h2>
          </div>
          <div className="overflow-y-auto w-300 h-300">
            {groupedComparePhotos.length === 0 ||
            groupedComparePhotos.every(
              (data) => data.before.length === 0 && data.after.length === 0,
            ) ? (
              <div>No images available</div>
            ) : (
              groupedComparePhotos.map((data) => (
                <div key={data.room_type} className="p-4">
                  <h2 className="text-2xl font-medium mb-4 text-gray-600 bg-gray-200">
                    {data.room_type}
                  </h2>
                  <div className="flex items-start gap-4">
                      <div className="grid grid-cols-3 gap-2">
                        {data.before.map((photo) => (
                          <img
                            key={photo.photo_id}
                            src={photo.url}
                            alt={`${data.room_type} photos`}
                            className={`h-40 w-80 ${selectBefore === photo.url ? "outline-4 outline-orange-400" : ""}`}
                            onClick={() => setSelectBefore(photo.url)}
                          />
                        ))}
                      </div>
                      <div className="flex h-100 w-20 text-gray-300 text-5xl justify-center items-center">
                        |
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {data.after.map((photo) => (
                          <img
                            key={photo.photo_id}
                            src={photo.url}
                            alt={`${data.room_type} photos`}
                            className={`h-40 w-80 ${selectAfter === photo.url ? "outline-4 outline-orange-400" : ""}`}
                            onClick={() => setSelectAfter(photo.url)}
                          />
                        ))}
                      </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
