import { Box, Grid2, Typography } from "@mui/material";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorLoading from "../common/ErrorLoading";
import MediaCard from "./MediaCard";
import { MEDIA_TYPES } from "../../configs/constants";

const MediaList = ({ type, loading = true, error = false, content = [] }) => {
  const title = type === MEDIA_TYPES.MOVIES ? "Movies" : "TV Shows";

  return (
    <Grid2 size={{ lg: 6, md: 12, xs: 12 }}>
      <Typography variant="h4" align="center">
        Trending {title}
      </Typography>
      {loading && <LoadingSpinner />}
      {error && <ErrorLoading />}
      {!loading && !error && (
        <Box
          sx={{
            m: 2,
            direction: "column",
          }}
        >
          {content.map((item) => (
            <MediaCard key={item.id} item={item} type={type} />
          ))}
        </Box>
      )}
    </Grid2>
  );
};

export default MediaList;
