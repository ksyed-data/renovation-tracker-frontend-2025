export const SearchField = () => {
    return (
            <div className="flex justify-center">
                <input type="text" placeholder="Homes.com URL..." className="bg-white w-130 rounded-l-lg p-1"/>
                <button className="bg-gray-500 text-white p-2 rounded-r-lg hover:bg-gray-400">Search</button>
            </div>  
    )
}