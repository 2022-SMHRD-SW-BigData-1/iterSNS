import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="Gender-select-label">성별</InputLabel>
        <Select
          labelId="Gender-select-label"
          id="Gender-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={0}>남성</MenuItem>
          <MenuItem value={1}>여성</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
  );
}