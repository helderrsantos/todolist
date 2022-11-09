import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.gray600};
  height: 100%;
`;

export const TaskField = styled.View`
  flex-direction: row;
  align-items: inherit;
  margin: -30px 24px 0;
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

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${theme.colors.gray500};
  width: 100%;
  height: 97px;
  border-radius: 6px;
  border: 1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ContactorBox = styled.View`
  padding: 4px 8px;
  border-radius: 15px 0;
  // background-color: ${theme.colors.gray400};
  // background-color: ({theme}) => ${theme.colors.gray400};
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.gray200};
`;

export const Checkbox = styled(BouncyCheckbox).attrs(({ isChecked }) => ({
  fillColor: isChecked ? '#5E60CE' : '#4EA8DE',
  unfillColor: '#262626',
  textStyle: {
    fontFamily: 'Inter_700Bold',
    color: isChecked ? '#5E60CE' : '#4EA8DE',
    width: '100%',
    textDecorationLine: 'none',
  },
}))`
  flex: 1;
  width: 100%;
`;
