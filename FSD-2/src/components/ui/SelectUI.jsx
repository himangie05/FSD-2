import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
export default function SelectUI() { 
  return (
    <FormControl fullWidth><InputLabel>Options</InputLabel>
      <Select label="Options" defaultValue={10}><MenuItem value={10}>Option 1</MenuItem><MenuItem value={20}>Option 2</MenuItem></Select>
    </FormControl>
  ); 
}