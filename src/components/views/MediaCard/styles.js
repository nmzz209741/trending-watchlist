export const mediaCardStyles = {
  card: {
    position: "relative",
    width: "100%",
    height: "50vh",
    borderRadius: 2,
    overflow: "hidden",
    mt: 4,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: { xs: 0, sm: 0, md: 0, lg: "50%" },
    width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: {
      xs: "linear-gradient(to top, #0d0d0c 40%, transparent 100%)",
      sm: "linear-gradient(to top, #0d0d0c 50%, transparent 100%)",
      md: "linear-gradient(to top, #0d0d0c 60%, transparent 100%)",
      lg: "linear-gradient(to right, #0d0d0c 50%, transparent 100%)",
    },
    zIndex: 2,
  },
};

export const mediaCardContentStyles = {
  container: {
    position: "relative",
    zIndex: 3,
    color: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2,
  },
  titleButton: {
    p: 0,
    m: 0,
    "&:hover": { color: "#f50057", backgroundColor: "transparent" },
  },
  titleText: {
    fontSize: {
      xs: "1.5rem",
      sm: "1.5rem",
      md: "1.5rem",
      lg: "1.5rem",
    },
    textTransform: "capitalize"
  },
  ratingContainer: {
    display: "flex",
    alignItems: "end",
    mb: 2,
  },
  ratingOpacity: {
    opacity: 0.5,
    ml: 1,
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
    },
  },
  dateContainer: {
    display: "flex",
    alignItems: "baseline",
    mt: 1,
    mb: 1,
    borderColor: "secondary.main",
    border: 0.5,
    p: { xs: 0.5, sm: 1 },
    width: "fit-content",
  },
  dateText: {
    opacity: 0.8,
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
    },
  },
  genresText: {
    opacity: 0.5,
    m: 1,
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
    },
  },
  overviewText: {
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
  },
  buttonContainer: {
    display: "flex",
    gap: { xs: 1, sm: 2 },
    mt: 2,
    flexDirection: { xs: "column", sm: "row" },
  },
  button: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
    },
    py: 0.5,
    px: 2,
  },
  trailerButton: {
    backgroundColor: "#FF0000",
    "&:hover": { backgroundColor: "#f50057" },
  },
};
