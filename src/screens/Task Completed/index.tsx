import React, { useState } from 'react';

import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { markTaskAsDone, saveTodo } from '../../redux/reducers/todoSlice';
import { TaskCompletedView } from './view';

export function TaskCompleted() {
  const [tasks, setTasks] = useState('');
  const dispatch = useDispatch();

  const addTodoCompleted = () => {
    tasks === ''
      ? Alert.alert('Crie uma tarefa')
      : dispatch(
          saveTodo({
            item: tasks,
            done: true,
            id: Date.now().toString(),
            key: '',
            name: '',
          }),
        );
  };

  const handleFinish = () => {
    dispatch(
      markTaskAsDone({
        done: true,
        key: '',
        item: '',
        id: '',
        name: '',
      }),
    );
  };

  return (
    <TaskCompletedView
      addTodoCompleted={addTodoCompleted}
      value={tasks}
      onPressTasksCompleted={(text: React.SetStateAction<void>) =>
        setTasks(text)
      }
    />
  );
}
