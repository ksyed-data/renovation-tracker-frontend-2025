import { useState } from "react";
import type { Photo } from "./DummyData";

interface CarouselProps {
    images: Photo[];
    roomType: string;
    address: string;
}

export const Carousel = ({images, roomType, address}: CarouselProps)=> {
    const [currentIndex, setCurrentIndex] = useState(0);
    


    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    let stageLabel = currentImage.stage === "before" ? "Before" : "After";
    

    const carouselRoom = roomType.split("_").map(room => room.charAt(0).toUpperCase() + room.slice(1)).join(" ");

    /*
    let displayRoomType = roomType === "living_room" ? "Living Room" : roomType;
    */

    return (
        <div className="relative margin-auto item-center absolute w-full max-w-2xl mx-auto">
            <div className="relative">
                <img
                    src={currentImage.url}
                    alt={`${address} - ${carouselRoom} - ${currentImage.stage}`}
                    className="w-full bg-grey h-full center object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white max-w-sm mx-auto px-3 py-1 rounded">
                    {stageLabel}
                </div>
            
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 mx-auto -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 mx-auto -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        ›
                    </button>
                </>
            )}
        </div>

            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => {
                    
                    
                    let buttonClass = index === currentIndex ? "bg-gray-300" : "bg-black";
                    return (
                        <button type="button"
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-8 h-1 rounded ${buttonClass}`}
                        />
                    );
                })}
            </div>
            <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{carouselRoom} Renovation</h3>
                <p className="text-gray-600">
                    Detailed description of the {roomType} renovation work completed.
                    This includes all the improvements and updates made to enhance the space.
                </p>
            </div>
        </div>
    );

    
};
                






