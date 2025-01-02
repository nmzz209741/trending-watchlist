import { Card, Box, Typography, Button } from "@mui/material";
import { TM_CONFIG } from "../../configs/constants";

const MediaCard = ({ item }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: "50vh",
        borderRadius: 2,
        overflow: "hidden",
        mt: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${TM_CONFIG.IMAGE_BASE_URL}/${item.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          color: "white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            {item.title || item.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.8 }}>
            {item.release_date || item.first_air_date}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.7, mt: 1 }}>
            {item.genres?.join(" • ") || "Drama • Fantasy • Romance"}
          </Typography>
        </Box>

        {/* Overview */}
        <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
          {item.overview}
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="contained" color="error">
            Watch Trailer
          </Button>
          <Button variant="outlined" color="success">
            Search Torrent
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
