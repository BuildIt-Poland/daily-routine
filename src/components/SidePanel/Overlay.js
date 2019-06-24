import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { zIndexModalOverlay, colorBlack } from '../../styles/designTokens';

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorBlack};
  z-index: ${zIndexModalOverlay};
`;

function Overlay({ isVisible }) {
  const transitions = useTransition(isVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.6 },
    leave: { opacity: 0 },
    config: {
      mass: 1,
      tension: 240,
      friction: 24
    }
  });

  return transitions.map(({ item, props, key }) => item && <Wrapper key={key} style={props} />);
}

Overlay.prototype = {
  isVisible: PropTypes.bool
};

export default Overlay;
