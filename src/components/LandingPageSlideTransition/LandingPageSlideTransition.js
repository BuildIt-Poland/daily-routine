import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { colorDarkBlue, colorWhite, zIndexModalOverlay } from '../../styles/designTokens';
import { LandingPageAnimationContext } from '../../context/LandingPageAnimationContext';

function HomePageAnimation({ onFinished }) {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const baseStyles = {
    left: '0',
    top: -windowHeight,
    width: '100%',
    height: windowHeight,
    position: 'fixed',
    zIndex: zIndexModalOverlay,
    display: 'block'
  };

  const firstLayerAnimationStyles = useSpring({
    from: { ...baseStyles, background: colorWhite },
    to: async next => {
      await next({ ...baseStyles, top: windowHeight });
    },
    config: { mass: 1, tension: 200, friction: 1, duration: 900 },
    delay: 0
  });

  const secondLayerAnimationStyles = useSpring({
    from: { ...baseStyles, background: colorDarkBlue, top: -windowHeight / 2, height: windowHeight / 3 },
    to: async next => {
      await next({ ...baseStyles, top: windowHeight });
    },
    config: { mass: 1, tension: 80, friction: 10, duration: 700 },
    delay: 1000,
    // onFinished needs to be called on the last animated element (secondLayer finishes last)
    onRest: onFinished
  });

  const thirdLayerAnimationStyles = useSpring({
    from: { ...baseStyles, background: colorWhite, top: -windowHeight / 4, height: windowHeight / 4 },
    to: async next => {
      await next({ ...baseStyles, top: windowHeight });
    },
    config: { mass: 1, tension: 120, friction: 40, duration: 800 },
    delay: 800
  });

  return (
    <>
      <animated.div style={firstLayerAnimationStyles} />
      <animated.div style={secondLayerAnimationStyles} />
      <animated.div style={thirdLayerAnimationStyles} />
    </>
  );
}

HomePageAnimation.propTypes = {
  onFinished: PropTypes.func.isRequired
};

export default function LandingPageSlideTransition() {
  const { isAnimating, stopAnimation } = useContext(LandingPageAnimationContext);
  return isAnimating && <HomePageAnimation onFinished={stopAnimation} />;
}
