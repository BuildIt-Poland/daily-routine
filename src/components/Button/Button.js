import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Button;
