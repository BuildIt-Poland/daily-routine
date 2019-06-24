// Simple, modal-like side panel with overlay

import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import Overlay from './Overlay';

function SidePanel({ isVisible, children }) {
  return (
    <>
      <Overlay isVisible={isVisible} />
      <Panel isVisible={isVisible}>{children}</Panel>
    </>
  );
}

SidePanel.prototype = {
  isVisible: PropTypes.bool,
  children: PropTypes.node
};

export default SidePanel;
