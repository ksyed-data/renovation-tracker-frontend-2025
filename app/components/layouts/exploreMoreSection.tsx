import Home from "~/routes/home"
import { HomeMiniUI } from "./homeMiniUi"

export const ExploreMore = () => {
    return (
        <div className="flex-col justify-center py-10">
            <div className="w-full">
               <h1 className="text-gray-800 text-4xl p-3 font-bold text-center">Explore more renovations...</h1> 
               <p className="text-gray-500 text-2xl text-center">Check out some renovations while you are here.</p>
            </div>    
            <div className="p-10">
                <HomeMiniUI/>
            </div>
        </div>
    )
}