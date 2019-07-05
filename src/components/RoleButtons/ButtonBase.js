import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ArrowIcon from './ArrowIcon';

function ButtonBase({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <ArrowIcon />
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonBase;
