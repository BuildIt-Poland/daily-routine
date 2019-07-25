import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { animated, useSpring } from 'react-spring';

import { theme } from '../../types';
import { colorWhite, zIndexModalOverlay } from '../../styles/designTokens';

const FullScreenCurtain = styled(animated.div)`
  width: 100%;
  height: 160vh;
  background-color: ${colorWhite};
  left: 0;
  top: 6rem;
  position: absolute;
  z-index: ${zIndexModalOverlay};
  opacity: 1;
  transform: scaleY(0) translateY(0);
  transform-origin: 0 0;
`;

const FullScreenBar = styled(FullScreenCurtain)`
  z-index: ${zIndexModalOverlay + 1};
  transform-origin: 100% 100%;
`;

const ThickBar = styled(animated.div)`
  width: 100%;
  height: 0;
  left: 0;
  top: 6rem;
  position: absolute;
  z-index: ${zIndexModalOverlay + 2};
  transform: translateY(0);
`;

function AnimatedOverlay({ onFinished, theme }) {
  const { primaryColor } = theme;

  const fullScreenCurtainAnimation = useSpring({
    from: {
      transform: 'scaleY(0)'
    },
    to: async next => {
      await next({ transform: 'scaleY(1)' });
      await next({ transform: 'scaleY(0)' });
    },
    config: { mass: 2, tension: 160, friction: 20, precision: 0.1, clamp: true },
    onRest: onFinished
  });

  const fullScreenBarAnimation = useSpring({
    from: {
      transform: 'scaleY(0) translateY(50%)',
      opacity: 1,
      backgroundColor: primaryColor
    },
    to: {
      transform: 'scaleY(1) translateY(0%)',
      opacity: 0,
      backgroundColor: primaryColor
    },
    config: { tension: 120, friction: 22, clamp: true }
  });

  const thickBarAnimation = useSpring({
    from: {
      height: '0%',
      transform: 'translateY(0vh)',
      backgroundColor: primaryColor
    },
    to: {
      height: '30%',
      transform: 'translateY(140vh)',
      backgroundColor: primaryColor
    },
    config: { tension: 300, friction: 140 }
  });

  return (
    <>
      <FullScreenCurtain style={fullScreenCurtainAnimation} />
      <ThickBar style={thickBarAnimation} />
      <FullScreenBar style={fullScreenBarAnimation} />
    </>
  );
}

AnimatedOverlay.propTypes = {
  onFinished: PropTypes.func.isRequired,
  theme: theme.isRequired
};

export default withTheme(AnimatedOverlay);
