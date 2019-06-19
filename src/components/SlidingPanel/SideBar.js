import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { zIndexModal, colorWhite } from '../../styles/designTokens';
import Subheadline from '../Subheadline';
import Header from './Header';

const StyledSideBar = styled(animated.section)`
  height: 100%;
  width: 26rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorWhite};
  z-index: ${zIndexModal};
`;

function SideBar({ show, onClose }) {
  const transitions = useTransition(show, null, {
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
      duration: 150
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <StyledSideBar key={key} style={props}>
          <Header>
            <Subheadline>
              My role <strong>settings</strong>
            </Subheadline>
            <button onClick={onClose}>Close</button>
          </Header>
        </StyledSideBar>
      )
  );
}

SideBar.prototype = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SideBar;
