import React from 'react';
import { Box, Typography } from '@mui/material';
import SelectUI from './ui/SelectUI';
import ButtonUI from './ui/ButtonUI';

export default function Contact() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      width: '100vw',
      gap: 3
    }}>
      <Typography variant="h2">Contact Us</Typography>
      <Typography variant="body1">Select Department:</Typography>
      <Box sx={{ minWidth: 200 }}>
        <SelectUI />
      </Box>
      <ButtonUI />
    </Box>
  );
}