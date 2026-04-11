import { NavMenu } from "../NavMenu";
import { mockProperties, getPhotosByPropertyId } from "../DummyData";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import {
  GetListingByURL,
  PredictRenovationWithDescription,
  ReadAndClassifyPhoto,
} from "~/BFF/WebBFF";
import { AddressField } from "../prototype/AddressField";
import type { RenovationListingInterface } from "../types/RenovationListingInterface";
import type { ListingResponseInterface } from "../types/ListingResponseInterface";
import type { PhotoListing } from "../types/PhotoListing";
import {
  filterAfterPhoto,
  filterBeforePhoto,
  filterPhotoByRenovation,
  getRenovatedRoom,
  groupPhotosByRoom,
  normalizeRenovation,
  normalizeRoomName,
} from "~/UtilityFunctions/HelperFunction";
import { Gallery } from "../prototype/Gallery";
import { BannerGallery } from "../prototype/BannerGallery";
import { CompareSlider } from "../prototype/CompareSlider";
import { RenovationDisplay } from "../prototype/RenovationDisplay";

export const BeforeAfter = () => {
  const previousUrl = useRef<string | null>(null);
  const sampleProperty = mockProperties[0];
  const propertyPhotos = getPhotosByPropertyId(sampleProperty.id);
  const uniqueRoomTypes = Array.from(
    new Set(propertyPhotos.map((p) => p.room_type).filter(Boolean)),
  ).sort((a, b) => {
    if (a == "house") return -1;
    if (b == "house") return 1;
    return 0;
  });

  //getting url from dashboard
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  //some hooks use to store data
  const [listing, setListing] = useState<ListingResponseInterface>();
  const [renovation, setRenovation] = useState<RenovationListingInterface[]>();
  const [compareRenovation, setCompareRenovation] = useState<string[]>();
  const [groupedPhotos, setGroupedPhotos] = useState<
    Record<string, PhotoListing[]>
  >({});
  const [loading, setLoading] = useState(false);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoListing[]>();
  const [comparePhotos, setComparePhotos] = useState<
    Array<{ room_type: string; before: PhotoListing[]; after: PhotoListing[] }>
  >([]);
  const navigate = useNavigate();
  //loading logic
  useEffect(() => {
    if (!url) return;
    if (previousUrl.current === url) return;

    previousUrl.current = url;
    
    
    const fetchData = async () => {
      let response;
      try{
      //getting and setting listing detail
      setLoading(true);
      setGalleryLoading(true);
      response = await GetListingByURL(url);
      setListing(response);
      setLoading(false);
      }
      catch(error) {
        navigate("/PageNotFound");
      }
      //response undefined guard
      if (!response) return;

      //getting and setting renovation detail
      const renovationData = await PredictRenovationWithDescription(
        response.description,
        response.listing_id,
      );
      setRenovation(renovationData);

      //get and classify photo
      const photoData = await ReadAndClassifyPhoto(response.listing_id);
      setPhotos(photoData);

      //loading photo gallery
      await new Promise((res) => setTimeout(res, 50));
      const renovatedRooms = getRenovatedRoom(renovationData[0]);

      //before and after photos
      const beforePhoto = filterBeforePhoto(photoData);
      const afterPhoto = filterAfterPhoto(photoData);

      //compare photo filtering 
      const renovatedRoomNormalized = renovatedRooms.map(r => normalizeRenovation(r));
      const beforeSet = new Set(beforePhoto.map(r => r.room_type));
      const afterSet = new Set(beforePhoto.map(r => r.room_type));
      const renovatedSet = new Set(renovatedRoomNormalized);

      //setting compare renovation
      setCompareRenovation(renovatedRoomNormalized);

      //filtering the photos base on renovation that exsist in both before and after
      const filterRenovationPhoto = photoData.filter(photo => 
        photo.room_type &&
        renovatedSet.has(photo.room_type) &&
        beforeSet.has(photo.room_type) &&
        afterSet.has(photo.room_type)
      )


      //group the photos
      const groupedBeforePhoto = groupPhotosByRoom(filterBeforePhoto(filterRenovationPhoto));
      const groupedAfterPhoto = groupPhotosByRoom(filterAfterPhoto(filterRenovationPhoto));

      //grouped renovation photo
      const groupedComparePhoto = renovatedRoomNormalized.map(room => ({
        room_type: room,
        before: groupedBeforePhoto[room] || [],
        after: groupedAfterPhoto[room] || []
      }))

      //gallery photo
      const filteredPhotos = filterPhotoByRenovation(afterPhoto, renovatedRooms);
      const grouped = groupPhotosByRoom(filteredPhotos);

      //setting the photos
      setComparePhotos(groupedComparePhoto);

      setGroupedPhotos(grouped);
      setGalleryLoading(false);

    };

    fetchData();
  }, [url]);

  return (
    <div className="text-black">
      <NavMenu />
      <h1 className="text-3xl font-bold mt-7 text-center">
        Property Information
      </h1>
      <BannerGallery photos={photos || []} loading={galleryLoading} />

      <div className=" mx-auto p-6">
        <div className="rounded-lg p-6">
          <AddressField listing={listing} loading={loading} />
          <RenovationDisplay renovation={compareRenovation} loading={loading}/>
          <CompareSlider
            groupedComparePhotos={comparePhotos}
            loading={galleryLoading}
          />
          <Gallery groupedPhotos={groupedPhotos} loading={galleryLoading} />
        </div>
      </div>
    </div>
  );
};
