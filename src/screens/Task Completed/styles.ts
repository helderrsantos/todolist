import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.ScrollView`
 background-color: ${theme.colors.gray500};
 height: 100%;
`;

export const TaskField = styled.View`
 flex-direction: row;
 align-items: inherit;
 margin:-30px 24px 0;
`;

export const TaskTitle = styled.View`
  height: 24px;
  width: 327px;
  margin: 32px 24px 20px;
  flex-direction: row;
  align-items: center;
`;

export const OpenTaskTitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.purpledark};
`;

export const ContactorBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.gray400};
  margin: 0 0 0 8px;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.gray200};
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
  margin: 0 24px;
  align-items: center;
  background-color: ${theme.colors.gray500};
  flex: 1;
`;

export const OpenTaskBox = styled.View`
  margin-bottom: 16px;
  margin-top:48px;
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




