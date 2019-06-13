import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from './Icon';

function RoleButton({ className, children, to }) {
  return (
    <Button to={to} className={className} icon={<Icon />}>
      {children}
    </Button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default RoleButton;
