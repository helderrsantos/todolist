import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Box = styled.TouchableOpacity`
width:100%;
height:70px;
background-color: ${theme.colors.gray400};
flex-direction: row;
align-items: center;
border:1px;
border-radius: 8px;
margin: 2px;
padding: 12px;
`;

export const Tasks = styled.Text`
  color: white;
  font-size: 14px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.gray200};
`;