import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response);
      } catch (error) {
        console.error("Error fetching trending movies:", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
