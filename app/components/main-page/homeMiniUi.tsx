import type { HomeClickable } from "../types/HomeClickable"

interface HomeMiniUIProp {
    miniUI: HomeClickable
}



export const HomeMiniUI = ({miniUI} : HomeMiniUIProp) => {
    return (
        <li>
            <div className="flex-col shadow-2xl h-full max-w-60 p-3 text-center">
                <a href="/home">
                    <img alt="Ronovated image." src={miniUI.image}/>
                    <h1>{miniUI.streetAdress}</h1>
                    <p>{miniUI.description}</p>
                    <p>{miniUI.bedroom} Beds</p>    
                </a>
            </div>
        </li>
    )
}