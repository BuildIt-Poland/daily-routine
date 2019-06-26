import React from 'react';
import PropTypes from 'prop-types';

import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import GenderSettings from '../GenderSettings';
import Header from './Header';
import CloseButton from './CloseButton';
import Form from './Form';

function SettingsPanel({ isVisible, onClose }) {
  return (
    <SidePanel isVisible={isVisible}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      <Form>
        <GenderSettings />
      </Form>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
