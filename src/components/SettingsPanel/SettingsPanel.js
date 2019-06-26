import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import SettingsButton from '../SettingsButton';
import Content from './Content';
import Header from './Header';
import CloseButton from './CloseButton';

function SettingsPanel({ isVisible, onClose }) {
  const [isMale, toggleGender] = useState(true);

  return (
    <SidePanel isVisible={isVisible}>
      <Header>
        <Subheadline>
          My role <strong>settings</strong>
        </Subheadline>
        <CloseButton onClick={onClose} />
      </Header>
      <Content>
        <SettingsButton checked={isMale} onChange={() => toggleGender(!isMale)} />
      </Content>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
