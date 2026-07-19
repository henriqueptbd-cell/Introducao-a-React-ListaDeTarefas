import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_BACKEND ?? "http://localhost:3333";

export const api = axios.create({
  baseURL: apiUrl,
});