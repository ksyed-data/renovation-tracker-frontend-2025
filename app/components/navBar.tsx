import type { NavButtonType } from "./NavButtonInterface";

interface NavBarProp {
    navList : NavButtonType;
}

export const NavBar = ({navList}: NavBarProp) => {
    return (
        <li className="hover:underline">
            <a href={navList.link}>
                {navList.label}
            </a>
        </li>    
    )
}
