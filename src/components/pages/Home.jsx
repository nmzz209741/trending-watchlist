import { Box, Grid2 } from "@mui/material";
import MediaList from "../views/MediaList"; // Ensure this path is correct
import useFetchMediaContent from "../../hooks/useFetchMediaContent";
import { MEDIA_TYPES } from "../../configs/constants";

const Home = () => {
  const {
    mediaContent: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchMediaContent(MEDIA_TYPES.MOVIES);
  const {
    mediaContent: tvShows,
    loading: tvShowsLoading,
    error: tvShowsError,
  } = useFetchMediaContent(MEDIA_TYPES.TV_SHOW);

  return (
    <Box component="main" sx={{ flex: 1, p: 2 }}>
      <Grid2 container>
        <MediaList
          title="movies"
          loading={moviesLoading}
          error={moviesError}
          content={movies}
        />
        <MediaList
          title="TV shows"
          loading={tvShowsLoading}
          error={tvShowsError}
          content={tvShows}
        />
      </Grid2>
    </Box>
  );
};

export default Home;
