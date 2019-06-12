import React from 'react';
import styled from 'styled-components';

import {
  colorWhite,
  colorBlack,
  fontLarge,
  fontWeightBold,
  borderRadius,
  spacingSmall,
  spacingMedium
} from '../../styles/designTokens';

const StyledButton = styled.button`
  position: relative;
  background: ${colorBlack};
  color: ${colorWhite};
  display: block;
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  padding: ${spacingSmall};
  border-radius: ${borderRadius};
  text-align: left;
  width: 100%;
  margin: ${spacingMedium} auto;
  box-shadow: 0 0.5rem 0.4rem -0.4rem ${colorBlack};

  &:not(:disabled) {
    cursor: pointer;
  }

  svg {
    position: absolute;
    right: 0;
    bottom: -1rem;
  }
`;

function Button({ label, children, className }) {
  return (
    <StyledButton className={className}>
      {label}
      {children}
    </StyledButton>
  );
}

export default Button;
