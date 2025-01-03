import { fetchGenres } from "../services/api";
import { useState, useEffect } from "react";

const useFetchGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMediaGenres = async () => {
      try {
        const response = await fetchGenres();
        setGenres(response);
      } catch (error) {
        console.error("Error fetching genres", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMediaGenres();
  }, []);

  return { genres, loading, error };
};

export default useFetchGenres;
