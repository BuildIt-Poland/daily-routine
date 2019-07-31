import React, { useContext } from 'react';

import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import AnimatedOverlay from './AnimatedOverlay';

function RouteTransitionAnimation({ location }) {
  const { isAnimating, stopAnimation } = useContext(RouteTransitionAnimationContext);
  useLockBodyScroll(isAnimating);

  return isAnimating && <AnimatedOverlay location={location} onFinished={stopAnimation} />;
}

export default RouteTransitionAnimation;
