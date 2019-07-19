import React, { useContext } from 'react';

import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import AnimatedOverlay from './AnimatedOverlay';

function RouteTransitionAnimation({ location }) {
  const { isAnimating, stopAnimation } = useContext(RouteTransitionAnimationContext);

  return isAnimating && <AnimatedOverlay location={location} onFinished={stopAnimation} />;
}

export default RouteTransitionAnimation;
