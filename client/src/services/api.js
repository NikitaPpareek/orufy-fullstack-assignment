import axios from "axios";

const API = axios.create({
  baseURL: "https://orufy-backend-lt72.onrender.com/api",
});

export default API;