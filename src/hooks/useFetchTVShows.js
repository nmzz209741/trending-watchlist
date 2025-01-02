import { useState, useEffect } from "react";
import { fetchTrendingTVShows } from "../services/api";
const useFetchTVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await fetchTrendingTVShows();
        setTVShows(response);
      } catch (error) {
        console.error("Error fetching TV shows: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTVShows();
  }, []);

  return { tvShows, loading, error };
};

export default useFetchTVShows;
