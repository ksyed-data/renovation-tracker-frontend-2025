import { useNavigate } from "react-router";
import type { ListingInterface } from "../types/ListingInterface";
import {parse} from "@universe/address-parser"
interface HomeMiniUIProp {
  miniUI: ListingInterface;
}

export const HomeMiniUI = ({ miniUI }: HomeMiniUIProp) => {
  const navigate = useNavigate();
   const addressParts = parse(miniUI.address);
   const streetAddressPartOne = [addressParts.number, addressParts.streetPreDir, addressParts.streetName, addressParts.streetType, addressParts.streetPostDir].filter(Boolean).join(" ");
   const streetAddressPartTwo = [addressParts.city, addressParts.state, addressParts.zip].filter(Boolean).join(" ");
  return (
    <li>
      <div className="flex-col shadow-2xl h-full max-w-60 p-3 text-center cursor-pointer" onClick={() => navigate(`/before-after?url=${encodeURIComponent(miniUI.url)}`)}>
          <img alt="Ronovated image." src={miniUI.image} />
          <h1 className="font-bold">{streetAddressPartOne}</h1>
          <h2>{streetAddressPartTwo}</h2>
          <p>{miniUI.bedroom} Beds</p>
          <p>{miniUI.bathroom} Baths</p>
      </div>
    </li>
  );
};
