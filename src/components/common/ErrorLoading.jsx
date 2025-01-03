import { Box, Button, Typography } from "@mui/material";

const ErrorLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      height="80vh"
    >
      <Typography variant="h6">Oops!!! Something went wrong</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => window.location.reload()}
      >
        Try again
      </Button>
    </Box>
  );
};

export default ErrorLoading;
