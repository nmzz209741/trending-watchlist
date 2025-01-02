import axios from "axios";
import { TM_CONFIG } from "../configs/constants";

const { API_BASE_URL, API_KEY } = TM_CONFIG;

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    throw new Error("Failed to fetch trending movies.");
  }
};

export const fetchTrendingTVShows = async () => {
  try {
    const response = await api.get("/trending/tv/day");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending TV Shows:", error.message);
    throw new Error("Failed to fetch trending TV Shows.");
  }
};

export default api;
