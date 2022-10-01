import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Input = styled.TextInput`
 color: ${theme.colors.gray200};
 background-color: ${theme.colors.gray500};
 font-family: ${theme.fonts.text400};
 font-size: 16px;
 width: 271px;
 height: 54px;
 border-radius: 6px;
 padding: 16px;
 border:1px;
`;