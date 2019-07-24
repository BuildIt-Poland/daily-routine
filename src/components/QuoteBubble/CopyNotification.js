import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { zIndexArtworkPart } from '../../styles/designTokens';
import { CopyIndicator } from '../Icons';

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 1.4rem;
  left: 1.4rem;
  transform-origin: 50% 100%;
  z-index: ${zIndexArtworkPart};
`;

function CopyNotification({ isVisible, onFinished }) {
  const transitions = useTransition(isVisible, null, {
    from: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    leave: {
      opacity: 0,
      transform: 'translateY(-20px) scale(1.6)'
    },
    config: {
      tension: 180,
      friction: 36
    },
    onRest: onFinished
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <Wrapper data-testid="copy-notification" key={key} style={props}>
          <CopyIndicator />
        </Wrapper>
      )
  );
}

CopyNotification.prototype = {
  isVisible: PropTypes.bool,
  onFinished: PropTypes.func
};

export default CopyNotification;
