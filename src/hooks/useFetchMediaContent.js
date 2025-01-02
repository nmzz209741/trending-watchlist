import { useState, useEffect } from "react";
import { fetchTrendingMedia } from "../services/api";

const useFetchMediaContent = (mediaType) => {
  const [mediaContent, setMediaContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMediaContent = async () => {
      try {
        const response = await fetchTrendingMedia(mediaType);
        setMediaContent(response);
      } catch (error) {
        console.error("Error fetching TV shows: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMediaContent();
  }, [mediaType]);

  return { mediaContent, loading, error };
};

export default useFetchMediaContent;
