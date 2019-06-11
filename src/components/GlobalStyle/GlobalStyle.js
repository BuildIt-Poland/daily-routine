import { createGlobalStyle } from 'styled-components';

import { fontWeightNormal, fontWeightBold, fontMedium } from '../../styles/designTokens';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    font-weight: ${fontWeightNormal};
    font-size: ${fontMedium};
    line-height: 1.4;
  }

  strong {
    font-weight: ${fontWeightBold};
  }

  em {
    font-style: italic;
    font-weight: ${fontWeightNormal};
  }
`;

export default GlobalStyle;
