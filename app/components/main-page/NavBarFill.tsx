import { NavButtonData } from "../mock/NavButtonData"
import { NavLink } from "./NavLink"



export const NavBarFill = () => {
    return (
        <ul className="flex space-x-5 p-3 font-bold">
            {NavButtonData.map((nav) => (
            <NavLink navList={nav}/>
            ))}
        </ul>       
    )
}