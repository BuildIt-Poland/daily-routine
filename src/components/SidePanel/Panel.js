import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';

import { zIndexModal, colorWhite } from '../../styles/designTokens';

const Wrapper = styled(animated.section)`
  height: 100%;
  width: 26rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorWhite};
  z-index: ${zIndexModal};
`;

function Panel({ isVisible, children }) {
  const transitions = useTransition(isVisible, null, {
    from: {
      transform: 'translateX(26rem)'
    },
    enter: {
      transform: 'translateX(0)'
    },
    leave: {
      transform: 'translateX(26rem)'
    },
    config: {
      mass: 1,
      tension: 340,
      friction: 40
    }
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <Wrapper key={key} style={props}>
          {children}
        </Wrapper>
      )
  );
}

Panel.prototype = {
  isVisible: PropTypes.bool,
  children: PropTypes.node
};

export default Panel;
