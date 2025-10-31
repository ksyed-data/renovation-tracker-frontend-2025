import { Link } from "react-router-dom";

export const House = ({
    photo,
    address,
    onClick
}: {
    photo: any;
    address: string;
    onClick: () => void
}) => {
    const roomType = "House";

    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                <img
                    src={photo.url}
                    alt={address + " - " + roomType}
                    className="w-full h-96 md:h-full object-cover hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    onClick={onClick}
                />
                </div>
                <div className="md:w-1/2 p-6 flex items-center">
                    <div>
                        <h4 className="font-semibold text-xl mb-3">
                            {roomType} Renovation
                        </h4>
                        <p className="text-gray-600 mb-4">
                            {address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
