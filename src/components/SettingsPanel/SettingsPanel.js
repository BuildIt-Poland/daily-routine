import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MALE } from '../../constants/genders';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import SettingsButton from '../SettingsButton';
import Header from './Header';
import CloseButton from './CloseButton';

function SettingsPanel({ isVisible, onClose }) {
  const [gender, setGender] = useState(MALE);

  return (
    <SidePanel isVisible={isVisible}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      <SettingsButton gender={gender} onChange={event => setGender(event.target.value)} />
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
