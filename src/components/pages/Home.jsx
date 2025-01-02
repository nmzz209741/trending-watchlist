import { Box, Grid2 } from "@mui/material";
import MediaList from "../views/MediaList"; // Ensure this path is correct
import useFetchMovies from "../../hooks/useFetchMovies";
import useFetchTVShows from "../../hooks/useFetchTVShows";

const Home = () => {
  const {
    movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchMovies();
  const {
    tvShows,
    loading: tvShowsLoading,
    error: tvShowsError,
  } = useFetchTVShows();

  console.log( "tvShows", tvShows );

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
