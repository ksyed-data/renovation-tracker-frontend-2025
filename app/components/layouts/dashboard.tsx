import { NavButtonData } from "../mock/NavButtonData"
import { ExploreMore } from "../main-page/ExploreMore"
import { NavBarFill } from "../main-page/NavBarFill"
import { ProjectSummary } from "../main-page/ProjectSummary"
import { SearchBar } from "../main-page/SearchBar"


export const Dashboard = () => {
    return (
        <div className="flex-col h-full">
            <div className={"flex-col h-120 bg-[url('/background.png')] bg-no-repeat bg-cover"}>
                <nav>
                        <div className="text-white">
                            <NavBarFill />
                        </div>                     
                </nav>
                <SearchBar/>
            </div>
                <ProjectSummary/>
                    <div className="w-full py-10">
                        <h1 className="text-gray-800 text-4xl p-3 font-bold text-center">Explore more renovations...</h1> 
                        <p className="text-gray-500 text-2xl text-center">Check out some renovations.</p>
                    </div>    
                <ExploreMore/>
        </div>
    )
}