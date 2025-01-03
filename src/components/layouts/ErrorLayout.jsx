import { Box, Typography, Button } from "@mui/material";
import notFound from "../../assets/images/404.png";

const ErrorLayout = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      height="100vh"
      backgroundColor="secondary.main"
    >
      <img src={notFound} alt="404" style={{ width: "50%",  }} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.replace("/")}
      >
        Take Me Home
      </Button>
    </Box>
  );
};

export default ErrorLayout;
