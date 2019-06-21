import React from 'react';
import PropTypes from 'prop-types';

import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import Header from './Header';
import CloseButton from './CloseButton';

function SettingsPanel({ isVisible, onClose }) {
  return (
    <SidePanel isVisible={isVisible}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      {/* TODO: Settings content goes here */}
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
