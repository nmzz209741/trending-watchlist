import { Card, Box, Typography, Button, Stack } from "@mui/material";
import { TM_CONFIG } from "../../configs/constants";
import { YouTube, Search } from "@mui/icons-material";
import { useContext } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { getYoutubeTrailerUrl, getYTSUrl } from "../../utils/urlUtils";
import { mapGenreIdsToNames } from "../../utils/genreUtils";
import useFetchMovieURL from "../../hooks/useFetchMovieURL";

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
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "50vh",
          sm: "50vh",
          md: "50vh",
          lg: "45vh",
        },
        borderRadius: 2,
        overflow: "hidden",
        mt: 4,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: { xs: 0, sm: 0, md: 0, lg: "50%" },
          width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
          height: "100%",
          backgroundImage: {
            lg: `url(${TM_CONFIG.IMAGE_BASE_URL}/${poster_path})`,
            md: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
            xs: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
            sm: `url(${TM_CONFIG.IMAGE_BASE_URL}/${backdrop_path})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: {
            xs: "linear-gradient(to top, #0d0d0c 40%, transparent 100%)",
            sm: "linear-gradient(to top, #0d0d0c 50%, transparent 100%)",
            md: "linear-gradient(to top, #0d0d0c 60%, transparent 100%)",
            lg: "linear-gradient(to right, #0d0d0c 60%, transparent 100%)",
          },
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          color: "white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 2, sm: 3, md: 3, lg: 3 },
        }}
      >
        <Box>
          <Button
            variant="text"
            color="secondary"
            disableRipple
            sx={{
              p: 0,
              "&:hover": { color: "#f50057", backgroundColor: "transparent" },
            }}
            onClick={linkToIMDB}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                },
                textTransform: "capitalize",
              }}
            >
              {title || name}
            </Typography>
          </Button>

          {/* Rating */}
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              mt: { xs: 0.5, sm: 1 },
            }}
          >
            <Typography variant="h5">{vote_average}</Typography>
            <Typography
              component="span"
              sx={{
                opacity: 0.5,
                ml: 1,
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                },
              }}
            >
              /10
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            {/* Release Date */}
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                mt: 1,
                mb: 1,
                borderColor: "secondary.main",
                border: 1,
                p: { xs: 0.5, sm: 1 },
                width: "fit-content",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 0.8,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    md: "1rem",
                  },
                }}
              >
                {release_date || first_air_date}
              </Typography>
            </Box>
            {/* Genres */}
            <Typography
              variant="subtitle2"
              sx={{
                opacity: 0.5,
                m: 1,
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.875rem",
                },
              }}
            >
              {mediaGenres?.join(" • ")}
            </Typography>
          </Box>
        </Box>

        {/* Overview */}
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            opacity: 0.9,
            width: { xs: "100%", sm: "90%", md: "85%", lg: "75%" },
            fontSize: {
              xs: "0.875rem",
              sm: "1rem",
            },
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textTransform: "none",
          }}
        >
          {overview}
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            mt: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              variant="contained"
              fullWidth={false}
              sx={{
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                  lg: "1rem",
                  md: "1rem",
                },
                py: { xs: 1, sm: 1.5 },
                backgroundColor: "#FF0000",
                "&:hover": {
                  backgroundColor: "#f50057",
                },
              }}
              onClick={linkToTrailer}
              startIcon={<YouTube />}
            >
              Watch Trailer
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              variant="outlined"
              color="success"
              fullWidth={false}
              sx={{
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                  lg: "1rem",
                  md: "1rem",
                },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={linkToYTS}
              startIcon={<Search />}
            >
              Search Torrent
            </Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
