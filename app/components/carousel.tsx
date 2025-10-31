import { useState } from "react";
import type { Photo } from "./dummy-data";

interface CarouselProps {
    images: Photo[];
    roomType: string;
    address: string;
}

export function Carousel(props) {
    const images = props.images;
    const roomType = props.roomType;
    const address = props.address;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    let stageLabel;
    if (currentImage.stage == "before") {
        stageLabel = "Before";
    } else {
        stageLabel = "After";
    }

    let displayRoomType;
    if (roomType == "living_room") {
        displayRoomType = "Living Room";
    } else {
        displayRoomType = roomType;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative">
                <img
                    src={currentImage.url}
                    alt={`${address} - ${displayRoomType} - ${currentImage.stage}`}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                    {stageLabel}
                </div>
            </div>
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        ›
                    </button>
                </>
            )}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => {
                    let buttonClass;
                    if (index == currentIndex) {
                        buttonClass = "bg-black";
                    } else {
                        buttonClass = "bg-gray-300";
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-8 h-1 rounded ${buttonClass}`}
                        />
                    );
                })}
            </div>
            <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{displayRoomType} Renovation</h3>
                <p className="text-gray-600">
                    Detailed description of the {displayRoomType} renovation work completed.
                    This includes all the improvements and updates made to enhance the space.
                </p>
            </div>
        </div>
    );
};
                






