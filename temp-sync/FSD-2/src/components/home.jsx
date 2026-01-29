import React from 'react';
import { Box, Typography } from '@mui/material';
import RatingUI from './ui/RatingUI';
import ButtonUI from './ui/ButtonUI';

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',      // Horizontal Center
      justifyContent: 'center',    // Vertical Center
      minHeight: '80vh',          // Space between nav and bottom
      width: '100vw',             // Use full screen width
      textAlign: 'center',
      gap: 3                       // Consistent spacing between elements
    }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Home Page</Typography>
      <Typography variant="h6" color="gray">Please rate our service:</Typography>
      
      <RatingUI />
      <ButtonUI />
    </Box>
  );
}