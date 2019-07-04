import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ArrowIcon from './ArrowIcon';
import Text from './Text';

function ButtonBase({ children, ...props }) {
  return (
    <Button {...props}>
      <Text>{children}</Text>
      {<ArrowIcon />}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonBase;
