import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function Button({ children, icon, className }) {
  return (
    <StyledButton className={className}>
      {children}
      {icon}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  className: PropTypes.string
};

export default Button;
