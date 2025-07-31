// src/utils/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://civicpulse1-1.onrender.com/api",  // ✅ updated for deployed backend
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

