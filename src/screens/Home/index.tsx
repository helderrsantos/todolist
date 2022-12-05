import React, { useState } from 'react';

import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { saveTodo } from '../../redux/reducers/todoSlice';
import { HomeView } from './view';

export function Home() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    !task
      ? Alert.alert('Crie uma tarefa')
      : dispatch(
          saveTodo({
            item: task,
            done: false,
            id: Date.now().toString(),
            key: '',
            name: task,
          }),
        );
  };

  return (
    <HomeView
      addTodo={addTodo}
      value={task}
      onPressTasks={(text: React.SetStateAction<void>) => setTask(text)}
    />
  );
}
