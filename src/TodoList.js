import React, { useState } from 'react';
import { TextField, Button, Typography, Box, List, ListItem } from '@mui/material';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
      setErrorMessage(''); // Сброс сообщения об ошибке
    } else {
      setErrorMessage('Поле пустое'); // Установка сообщения об ошибке
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box>
      <TextField
        label="Добавить задачу"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        style={{ marginBottom: '20px' }} // Отступ снизу от поля ввода
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddTask}
        style={{ marginTop: '20px', marginBottom: '20px' }} // Отступ сверху и снизу от кнопки
      >
        Добавить
      </Button>
      {errorMessage && (
        <Typography variant="body2" color="error" style={{ marginTop: '20px' }}>
          {errorMessage}
        </Typography>
      )}
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        {`Общее количество задач: ${tasks.length}`}
      </Typography>
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index}>
            {`${index + 1}. ${t}`}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: '10px' }}
            >
              Удалить
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
