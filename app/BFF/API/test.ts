import axios from "axios";

export async function testGet() {
    const response = await axios.get("http://127.0.0.1:8000/listings/?limit=2");
    console.log("Here is the response ", response.data)
}


