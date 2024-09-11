import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value) {
      setFahrenheit((value * 9/5) + 32);
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value) {
      setCelsius(((value - 32) * 5/9).toFixed(1)); // Округление до десятых
    } else {
      setCelsius('');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
 
      </Typography>
      <TextField
        label="Цельсий"
        value={celsius}
        onChange={handleCelsiusChange}
        variant="outlined"
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Фаренгейт"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        variant="outlined"
        style={{ marginBottom: '20px' }}
      />
    </Box>
  );
};

export default TemperatureConverter;
