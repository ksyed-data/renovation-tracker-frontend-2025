import axios from "axios"

//axio instance 
export const AxiosInstance = axios.create({
    //url, change base on your hosting port
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json"
    }
});