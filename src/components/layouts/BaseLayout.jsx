import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { Box, CssBaseline } from "@mui/material";

const BaseLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "primary.main",
        color: "secondary.main"
      }}
    >
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flex: "1 0 auto", width: "100%", height: "100%" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
