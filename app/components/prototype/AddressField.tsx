import type { ListingResponseInterface } from "../types/ListingResponseInterface"
import { Spinner } from "./Spinner";


type AddressFieldProp = {
    listing?: ListingResponseInterface;
    loading: boolean;
}

export const AddressField = ({listing, loading}: AddressFieldProp) => {
    if(loading) {
        return (
            <Spinner/>
        )
    }
    if(!listing) {
        return null;
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {listing.address}
            </h2>
            <p className="text-gray-700 mb-6">{listing.description}</p>
        </div>
    )
}