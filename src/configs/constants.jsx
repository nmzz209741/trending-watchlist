import { Instagram, GitHub } from "@mui/icons-material";

export const SOCIAL_MEDIA = [
  { id: 1, name: "GitHub", url: import.meta.env.VITE_GH_URL, icon: <GitHub /> },
  {
    id: 2,
    name: "Instagram",
    url: import.meta.env.VITE_INSTA_URL,
    icon: <Instagram />,
  },
];

export const TM_CONFIG = {
  API_BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w780",
  API_KEY: import.meta.env.VITE_TMDB_API_KEY,
};

export const MEDIA_TYPES = {
  MOVIES: "movie",
  TV_SHOW: "tv",
};
