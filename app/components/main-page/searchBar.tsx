import { SearchField } from "./searchField"

export const SearchBar = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex w-full my-15 justify-center space-x-1">
                <img src="public/Logo.png" className="h-20 w-20 bg-cover border-0 fill-white"></img>
                <h1 className="py-5 text-center text-5xl font-bold text-white">Renovations Tracker</h1>              
            </div>
            <SearchField/>

        </div>
            
    )
}