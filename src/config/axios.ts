import axios from "axios";

const clientAxios = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
    }
});

export default clientAxios;
