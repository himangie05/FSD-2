import { Rating, Typography, Box } from '@mui/material';

export default function RatingUI() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography component="legend">Component 1: Rating</Typography>
      <Rating name="simple-controlled" defaultValue={4} />
    </Box>
  );
}