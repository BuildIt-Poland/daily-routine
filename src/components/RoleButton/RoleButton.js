import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ArrowIcon from './ArrowIcon';

function RoleButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <ArrowIcon />
    </Button>
  );
}

RoleButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoleButton;
