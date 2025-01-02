import { Box, Grid2, Typography } from "@mui/material";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorLoading from "../common/ErrorLoading";
import MediaCard from "./MediaCard";

const MediaList = ({
  title = "Media",
  loading = true,
  error = false,
  content = [],
}) => {
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
            <MediaCard key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Grid2>
  );
};

export default MediaList;
