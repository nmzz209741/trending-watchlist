import { Card, Box } from "@mui/material";
import { TM_CONFIG } from "../../../configs/constants";
import { useContext } from "react";
import { GenreContext } from "../../../contexts/GenreContext";
import { getYoutubeTrailerUrl, getYTSUrl } from "../../../utils/urlUtils";
import { mapGenreIdsToNames } from "../../../utils/genreUtils";
import useFetchMovieURL from "../../../hooks/useFetchMovieURL";
import MediaCardContent from "./MediaCardContent";
import { mediaCardStyles } from "./styles";

const MediaCard = ({ item, type }) => {
  const {
    id,
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    genre_ids,
    overview,
    poster_path,
    backdrop_path,
  } = item;

  const genres = useContext(GenreContext);
  const mediaGenres = mapGenreIdsToNames(genre_ids, genres);
  const { url: imdbURL } = useFetchMovieURL(id, type);

  const linkToTrailer = () => {
    const url = getYoutubeTrailerUrl(name || title);
    window.open(url, "_blank");
  };

  const linkToYTS = () => {
    const url = getYTSUrl(name || title);
    window.open(url, "_blank");
  };

  const linkToIMDB = () => {
    window.open(imdbURL, "_blank");
  };

  return (
    <Card sx={mediaCardStyles.card}>
      <Box
        sx={{
          ...mediaCardStyles.imageContainer,
          backgroundImage: {
            lg: `url(${TM_CONFIG.IMAGE_BASE_URL}/${poster_path})`,
            md: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
            xs: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
            sm: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
          },
        }}
      />
      <Box sx={mediaCardStyles.gradientOverlay} />
      <MediaCardContent
        title={title}
        name={name}
        vote_average={vote_average}
        release_date={release_date}
        first_air_date={first_air_date}
        overview={overview}
        genres={mediaGenres}
        onIMDBClick={linkToIMDB}
        onTrailerClick={linkToTrailer}
        onTorrentClick={linkToYTS}
      />
    </Card>
  );
};

export default MediaCard;
