import axios from "axios";

// const BASE_URL = "http://localhost:8000/";
// const BASE_URL = "https://ecommerce-backend-nido.onrender.com";
const BASE_URL = "https://ecommerce-backend-1-a84c.onrender.com";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2Y2Njc4MzE2YTZkZjU1NmFmODg3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTEyMDYxMCwiZXhwIjoxNjk1Mzc5ODEwfQ.iDNtuonzcuad9ZRm7RMnf3XhypoDx9VFel2Oiz5pm5k";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});