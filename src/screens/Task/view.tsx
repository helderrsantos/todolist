import React from 'react';

import { FlatList } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { ButtonInput } from '../../components/ButtonInput';
import { InputText } from '../../components/InputText/Index';
import { TaskBox } from '../../components/TaskBox';
import { ITask } from '../../redux/reducers/todoSlice';
import {
  TaskWrapper,
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
  CompletedTaskTitle,
} from './styles';
export interface TaskBoxProps {
  task: string;
  data: ITask[];
  setTask: (text: string) => void;
  addTodo: () => void;
  onPressTask: (item: ITask) => void;
}

export function TaskView({
  addTodo,
  onPressTask,
  data,
  task,
  setTask,
}: TaskBoxProps) {
  return (
    <Container>
      <Background />
      <TaskField>
        <InputText value={task} onChangeText={setTask} />
        <ButtonInput onPress={addTodo} />
      </TaskField>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TaskWrapper>
              <TaskBox
                onPress={() => onPressTask(item)}
                name={item.item}
                done={item.done}
                id={item.id}
              />
            </TaskWrapper>
          );
        }}
        ListEmptyComponent={
          <TaskWrapper>
            <Divider />
            <OpenTaskBox>
              <Clipboard source={require('../../assets/Clipboard.png')} />
            </OpenTaskBox>
            <NoTasks>Você ainda não tem tarefas cadastradas</NoTasks>
            <CreateTasks>
              Crie tarefas e organize seus itens a fazer
            </CreateTasks>
          </TaskWrapper>
        }
        ListHeaderComponent={
          <TaskTitle>
            <OpenTaskTitle>Em aberto</OpenTaskTitle>
            <CompletedTaskTitle>Concluídas</CompletedTaskTitle>
            <ContactorBox>
              <Counter>{data.length}</Counter>
            </ContactorBox>
          </TaskTitle>
        }
      />
    </Container>
  );
}
