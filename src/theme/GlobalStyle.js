import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily}
  }

  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
