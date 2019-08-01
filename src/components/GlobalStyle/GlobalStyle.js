import { createGlobalStyle } from 'styled-components';

import { fontWeightNormal, fontWeightBold, fontMedium, colorBlack } from '../../styles/designTokens';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    font-weight: ${fontWeightNormal};
    font-size: ${fontMedium};
    color: ${colorBlack};
    line-height: 1.2;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  strong {
    font-weight: ${fontWeightBold};
  }

  em {
    font-style: italic;
    font-weight: ${fontWeightNormal};
  }

  input, textarea, button, select, label, a, li {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ::-moz-selection {
    background: rgba(255, 138, 207, 0.6);
    color: inherit;
  }

  ::selection {
    background: rgba(255, 203, 207, 0.6);
    color: inherit;
  }
`;

export default GlobalStyle;
