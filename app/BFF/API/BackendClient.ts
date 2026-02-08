import axios from "axios"

//axio instance 
export const BackendClient = axios.create({
    //url, change base on your hosting port
    baseURL: "https://localhost:3000",
    headers: {
        "Content-Type": "application/JSON"
    }
});