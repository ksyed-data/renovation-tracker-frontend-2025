import type { Route } from "./+types/carousel";
import { Carousel } from "~/components/Carousel";
import {
  mockProperties,
  getPhotosByPropertyAndRoomType,
} from "~/components/DummyData";
import { NavMenu } from "~/components/NavMenu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CarouselRoute({ params }: Route.ComponentProps) {
  const sampleProperty = mockProperties[0];
  const roomType = params.roomType;
  const images = getPhotosByPropertyAndRoomType(
    sampleProperty.id,
    roomType,
  ).sort((a, b) => {
    if (a.stage == "before") return -1;
    if (b.stage == "before") return 1;
    return 0;
  });

  return (
    <div className="text-black">
      <NavMenu />
      <div className="mt-8">
        <Carousel
          images={images}
          roomType={roomType}
          address={sampleProperty.address}
        />
      </div>
    </div>
  );
}
