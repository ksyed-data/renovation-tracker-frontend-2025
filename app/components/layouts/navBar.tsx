import type { NavButtonType } from "../types/nav-button-interface";

interface NavBarProp {
    navList : NavButtonType;
}

export const NavBar = ({navList}: NavBarProp) => {
    return (
        <li className="">
            <a href={navList.link}>
                {navList.label}
            </a>
        </li>    
    )
}

