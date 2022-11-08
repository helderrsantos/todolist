import React from 'react';

import { Background } from '../../components/Background';
import { ButtonInput } from '../../components/ButtonInput';
import { InputText } from '../../components/InputText/Index';
import { TaskBox } from '../../components/TaskBox';
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
export interface TaskBoxProps {
  value: string;
  addTodo: () => void;
  onPressTasks: () => void;
}

export function TaskView({ value, addTodo, onPressTasks }: TaskBoxProps) {
  const todoList = useAppSelector(state => state.todos.todoList);

  return (
    <Container>
      <Background />
      <TaskField>
        <InputText value={value} onChangeText={onPressTasks} />
        <ButtonInput onPress={addTodo} />
      </TaskField>
      <TaskTitle>
        <OpenTaskTitle>Em aberto</OpenTaskTitle>
        <ContactorBox>
          <Counter>{todoList.length}</Counter>
        </ContactorBox>
      </TaskTitle>

      {todoList.length === 0 ? (
        <Box>
          <Divider />
          <OpenTaskBox>
            <Clipboard
              source={require('../../assets/Clipboard.png')}
            ></Clipboard>
          </OpenTaskBox>
          <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
          <CreateTasks>Crie tarefas e organize seus itens a fazer</CreateTasks>
        </Box>
      ) : (
        <Box>
          {todoList.map(item => (
            <TaskBox name={item.item} done={item.done} id={item.id} />
          ))}
        </Box>
      )}
    </Container>
  );
}
