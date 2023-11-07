import axios from "axios";
import { getSession } from "./session.service";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3000";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.token) {
    config.headers["Authorization"] = `Bearer ${session.token}`;
  }

  return config;
});

export default api;
