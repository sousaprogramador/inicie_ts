import axios from "axios";

const api = axios.create({
    "baseURL": process.env.URL_CUSTOMER
});

api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Token ${process.env.TOKEN}`;

    return config;
});

export default api;
