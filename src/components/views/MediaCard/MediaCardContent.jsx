import { Box, Button, Typography, Stack } from "@mui/material";
import { YouTube, Search } from "@mui/icons-material";

import MediaCardButton from "./MediaCardButton";
import { mediaCardContentStyles } from "./styles";

const MediaCardContent = ({
  title,
  name,
  vote_average,
  release_date,
  first_air_date,
  overview,
  genres,
  onIMDBClick,
  onTrailerClick,
  onTorrentClick,
}) => (
  <Box sx={mediaCardContentStyles.container}>
    <Box>
      <Button
        variant="text"
        color="secondary"
        disableRipple
        sx={mediaCardContentStyles.titleButton}
        onClick={onIMDBClick}
      >
        <Typography variant="h5" sx={mediaCardContentStyles.titleText}>
          {title || name}
        </Typography>
      </Button>

      <Box sx={mediaCardContentStyles.ratingContainer}>
        <Typography variant="h5">{vote_average}</Typography>
        <Typography component="span" sx={mediaCardContentStyles.ratingOpacity}>
          /10
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <Box sx={mediaCardContentStyles.dateContainer}>
          <Typography variant="subtitle1" sx={mediaCardContentStyles.dateText}>
            {release_date || first_air_date}
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={mediaCardContentStyles.genresText}>
          {genres?.join(" • ")}
        </Typography>
      </Box>
    </Box>

    <Typography variant="body1" sx={mediaCardContentStyles.overviewText}>
      {overview}
    </Typography>

    <Box sx={mediaCardContentStyles.buttonContainer}>
      <Stack direction="row" spacing={2}>
        <MediaCardButton
          text="Watch Trailer"
          startIcon={<YouTube />}
          variant="contained"
          color="primary"
          sx={{
            ...mediaCardContentStyles.button,
            ...mediaCardContentStyles.trailerButton,
          }}
          onClick={onTrailerClick}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <MediaCardButton
          text="Search Torrent"
          startIcon={<Search />}
          variant="outlined"
          color="success"
          sx={mediaCardContentStyles.button}
          onClick={onTorrentClick}
        />
      </Stack>
    </Box>
  </Box>
);

export default MediaCardContent;
