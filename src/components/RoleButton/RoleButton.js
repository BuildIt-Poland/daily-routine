import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from './Icon';

function RoleButton({ className, children, to, variant }) {
  return (
    <Button to={to} variant={variant} className={className} icon={<Icon />}>
      {children}
    </Button>
  );
}

RoleButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string
};

export default RoleButton;
