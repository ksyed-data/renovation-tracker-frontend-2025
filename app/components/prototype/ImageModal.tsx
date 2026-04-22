import Modal from "react-modal";
import type { PhotoListing } from "../types/PhotoListing";
import { useEffect, useState } from "react";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  imgURL: string;
  roomType: string;
  roomPhotos: PhotoListing[];
};

export const ImageModal = ({
  isOpen,
  onClose,
  imgURL,
  roomType,
  roomPhotos,
}: modalProps) => {
    //storing highlight photo
    const[currentPhoto, setCurrentPhoto] = useState("");

    useEffect(()=> {
        setCurrentPhoto(imgURL);
    },[imgURL])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-screen h-screen flex items-center justify-center bg-black"
      overlayClassName="fixed inset-0 bg-black"
    >
      <div className="bg-black w-full">
        <div className="pb-3">
          <h1 className="absolute text-white text-3xl p-4 m-4 top-0 left-0">
            {roomType}
          </h1>
          <button
            className="absolute text-white text-3xl font-bold p-4 m-4 top-0 right-0 hover:cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
          <div className="absolute top-25 h-0.5 w-full bg-white"></div>
        </div>
        <div className="flex justify-center items-center w-full">
          <img className="w-400" src={currentPhoto} />
        </div>
        <div className="absolute flex bottom-5 w-full h-30 justify-center items-center bg-black">
          <div className="flex gap-2 p-2 overflow-x-scroll bg-black">
            {roomPhotos.map((photo) => (
              <div key={photo.url}>
                <img
                  src={photo.url}
                  alt={`${roomType} - ${photo.photo_id}`}
                  className={`object-cover w-full h-24 rounded-lg shadow-md hover:cursor-pointer ${photo.url === currentPhoto ? "outline-3 outline-white" : ""}`}
                  loading="lazy"
                  onClick={() => setCurrentPhoto(photo.url)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
