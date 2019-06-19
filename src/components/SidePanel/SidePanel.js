import React from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';

import Header from './Header';
import CloseButton from './CloseButton';
import Wrapper from './Wrapper';
import Overlay from './Overlay';

function SidePanel({ header, content, isVisible = true, onClose }) {
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
      duration: 150
    }
  });

  return (
    <>
      <Overlay isVisible={isVisible} />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper key={key} style={props}>
              <Header>
                {header}
                <CloseButton onClick={onClose}>Close</CloseButton>
              </Header>
              {content}
            </Wrapper>
          )
      )}
    </>
  );
}

SidePanel.prototype = {
  header: PropTypes.node,
  content: PropTypes.node,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SidePanel;
