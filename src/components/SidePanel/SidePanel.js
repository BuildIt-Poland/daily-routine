// Simple, modal-like side panel with overlay

import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import Overlay from './Overlay';

function SidePanel({ isVisible, children, onOverlayClick }) {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onOverlayClick} />
      <Panel isVisible={isVisible}>{children}</Panel>
    </>
  );
}

SidePanel.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  onOverlayClick: PropTypes.func
};

export default SidePanel;
