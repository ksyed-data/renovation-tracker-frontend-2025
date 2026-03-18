import { NavMenu } from "../NavMenu";
import { mockProperties, getPhotosByPropertyId } from "../DummyData";
import { Kitchen } from "../Kitchen";
import { Bathroom } from "../Bathroom";
import { LivingRoom } from "../LivingRoom";
import { Bedroom } from "../Bedroom";
import { Basement } from "../Basement";
import { House } from "../House";
import { Link, useSearchParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { GetListingByURL, PredictRenovationWithDescription, ReadAndClassifyPhoto } from "~/BFF/WebBFF";
import { AddressField } from "../prototype/AddressField";
import type { RenovationListingInterface } from "../types/RenovationListingInterface";
import type { ListingResponseInterface } from "../types/ListingResponseInterface";
import type { PhotoListing } from "../types/PhotoListing";


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
  const[renovation, setRenovation] = useState<RenovationListingInterface>();
  const[photos, setPhotos] = useState<PhotoListing[]>();
  const [loading, setLoading] = useState(false);
  //loading logic
  useEffect(() => {
    if (!url) return;
    if (previousUrl.current === url) return;

    previousUrl.current = url;
    const fetchData = async () => {
      //getting and setting listing detail
      setLoading(true);
      const response = await GetListingByURL(url);
      setListing(response);
      setLoading(false);

      //getting and setting renovation detail
      const renovationData = await PredictRenovationWithDescription(response.description, response.listing_id)
      setRenovation(renovationData);

      //get and classify photo
      const photoData = await ReadAndClassifyPhoto(response.listing_id);
      setPhotos(photoData);


      //testing
      console.log(response);
      console.log(renovationData);
      console.log(photoData);
    };

    fetchData();
  }, [url]);

  const housePhoto = propertyPhotos.find(
    (p) => p.room_type && p.room_type.toLowerCase() == "house",
  );

  const renderRoom = (photo: any) => {
    const type = photo.room_type || "";
    const linkTo = `/before-after/${photo.room_type}`;
    if (type.toLowerCase() == "house") {
      return (
        <Link to={linkTo}>
          <House
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    if (type.toLowerCase() == "kitchen") {
      return (
        <Link to={linkTo}>
          <Kitchen
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    if (type.toLowerCase() == "bathroom") {
      return (
        <Link to={linkTo}>
          <Bathroom
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    if (type.toLowerCase() == "living_room") {
      return (
        <Link to={linkTo}>
          <LivingRoom
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    if (type.toLowerCase() == "bedroom") {
      return (
        <Link to={linkTo}>
          <Bedroom
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    if (type.toLowerCase() == "basement") {
      return (
        <Link to={linkTo}>
          <Basement
            photo={photo}
            address={sampleProperty.address}
            onClick={() => {}}
          />
        </Link>
      );
    }
    return null;
  };


  return (
    <div className="text-black">
      <NavMenu />
      <h1 className="text-3xl font-bold mt-7 text-center mb-6">Renovations</h1>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <AddressField listing={listing} loading={loading}/>
          <div className="space-y-6">
            {uniqueRoomTypes.map((roomType) => {
              const photo = propertyPhotos.find((p) => p.room_type == roomType);
              if (photo) {
                return <div key={roomType}>{renderRoom(photo)}</div>;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
