import React from 'react';
import { Box, Typography } from '@mui/material';
import TextFieldUI from './ui/TextFieldUI';
import CheckboxUI from './ui/CheckboxUI';

export default function About() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      width: '100vw',
      gap: 4
    }}>
      <Typography variant="h2">About Us</Typography>
      <Box sx={{ width: '300px' }}> {/* Controls width of input fields */}
         <TextFieldUI />
      </Box>
      <CheckboxUI />
    </Box>
  );
}