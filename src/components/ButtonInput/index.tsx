import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { ButtonMain } from './style';

export function ButtonInput({ ...props }) {
  return (
    <ButtonMain activeOpacity={0.7} {...props}>
      <Ionicons
        name="add-circle-outline"
        size={16}
        color="white"
        style={{ margin: 18 }}
      />
    </ButtonMain>
  );
}
