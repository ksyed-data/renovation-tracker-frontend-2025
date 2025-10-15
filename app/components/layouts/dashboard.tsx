import { NavButtonData } from "../dummy-data/nav-button-data"
import { NavBar } from "./navBar"

export const Dashboard = () => {
    return (
        <div className="bg-[url('\app\components\assets\background.png')]">
            <nav className="">
                <div>
                    <ul className="flex space-x-5 bg-gray-300 p-3">
                        {NavButtonData.map((nav) => (
                        <NavBar navList={nav}/>
                        ))}
                    </ul>
                </div>
                
            </nav>
            Dashboard Layout
        </div>
    )
}