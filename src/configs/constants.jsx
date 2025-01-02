import { Instagram, GitHub } from "@mui/icons-material";

export const SOCIAL_MEDIA = [
  { id: 1, name: "Github", url: "https://github.com", icon: <GitHub /> },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagram.com",
    icon: <Instagram />,
  },
];

export const TM_CONFIG = {
  API_BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
  API_KEY: import.meta.env.VITE_TMDB_API_KEY,
};

export const MEDIA_TYPES = ["movie", "tv"];
