import React from 'react';
import { Link } from 'react-router-dom';
import { func, node, string } from 'prop-types';

import StyledButton from './StyledButton';

function Button({ to, onClick = () => {}, children, ...props }) {
  const mappedProps = {
    ...props,
    onClick,
    ...(to ? { as: Link, to } : { onClick })
  };

  return <StyledButton {...mappedProps}>{children}</StyledButton>;
}

Button.propTypes = {
  children: node,
  to: string,
  onClick: func
};

export default Button;
