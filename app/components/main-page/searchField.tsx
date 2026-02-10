import { useState } from "react";
import { getListing } from "~/BFF/PropertyBFF";
import type { PropertyInterface } from "../types/PropertyInterface";



export const SearchField = () => {
  const[listingURL, setListingURL] = useState("");
  const[loading, setLoading] = useState(false);
  const[property, setProperty] = useState<PropertyInterface | null>(null);
  const [error, setError] = useState("");

  //function to call the axios
  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");
      
      const result = await getListing(parseInt(listingURL));
      setProperty(result);
      console.log(result);

    }
    catch {
      setError("Failed to load property");
    }
    finally {
      setLoading(false);
    }
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
      <button className="bg-gray-500 text-white p-2 rounded-r-lg hover:bg-gray-400 " onClick={handleSearch}>
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
