import React, { useState } from 'react';

import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { saveTodo } from '../../redux/reducers/todoSlice';
import { TaskView } from './view';

export function Task() {
  const [tasks, setTasks] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    tasks === ''
      ? Alert.alert('Crie uma tarefa')
      : dispatch(
          saveTodo({
            item: tasks,
            done: false,
            id: Date.now().toString(),
            key: '',
            name: '',
          }),
        );
  };

  return (
    <TaskView
      addTodo={addTodo}
      value={tasks}
      onPressTasks={(text: React.SetStateAction<void>) => setTasks(text)}
    />
  );
}
