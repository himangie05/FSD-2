import { useState } from "react"; 
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Box sx={{ bgcolor: '#cfe8fc', p: 2, borderRadius: 2 }}>
        <h3>{cno} : Local State Count: {count}</h3>  
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setCount(count + 1)}>Increase</Button>
          <Button variant="contained" color="error" onClick={() => setCount(count - 1)}>Decrease</Button>
        </Stack>
      </Box>
    </Container>
  );
}