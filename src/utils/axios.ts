import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT_URL,
  headers: {
    'Content-Type': 'application/json',
    "X-MICROCMS-API-KEY": import.meta.env.VITE_API_KEY
  },
  timeout: 2000,
})