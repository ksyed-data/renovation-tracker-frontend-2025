import Home from "~/routes/home"
import { HomeMiniUI } from "./homeMiniUi"
import { HomeData } from "../dummy-data/home-data"

export const ExploreMore = () => {
    return (
        <div className="flex-col justify-center py-10">
            <div className="w-full py-10">
               <h1 className="text-gray-800 text-4xl p-3 font-bold text-center">Explore more renovations...</h1> 
               <p className="text-gray-500 text-2xl text-center">Check out some renovations.</p>
            </div>    
            <div className="w-full p-3">
                <ul className="flex p-3 space-x-1 justify-center">
                    {HomeData.map((data) => (<HomeMiniUI miniUI={data}/>))}
                </ul>
            </div>
        </div>
    )
}