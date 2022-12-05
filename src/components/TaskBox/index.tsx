import React from 'react';

import { IBouncyCheckboxProps } from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

import { remove } from '../../redux/reducers/todoSlice';
import { Box, CheckBoxTask, Trash, TrashBox } from './style';

export interface TaskBoxProps extends IBouncyCheckboxProps {
  name: string;
  done: boolean;
  id: string;
}

export function TaskBox({ name, id, done, ...props }: TaskBoxProps) {
  const dispatch = useDispatch();
  const trashCan = () => {
    dispatch(
      remove({
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
      <CheckBoxTask {...props} text={name} isChecked={done} />
      <TrashBox onPress={trashCan}>
        <Trash source={require('../../assets/trash.png')} />
      </TrashBox>
    </Box>
  );
}
