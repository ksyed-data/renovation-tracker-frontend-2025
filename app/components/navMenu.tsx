import React from "react";
import { NavBar } from "./NavBar";
import { NavButtonData } from "./NavButtonData";

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
          
        </div>
      </div>
    </header>
  );
};
