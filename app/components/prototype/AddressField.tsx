import type { ListingResponseInterface } from "../types/ListingResponseInterface";
import { Spinner } from "./Spinner";

type AddressFieldProp = {
  listing?: ListingResponseInterface;
  loading: boolean;
};

export const AddressField = ({ listing, loading }: AddressFieldProp) => {
  if (loading) {
    return <Spinner />;
  }
  if (!listing) {
    return null;
  }
  //formatting address
  const addressParts = listing.address.split(" ");
  const street = addressParts.slice(0, 3).join(" ");
  const cityState = addressParts.slice(3, addressParts.length - 1).join(" ");
  const zip = addressParts[addressParts.length - 1];
  return (
    <div>
      <div className="text-3xl text-black font-medium mb-4">
        ${listing.price.toLocaleString()}
      </div>
      <div className="text-2xl mb-6">
        <div className="text-black font-medium">{street}</div>
        <div className="text-gray-600 font-light">
          {cityState}
          {zip}
        </div>
      </div>
      <div className="flex p-5 text-2xl border-gray-200 border-t-2 border-b-2 mb-6 justify-center items-center space-x-*">
        <span className="flex justify-center w-full">
          <span className="mr-2">{listing.bedroom}</span>
          <span className="text-gray-600 font-light">Beds</span>
        </span>
        <div className="h-10 w-0.5 bg-gray-200 "></div>
        <span className="flex justify-center w-full">
          <span className="mr-2">{listing.bathroom}</span>
          <span className="text-gray-600 font-light">Baths</span>
        </span>
      </div>
      <h3 className="text-2xl font-medium text-black mb-2">About This Home</h3>
      <p className="text-lg font-normal text-gray-600 mb-6">
        {listing.description}
      </p>
    </div>
  );
};
