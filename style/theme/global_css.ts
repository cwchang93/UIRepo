import { createGlobalStyle } from "styled-components";
import { xinTheme as $ } from "./variables";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    color: ${$.globalFontColor};
    font-family: Arial, "Microsoft Jhenghei", sans-serif;
  }
  button{
    font-family: Arial, "Microsoft Jhenghei", sans-serif;
  }
  a{
      cursor: pointer;
  }
  input::placeholder{
    font-family: Arial, "Microsoft Jhenghei", sans-serif;
  }
  select, option{
    font-family: Arial, "Microsoft Jhenghei", sans-serif;

  }
`;
