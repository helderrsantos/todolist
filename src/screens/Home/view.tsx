import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ButtonInput } from '../../components/ButtonInput';
import { InputText } from '../../components/InputText/Index';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  Container,
  TaskTitle,
  TaskBox,
  Counter,
  TaskField,
  ContactorBox,
  ButtonWrapper,
  CheckBox,
} from './styles';
export interface TaskBoxProps {
  value: string;
  addTodo: () => void;
  onPressTasks: () => void;
}

export function HomeView({ addTodo, value, onPressTasks }: TaskBoxProps) {
  const navigation = useNavigation<any>();
  const todoList = useAppSelector(state => state.todos.todoList);

  return (
    <Container>
      <Background />
      <TaskField>
        <InputText value={value} onChangeText={onPressTasks} />
        <ButtonInput onPress={addTodo} />
      </TaskField>
      <TaskTitle>Minhas tarefas</TaskTitle>
      <TaskBox>
        <ButtonWrapper
          onPress={() => {
            navigation.navigate('Task', { done: false });
          }}
        >
          <CheckBox text="Em Aberto" disabled />
          <ContactorBox>
            <Counter>{todoList.filter(item => !item.done).length}</Counter>
          </ContactorBox>
        </ButtonWrapper>
        <ButtonWrapper
          onPress={() => {
            navigation.navigate('Task', { done: true });
          }}
        >
          <CheckBox text="Concluídas" isChecked disabled />
          <ContactorBox>
            <Counter>{todoList.filter(item => item.done).length}</Counter>
          </ContactorBox>
        </ButtonWrapper>
      </TaskBox>
    </Container>
  );
}
