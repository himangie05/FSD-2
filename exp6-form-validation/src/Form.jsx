import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Container, Typography, Box, Paper } from '@mui/material';

export default function Experiment6() {
  const [formData, setFormData] = useState({ name: '', email: '', gender: 'male', terms: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required.";
    temp.email = (/.+@.+..+/).test(formData.email) ? "" : "Email is invalid.";
    temp.terms = formData.terms ? "" : "Please accept terms.";
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form Submitted Successfully!");
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Experiment 6: MUI Form</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField fullWidth label="Name" margin="normal" error={!!errors.name} helperText={errors.name}
            onChange={e => setFormData({...formData, name: e.target.value})} />
          
          <TextField fullWidth label="Email" margin="normal" error={!!errors.email} helperText={errors.email}
            onChange={e => setFormData({...formData, email: e.target.value})} />

          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <FormControlLabel control={<Checkbox onChange={e => setFormData({...formData, terms: e.target.checked})}/>} 
            label="Accept Terms" />
          {errors.terms && <Typography color="error" variant="caption" display="block">{errors.terms}</Typography>}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
        </Box>
      </Paper>
    </Container>
  );
}