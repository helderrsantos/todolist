import React from 'react';

import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

import { reset } from '../../redux/reducers/todoSlice';
import { Box, Tasks, Trash, TrashBox } from './style';

export interface TaskBoxProps extends IBouncyCheckboxProps {
  name: string;
  done: boolean;
  id: string;
}

export function TaskBox({ name, id, ...props }: TaskBoxProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const remove = () => {
    dispatch(
      reset({
        id: id,
        item: '',
        name: '',
        done: false,
        key: '',
      }),
    );
  };

  return (
    <Box>
      <BouncyCheckbox
        {...props}
        fillColor="#4EA8DE"
        unfillColor="#262626"
        size={24}
        textStyle={{ fontFamily: 'Inter_400Regular', color: '#4EA8DE' }}
        text={<Tasks>{name}</Tasks>}
      />
      <TrashBox onPress={remove}>
        <Trash source={require('../../assets/trash.png')} />
      </TrashBox>
    </Box>
  );
}
