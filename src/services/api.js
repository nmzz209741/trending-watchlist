import axios from "axios";
import { TM_CONFIG } from "../configs/constants";

const { API_BASE_URL, API_KEY } = TM_CONFIG;

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMedia = async (mediaType) => {
  try {
    const response = await api.get(`/trending/${mediaType}/day`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching trending ${mediaType}s`, error.message);
    throw new Error(`Failed to fetch trending ${mediaType}s`);
  }
};

export const fetchGenres = async () => {
  try {
    const genres = [];
    const response = await api.get("/genre/movie/list");
    genres.push(...response.data.genres);
    const tvGenres = await api.get("/genre/tv/list");
    genres.push(...tvGenres.data.genres);
    return genres;
  } catch (error) {
    console.error("Error fetching genres", error.message);
    throw new Error("Failed to fetch genres");
  }
}

export default api;
