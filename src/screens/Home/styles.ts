import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
 background-color: ${theme.colors.gray500};
 height: 100%;
 
`;

export const HeaderMain = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.gray700};
  height: 170px;
`;

export const Header = styled.Text`
 font-family:${theme.fonts.text700}; 
`;

export const Title = styled.Text`
 color: ${theme.colors.blue};
 font-family:${theme.fonts.text700};
 font-size: 38px;
`;

export const TitleDo = styled.Text`
 color: ${theme.colors.purpledark};
 font-family:${theme.fonts.text700};
 font-size: 38px;
`;

export const Rocket = styled.Image`

`;

export const TaskField = styled.View`
 flex-direction: row;
 align-items: inherit;
 margin:-30px 24px 0;
`;

export const InputText = styled.TextInput`
 color: ${theme.colors.gray300};
 background-color: ${theme.colors.gray500};
 font-family: ${theme.fonts.text400};
 font-size: 16px;
 width: 271px;
 height: 54px;
 border-radius: 6px;
 padding: 16px;
 border:1px;
`;

export const ButtonInput = styled.TouchableOpacity`
 background-color: ${theme.colors.bluedark};
 width: 54px;
 height: 54px;
 border: 1px;
 border-radius: 6px;
 margin: 0 0 0 4px;
`;
