import React from "react";
import { NavBar } from "./navBar";
import { NavButtonData } from "../components/nav-button-data";

export const NavMenu = () => {
  return (
    <header className="border-b font-serif font-size-20 border-gray-200 bg-white ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <ul className="flex space-x-8 font-medium">
          {NavButtonData.map((navItem) => (
            <NavBar key={navItem.label} navList={navItem} />
          ))}
        </ul>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full border border-gray-300 bg-gray-100 px-4 py-1 pr-4 focus:ring-gray-400"
          />
        </div>
      </div>
    </header>
  );
};
