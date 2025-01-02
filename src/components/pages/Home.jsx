import { Box, Grid2 } from "@mui/material";
import MediaList from "../views/MediaList"; // Ensure this path is correct

const Home = () => {
  return (
    <Box component="main" sx={{ flex: 1, p: 2 }}>
      <Grid2 container>
        <MediaList title="movies"/>
        <MediaList title="TV shows"/>
      </Grid2>
    </Box>
  );
};

export default Home;
