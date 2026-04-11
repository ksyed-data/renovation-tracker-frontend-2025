import { SearchField } from "./SearchField";

export const SearchBar = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex w-full my-15 justify-center space-x-1">
        <h1 className="py-5 text-center text-5xl text-shadow-lg font-bold text-white">
          Renovations Tracker
        </h1>
      </div>
      <SearchField />
    </div>
  );
};
