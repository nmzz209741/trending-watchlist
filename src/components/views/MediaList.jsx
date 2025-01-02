import { Grid2, Typography } from "@mui/material";

const MediaList = ({ title = "Media" }) => {
  return (
    <Grid2 item size={{ lg: 6, md: 12, xs: 12 }}>
      <Typography variant="h4" align="center">Trending {title}</Typography>
    </Grid2>
  );
};

export default MediaList;
