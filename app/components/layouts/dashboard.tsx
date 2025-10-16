import { NavButtonData } from "../dummy-data/nav-button-data"
import { NavBar } from "./navBar"
import { SearchBar } from "./searchBar"


export const Dashboard = () => {
    return (
        <div className="flex flex-col h-120 align-center bg-[url('public/background.png')] bg-no-repeat bg-cover">
            <div className={"flex flex-col h-full"}>
                <nav>
                        <div>
                            <ul className="flex space-x-5 p-3 text-white font-bold">
                                {NavButtonData.map((nav) => (
                                <NavBar navList={nav}/>
                                ))}
                            </ul>
                        </div>                     
                </nav>
                <SearchBar/>
            </div>
        </div>
    )
}