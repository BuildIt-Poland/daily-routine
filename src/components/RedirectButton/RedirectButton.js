import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ArrowIcon from './ArrowIcon';

function RedirectButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <ArrowIcon />
    </Button>
  );
}

RedirectButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default RedirectButton;
