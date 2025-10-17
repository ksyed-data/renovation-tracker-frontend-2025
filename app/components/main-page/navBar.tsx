import type { NavButtonType } from "../types/nav-button-interface";

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

