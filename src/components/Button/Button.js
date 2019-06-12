import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

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
