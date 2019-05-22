import axios from "axios";

export const api = axios.create({
    baseURL: process.env.MIX_APP_URL
});

export default api;
