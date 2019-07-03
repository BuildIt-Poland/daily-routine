import React, { useState } from 'react';
import { func, oneOfType, object, node } from 'prop-types';
import { useSpring, interpolate } from 'react-spring';

import Button from '../Button';

function ButtonBase({ Icon, onClick = () => {}, children, ...props }) {
  const [shouldPlayAnimation, toggleIconAnmiation] = useState(false);
  const handleClick = e => {
    toggleIconAnmiation(true);
    onClick(e);
  };

  const { x } = useSpring({
    x: shouldPlayAnimation ? 1 : 0,
    onRest: () => toggleIconAnmiation(false)
  });

  const scaleAndRotateInterpolation = !shouldPlayAnimation
    ? ''
    : interpolate(
        [
          x.interpolate([0, 0.3, 0.5, 0.8, 1], [1, 0.8, 1, 1.2, 1]),
          x.interpolate([0, 0.3, 0.5, 0.8, 1], [0, 15, 0, -7, 0])
        ],
        (scale, rotation) => `scale(${scale}) rotate(${rotation}deg)`
      );

  return (
    <Button {...props} onClick={handleClick}>
      {children}
      <Icon style={{ transform: scaleAndRotateInterpolation }} />
    </Button>
  );
}

ButtonBase.propTypes = {
  // Support for `animated` react-spring object type
  Icon: oneOfType([func, object]),
  children: node,
  onClick: func
};

export default ButtonBase;
