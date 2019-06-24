// Settings trigger with side panel

import React, { useState } from 'react';

import SettingsPanel from '../SettingsPanel';
import GearButton from './GearButton';

function SettingsTrigger() {
  const [isVisible, setIsVisible] = useState(false);

  const togglSettingsPanel = () => setIsVisible(!isVisible);

  return (
    <>
      <GearButton onClick={togglSettingsPanel} />
      <SettingsPanel isVisible={isVisible} onClose={togglSettingsPanel} />
    </>
  );
}

export default SettingsTrigger;
