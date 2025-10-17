import type { HomeClickable } from "../types/homeClickable"

interface HomeMiniUIProp {
    miniUI: HomeClickable
}



export const HomeMiniUI = ({miniUI} : HomeMiniUIProp) => {
    return (
        <li>
            <div className="flex-col shadow-2xl h-full max-w-60 p-3 text-center">
                <a href="/home">
                <img src={miniUI.image}/>
                <h1>{miniUI.streetAdress}</h1>
                <p>Renovations: {miniUI.numRenovation}</p>
                <p>{miniUI.numBedRoom} Beds</p>    
                </a>
                
            </div>
        </li>
    )
}