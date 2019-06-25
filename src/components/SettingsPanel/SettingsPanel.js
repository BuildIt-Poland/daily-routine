import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MALE_GENDER } from '../../constants/gender';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import SettingsButton from '../SettingsButton';
import Content from './Content';
import Header from './Header';
import CloseButton from './CloseButton';

function SettingsPanel({ isVisible, onClose }) {
  const [gender, setGender] = useState(MALE_GENDER);

  return (
    <SidePanel isVisible={isVisible}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      <Content>
        <SettingsButton gender={gender} onChange={event => setGender(event.target.value)} />
      </Content>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
