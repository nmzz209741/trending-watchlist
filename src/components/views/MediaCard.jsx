import { Card, Box, Typography, Button } from "@mui/material";
import { TM_CONFIG } from "../../configs/constants";
import { YouTube } from "@mui/icons-material";

const MediaCard = ({ item }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: { lg: "45vh", md: "60vh" },
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
          left: "60%",
          width: "50%",
          height: "100%",
          backgroundImage: `url(${TM_CONFIG.IMAGE_BASE_URL}/${item.poster_path})`,
          backgroundSize: "contain",
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
          background:
            "linear-gradient(to right, #0d0d0c 60%, transparent 100%)",
          zIndex: 2,
          p: 0,
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
          <Typography variant="h5" fontWeight="bold">
            {item.title || item.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "end", mt: 1 }}>
            <Typography variant="h5">{item.vote_average}</Typography>
            <span style={{ opacity: 0.5, ml: 1 }}>/10</span>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              mt: 1,
              mb: 1,
              borderColor: "secondary.main",
              border: 1,
              p: 1,
              width: "fit-content",
            }}
          >
            <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.8 }}>
              {item.release_date || item.first_air_date}
            </Typography>
          </Box>

          <Typography variant="subtitle2" sx={{ opacity: 0.7, mt: 1 }}>
            {item.genres?.join(" • ")}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mt: 2, opacity: 0.9, width: "75%" }}>
          {item.overview}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="contained" color="error">
            <YouTube sx={{ mr: 1 }} />
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
