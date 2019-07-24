// Named media queries for styled components

import { css } from 'styled-components';

// Devices breakpoints
const breakpoints = {
  desktop: 992,
  tablet: 768,
  phone: 420
};

// Iterate through the sizes and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
