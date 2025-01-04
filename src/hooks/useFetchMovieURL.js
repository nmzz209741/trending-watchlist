import { fetchExternalIds } from "../services/api";
import { useState, useEffect } from "react";

const useFetchMovieURL = (id, mediaType) => {
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetchExternalIds(id, mediaType);
        const { imdb_id } = response;
        if (imdb_id) {
          setUrl(`https://www.imdb.com/title/${imdb_id}`);
        }
      } catch (error) {
        console.error("Error fetching genres", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, []);

  return { url, loading, error };
};

export default useFetchMovieURL;
