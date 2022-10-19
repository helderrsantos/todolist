import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
 background-color: ${theme.colors.gray500};
 height: 100%;
`;

export const TaskField = styled.View`
 flex-direction: row;
 align-items: inherit;
 margin:-30px 24px 0;
`;

export const TaskTitle = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.purple};
  margin: 40px 26px;
`;

export const TaskBox = styled.View`
  height: 210px;
  margin: 0 24px 0 24px;
  justify-content: space-between;
`;

export const OpenTask = styled.TouchableOpacity`
 background-color: ${theme.colors.gray500};
 width: 327px;
 height: 97px;
 border-radius: 6px;
 border:1px;
 flex-direction: row;
`;

export const TaskCompleted = styled.TouchableOpacity`
 background-color: ${theme.colors.gray500};
 width: 327px;
 height: 97px;
 border-radius: 6px;
 border:1px;
 flex-direction: row;
`;

export const ContactorBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.gray400};
  margin: 38px 100px;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.gray200};
`;