import axios from "axios";

export const _http = axios.create({
    baseURL: "https://costmedia-back-nodejs.onrender.com/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})