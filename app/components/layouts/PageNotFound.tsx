import { useNavigate } from "react-router"
import { NavBar } from "../NavBar"
import { NavMenu } from "../NavMenu"

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavMenu/>
            <div className="pt-50 grid item-center justify-center align-middle">
                <h1 className="w-200 pb-2 text-center font-bold text-5xl">We are sorry, but the property you are looking could not be found.</h1>
                <p className="text-4xl text-center pb-5">Please double check the url or try again.</p>
                <button onClick={() => navigate("/")}className="mx-50 w-100 h-20 bg-amber-600 font-bold text-5xl text-white rounded-2xl cursor-pointer">Back to Home</button>
            </div>
        </div>
    )
}