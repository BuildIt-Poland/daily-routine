// Button wrapper with all styles removed
// Useful for accessible action icons / target areas

import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  min-width: 4rem;
  min-height: 4rem;
  cursor: pointer;
  outline: 0;
  text-decoration: none;

  svg {
    display: block;
  }
`;

export default Button;
