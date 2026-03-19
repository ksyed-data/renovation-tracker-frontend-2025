import { NavMenu } from "../NavMenu";
import { mockProperties, getPhotosByPropertyId } from "../DummyData";
import { Link, useSearchParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { GetListingByURL, PredictRenovationWithDescription, ReadAndClassifyPhoto } from "~/BFF/WebBFF";
import { AddressField } from "../prototype/AddressField";
import type { RenovationListingInterface } from "../types/RenovationListingInterface";
import type { ListingResponseInterface } from "../types/ListingResponseInterface";
import type { PhotoListing } from "../types/PhotoListing";
import { filterPhotoByRenovation, getRenovatedRoom, groupPhotosByRoom } from "~/UtilityFunctions/HelperFunction";
import { Gallery } from "../prototype/Gallery";
import { BannerGallery } from "../prototype/BannerGallery";
import { Spinner } from "../prototype/Spinner";


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
  const[listing, setListing] = useState<ListingResponseInterface>();
  const[renovation, setRenovation] = useState<RenovationListingInterface[]>();
  const [groupedPhotos, setGroupedPhotos] = useState<Record<string, PhotoListing[]>>({});
  const [loading, setLoading] = useState(false);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoListing[]>();
  
  //loading logic
  useEffect(() => {
    if (!url) return;
    if (previousUrl.current === url) return;

    previousUrl.current = url;
    const fetchData = async () => {
      //getting and setting listing detail
      setLoading(true);
      setGalleryLoading(true);
      const response = await GetListingByURL(url);
      setListing(response);
      setLoading(false);

      //getting and setting renovation detail
      const renovationData = await PredictRenovationWithDescription(response.description, response.listing_id)
      setRenovation(renovationData);

      //get and classify photo
      const photoData = await ReadAndClassifyPhoto(response.listing_id);
      setPhotos(photoData);

      //loading photo gallery
      await new Promise((res) => setTimeout(res, 50));
      const renovatedRooms = getRenovatedRoom(renovationData[0])
      const filteredPhotos = filterPhotoByRenovation(photoData, renovatedRooms)
      const grouped = groupPhotosByRoom(filteredPhotos);
      setGroupedPhotos(grouped);
      setGalleryLoading(false);


      //testing
      console.log(response);
      console.log(renovationData);
      console.log(grouped);

    };

    fetchData();
  }, [url]);



  return (
    <div className="text-black">
      <NavMenu />
      <BannerGallery photos={photos || []} loading={galleryLoading}/>
      <h1 className="text-3xl font-bold mt-7 text-center">Property Information</h1>

      <div className=" mx-auto p-6">
        <div className="rounded-lg p-6">
          <AddressField listing={listing} loading={loading}/>
          <Gallery groupedPhotos={groupedPhotos} loading={galleryLoading}/>
        </div>
      </div>
    </div>
  );
};
