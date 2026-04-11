import { Spinner } from "./Spinner";
type renovationProp = {
  renovation?: string[];
  loading: boolean;
};
export const RenovationDisplay = ({ renovation, loading }: renovationProp) => {
  if (loading) {
    return <Spinner />;
  }
  if (renovation == null) {
    return false;
  }
  return (
    <div className="pb-5">
      <h1 className="text-2xl font-medium text-black mb-2">Renovated Rooms</h1>
      <div className="grid grid-cols-3 gap-4">
        {renovation.map((rooms) => {
          if (rooms === "Bathroom") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/259/259973.png"
                  alt="Bathroom Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Bathroom
                </h1>
              </div>
            );
          }
          if (rooms === "Livingroom") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/13139/13139120.png"
                  alt="Livingroom Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Living Room
                </h1>
              </div>
            );
          }
          if (rooms === "Kitchen") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1888/1888928.png"
                  alt="Kitchen Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Kitchen
                </h1>
              </div>
            );
          }
          if (rooms === "Bedroom") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2642/2642268.png"
                  alt="Bedroom Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Bedroom
                </h1>
              </div>
            );
          }
          if (rooms === "Basement") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17635/17635826.png"
                  alt="Basement Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Bathroom
                </h1>
              </div>
            );
          }
          if (rooms === "Hallway") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8370/8370119.png"
                  alt="Hallway Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Hallway
                </h1>
              </div>
            );
          }
          if (rooms === "Dining") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11152/11152826.png"
                  alt="Dining Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Dining Room
                </h1>
              </div>
            );
          }
          if (rooms === "Laundry") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17635/17635666.png"
                  alt="Laundry Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Laundry Room
                </h1>
              </div>
            );
          }
          if (rooms === "Other") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10348/10348994.png"
                  alt="Other room Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Other
                </h1>
              </div>
            );
          }
          if (rooms === "HomeExterior") {
            return (
              <div
                key={rooms}
                className="flex w-full items-center justify-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9254/9254718.png"
                  alt="Exterior Images"
                  className="w-10 h-10"
                />
                <h1 className="flex text-gray-600 text-2xl h-10 items-center justify-center">
                  Home Exterior
                </h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
