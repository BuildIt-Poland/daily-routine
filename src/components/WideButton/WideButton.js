import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function WideButton({ children, icon, className }) {
  return (
    <StyledButton className={className}>
      {children}
      {icon}
    </StyledButton>
  );
}

WideButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  className: PropTypes.string
};

export default WideButton;
