import React from 'react';
import PropTypes from 'prop-types';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import GenderSettings from '../GenderSettings';
import ErrorBoundary from '../ErrorBoundary';
import Header from './Header';
import CloseButton from './CloseButton';
import Form from './Form';

function SettingsPanel({ isVisible, onClose }) {
  useLockBodyScroll(isVisible);

  return (
    <SidePanel isVisible={isVisible} onOverlayClick={onClose}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      <Form>
        <ErrorBoundary>
          <GenderSettings />
        </ErrorBoundary>
      </Form>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
