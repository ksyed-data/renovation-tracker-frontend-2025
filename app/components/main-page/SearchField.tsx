import { useState } from "react";
import { GetFullListingDetail, ReadListing } from "~/BFF/WebBFF";
import type { PropertyInterface } from "../types/PropertyInterface";
import { useNavigate } from "react-router";
import { IsValidURL } from "~/BFF/WebBFFHelper";

export const SearchField = () => {
  const [listingURL, setListingURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState<PropertyInterface | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //function to call the axios
  const handleSearch = () => {
    if (!listingURL.trim()) {
      alert("Empty URL");
      return;
    }
    if(!IsValidURL(listingURL)) {
      alert("Invalid URL.")
      return;
    }

    navigate(`/before-after?url=${encodeURIComponent(listingURL)}`)      


  };

  return (
    <div className="flex justify-center opacity-85">
      <input
        type="text"
        placeholder="Homes.com URL..."
        className="bg-white w-130 rounded-l-lg p-2"
        value={listingURL}
        onChange={(e) => setListingURL(e.target.value)}
      />
      <button
        className="bg-gray-500 text-white p-2 rounded-r-lg hover:bg-gray-400 "
        onClick={handleSearch}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {property && (
        <div>
          <h2>{property.url}</h2>
        </div>
      )}
    </div>
  );
};
