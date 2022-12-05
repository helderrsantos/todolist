import React, { useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  ITask,
  markTaskAsDone,
  saveTodo,
} from '../../redux/reducers/todoSlice';
import { TaskView } from './view';

export function Task() {
  const [task, setTask] = useState('');
  const { done } = useRoute<any>().params;
  const todoList = useSelector((state: { todos: { todoList: any[] } }) =>
    state.todos.todoList.filter((item: { done: any }) => item.done === done),
  );
  const dispatch = useDispatch();

  const addTodo = () => {
    task === ''
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

  const handleTaskDone = (item: ITask) => {
    dispatch(markTaskAsDone(item));
  };

  return (
    <TaskView
      data={todoList}
      addTodo={addTodo}
      task={task}
      setTask={setTask}
      onPressTask={handleTaskDone}
    />
  );
}
