import React from 'react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';

import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import GenderSettings from '../GenderSettings';
import ErrorBoundary from '../ErrorBoundary';
import Header from './Header';
import CloseButton from './CloseButton';
import Form from './Form';

function SettingsPanel({ isVisible, onClose }) {
  return (
    <SidePanel isVisible={isVisible} onOverlayClick={onClose}>
      <FocusLock autoFocus={false}>
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
      </FocusLock>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
