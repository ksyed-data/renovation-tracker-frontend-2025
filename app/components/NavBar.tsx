import { Link } from "react-router";
import type { NavButtonType } from "./NavButtonInterface";

interface NavBarProp {
  navList: NavButtonType;
}

export const NavBar = ({ navList }: NavBarProp) => {
  return (
    <li className="hover:underline">
      <Link to={navList.link}>{navList.label}</Link>
    </li>
  );
};
