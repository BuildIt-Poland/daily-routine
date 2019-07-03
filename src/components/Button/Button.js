import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { func, node, string } from 'prop-types';
import { useSpring } from 'react-spring';

import StyledButton from './StyledButton';

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
      tension: 500,
      friction: 8
    }
  });

  return (
    <StyledButton
      {...mappedProps}
      style={animationStyles}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node,
  to: string,
  onClick: func
};

export default Button;
