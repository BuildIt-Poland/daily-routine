import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Icon from './Icon';
import Text from './Text';

function ButtonBase({ children, ...props }) {
  return (
    <Button as={Link} {...props}>
      <Text>{children}</Text>
      {<Icon />}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonBase;
