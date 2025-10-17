import { NavButtonData } from "../dummy-data/nav-button-data"
import { ExploreMore } from "../main-page/exploreMoreSection"
import { NavBar } from "../main-page/navBar"
import { ProjectSummary } from "../main-page/projectSummary"
import { SearchBar } from "../main-page/searchBar"


export const Dashboard = () => {
    return (
        <div className="flex-col h-full">
            <div className={"flex-col h-120 bg-[url('/background.png')] bg-no-repeat bg-cover"}>
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