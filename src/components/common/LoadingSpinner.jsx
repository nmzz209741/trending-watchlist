import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        height: '80vh'
      }}
    >
      <CircularProgress color='secondary.main' size="5rem" />
    </Box>
  );
};

export default LoadingSpinner;
