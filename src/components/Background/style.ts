import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Main = styled.View`
 background-color: ${theme.colors.gray500};
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