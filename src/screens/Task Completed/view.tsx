import React from 'react';

import { Background } from '../../components/Background';
import { ButtonInput } from '../../components/ButtonInput';
import { InputText } from '../../components/InputText/Index';
import { TaskBoxCompleted } from '../../components/TaskBoxCompleted';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  Box,
  Clipboard,
  ContactorBox,
  Container,
  Counter,
  CreateTasks,
  Divider,
  NoTasks,
  OpenTaskBox,
  OpenTaskTitle,
  TaskField,
  TaskTitle,
} from './styles';

export interface TaskBoxCompletedProps {
  value: string;
  addTodoCompleted: () => void;
  onPressTasksCompleted: () => void;
}

export function TaskCompletedView({
  value,
  onPressTasksCompleted,
  addTodoCompleted,
}: TaskBoxCompletedProps) {
  const todoList = useAppSelector(state => state.todos.todoList);

  return (
    <Container>
      <Background />
      <TaskField>
        <InputText value={value} onChangeText={onPressTasksCompleted} />
        <ButtonInput onPress={addTodoCompleted} />
      </TaskField>
      <TaskTitle>
        <OpenTaskTitle>Concluídas</OpenTaskTitle>
        <ContactorBox>
          <Counter>{todoList.length}</Counter>
        </ContactorBox>
      </TaskTitle>
      {todoList.length === 0 ? (
        <Box>
          <Divider />
          <OpenTaskBox>
            <Clipboard source={require('../../assets/Clipboard.png')} />
          </OpenTaskBox>
          <NoTasks>Você ainda não tem tarefas concluídas</NoTasks>
          <CreateTasks>Crie e conclua suas tarefas</CreateTasks>
        </Box>
      ) : (
        <Box>
          {todoList.map((item: { item: string; id: string; done: boolean }) => (
            <TaskBoxCompleted name={item.item} id={item.id} done={item.done} />
          ))}
        </Box>
      )}
    </Container>
  );
}
