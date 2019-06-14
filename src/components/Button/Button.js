import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import generateColors from '../../utils/generateColors';
import StyledButton from './StyledButton';

function Button({ variant, children, icon, className, to, onClick }) {
  // Render link if 'to' prop is passed, button with handler otherwise
  const props = {
    ...(to ? { as: Link, to } : { onClick: onClick })
  };

  return (
    <StyledButton variant={generateColors(variant)} className={className} {...props}>
      {children}
      {icon}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default Button;
