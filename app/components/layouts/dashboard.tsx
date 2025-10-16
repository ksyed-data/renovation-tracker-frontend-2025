import { NavButtonData } from "../dummy-data/nav-button-data"
import { ExploreMore } from "./exploreMoreSection"
import { NavBar } from "./navBar"
import { ProjectSummary } from "./projectSummary"
import { SearchBar } from "./searchBar"


export const Dashboard = () => {
    return (
        <div className="flex-col h-full">
            <div className={"flex-col h-120 bg-[url('public/background.png')] bg-no-repeat bg-cover"}>
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
            <div>
                <ProjectSummary/>
            </div>
            <div>
                <ExploreMore/>
            </div>
        </div>
    )
}