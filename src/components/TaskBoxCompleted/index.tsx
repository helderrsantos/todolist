import React from 'react';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

import { reset } from '../../redux/reducers/todoSlice';
import { Trash, TrashBox } from '../TaskBoxCompleted/style';
import { Box, Tasks } from './style';

export interface TaskBoxCompletedProps {
  name: string;
  id: string;
  done: boolean;
}

export function TaskBoxCompleted({ name, id }: TaskBoxCompletedProps) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(
      reset({
        id: id,
        key: '',
        item: '',
        name: '',
        done: false,
      }),
    );
  };

  return (
    <Box>
      <BouncyCheckbox
        fillColor="#5E60CE"
        unfillColor="#262626"
        size={24}
        isChecked={true}
        textStyle={{ fontFamily: 'Inter_400Regular', color: '#5E60CE' }}
        text={<Tasks>{name}</Tasks>}
      />
      <TrashBox onPress={remove}>
        <Trash source={require('../../assets/trash.png')} />
      </TrashBox>
    </Box>
  );
}
