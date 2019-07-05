import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import StyledButton from './StyledButton';
import Text from './Text';

function Button({ to, onClick = () => {}, children, ...props }) {
  const mappedProps = {
    ...props,
    onClick,
    ...(to ? { as: Link, to } : { onClick })
  };

  const [isClicked, setIsClicked] = useState(false);
  const animationStyles = useSpring({
    borderBottomWidth: isClicked ? 0 : 3,
    config: {
      mass: 0.4,
      tension: 400,
      friction: 18
    }
  });

  return (
    <StyledButton
      {...mappedProps}
      style={animationStyles}
      onPointerDown={() => setIsClicked(true)}
      onPointerUp={() => setIsClicked(false)}
    >
      <Text>{children}</Text>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
