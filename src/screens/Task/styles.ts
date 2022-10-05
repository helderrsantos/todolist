import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
 background-color: ${theme.colors.gray500};
 height: 100%;
`;

export const TaskTitle = styled.View`
  height: 22px;
  width: 327px;
  margin: 32px 24px 20px;
  flex-direction: row;
`;

export const OpenTaskTitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.blue};
`;

export const Counter = styled.View`
  width: 25px;
  height: 19px;
  border-radius: 50%;
  background-color: ${theme.colors.gray400};
  margin: 0 0 0 8px;
`;

export const Divider = styled.View`
  border:solid;
  border-color: ${theme.colors.gray400};
  width: 327px;
  height: 0.5px;
  margin: 0 24px;
`;

export const Box = styled.View`
  width: 327px;
  height: 208px;
  margin: 0 24px;
  justify-content: center;
  align-items: center;
`;


export const OpenTaskBox = styled.View`
  margin-bottom: 16px;
`;

export const Clipboard = styled.Image`

`;

export const NoTasks = styled.Text`
  color: ${theme.colors.gray300};
  font-family: ${theme.fonts.text700};
`;

export const CreateTasks = styled.Text`
  color: ${theme.colors.gray300};
  font-family: ${theme.fonts.text400};
`;


