import { Link } from "react-router-dom";


type RoomDetailProps = {
    photo: any;
    address: string;
    roomType: string;
    onClick: () => void
}
    export const RoomDetail = ({
        photo,
        address,
        onClick,
        roomType,
    }: RoomDetailProps) => {

   const formatRoom = roomType.split("_").map(room => room.charAt(0).toUpperCase() + room.slice(1)).join(" ");


    return (
        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden">
            <div className="md:w-1/2">
                <img
                    src={photo.url}
                    alt={address + " - " + formatRoom}
                    className="w-full h-64 md:h-full object-cover hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    onClick={onClick}
                />
            </div>

            <div className="md:w-1/2 p-6">
                <h4 className="font-semibold text-xl mb-3">
                    {formatRoom} Renovation
                </h4>
                <p className="text-gray-600 mb-4">
                    Detailed description of the {roomType} renovation work completed.
                    This includes all the improvements and updates made to enhance the space.
                </p>
            </div>
        </div>
    );
};
