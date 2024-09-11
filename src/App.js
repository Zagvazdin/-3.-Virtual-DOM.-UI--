import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';
import { Container, Typography } from '@mui/material';
import './App.css';
const App = () => {
  return (
    <Container>
      <h1 className="rainbow-text">Задача 1</h1>
      <Typography variant="h4" gutterBottom>Температурный конвертер</Typography>
      <TemperatureConverter />
      <h1 className="rainbow-text">Задача 2</h1>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>Список дел</Typography>
      <TodoList />
    </Container>
  );
};

export default App;
