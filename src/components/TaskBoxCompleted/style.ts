import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Box = styled.View`
  width: 100%;
  height: 70px;
  background-color: ${theme.colors.gray500};
  flex-direction: row;
  align-items: center;
  border: 1px;
  border-color: ${theme.colors.gray400};
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 12px;
  justify-content: space-between;
`;

export const Trash = styled.Image``;

export const TrashBox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const Tasks = styled.Text`
  color: white;
  font-size: 14px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.gray200};
`;
