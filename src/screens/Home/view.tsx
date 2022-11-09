import React from 'react';

import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { Background } from '../../components/Background';
import { ButtonInput } from '../../components/ButtonInput';
import { InputText } from '../../components/InputText/Index';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  Container,
  TaskTitle,
  ButtonWrapper,
  TaskBox,
  Counter,
  TaskField,
  ContactorBox,
  Checkbox,
} from './styles';
export interface TaskBoxProps {
  value: string;
  addTodo: () => void;
  onPressTasks: () => void;
}

export function HomeView({ addTodo, value, onPressTasks }: TaskBoxProps) {
  const navigation = useNavigation();
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
          <Checkbox text="Em Aberto" disabled />
          <ContactorBox>
            <Counter>{todoList.filter(item => !item.done).length}</Counter>
          </ContactorBox>
        </ButtonWrapper>
        <ButtonWrapper
          onPress={() => {
            navigation.navigate('Task', { done: true });
          }}
        >
          <Checkbox text="Concluídas" isChecked disabled />
          <ContactorBox>
            <Counter>{todoList.filter(item => item.done).length}</Counter>
          </ContactorBox>
        </ButtonWrapper>
      </TaskBox>
    </Container>
  );
}
