import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "secondary.main",
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: 50, height: 50, objectFit: "contain" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              ml: 2,
              textTransform: "uppercase",
            }}
          >
            Trending Watchlist
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
