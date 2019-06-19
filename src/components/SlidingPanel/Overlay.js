import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { zIndexModalOverlay, colorBlack } from '../../styles/designTokens';

const StyledOverlay = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorBlack};
  z-index: ${zIndexModalOverlay};
`;

function Overlay({ show }) {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.6 },
    leave: { opacity: 0 },
    config: {
      duration: 150
    }
  });

  return transitions.map(({ item, props, key }) => item && <StyledOverlay key={key} style={props} />);
}

Overlay.prototype = {
  show: PropTypes.bool.isRequired
};

export default Overlay;
