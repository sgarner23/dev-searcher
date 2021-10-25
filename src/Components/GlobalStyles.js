import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

 .search-bar-container {
   background-color: ${({ theme }) => theme.inputBackground}
 }

  
  `;

// //p {
//   color: ${({ theme }) => theme.red}
// }
