import { Link } from "react-router-dom";

type HouseProps = {
    photo: any;
    address: string;
    roomType: string;
    onClick: () => void
}

export const House = ({
    photo,
    address,
    roomType,
    onClick
}: HouseProps) => {
    const RoomDetail = "House";

    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2">
                <img
                    src={photo.url}
                    alt={address + " - " + RoomDetail}
                    className="w-full h-96 md:h-full object-cover hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    onClick={onClick}
                />
                </div>
                <div className="md:w-1/2 p-6 flex items-start">
                    <div>
                        <h4 className="font-semibold text-xl mb-3">
                            {RoomDetail} Renovation
                        </h4>
                        <p className="text-gray-600 mb-4">
                            {address}
                        </p>
                    </div>
                </div>
            </div>
    );
};
