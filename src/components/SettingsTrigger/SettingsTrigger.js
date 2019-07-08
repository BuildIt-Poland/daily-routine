// Settings trigger with side panel

import React, { useState } from 'react';

import SettingsPanel from '../SettingsPanel';
import GearButton from './GearButton';

function SettingsTrigger() {
  const [isVisible, setIsVisible] = useState(false);

  const openSettingsPanel = () => setIsVisible(true);

  const closeSettingsPanel = () => setIsVisible(false);

  return (
    <>
      <GearButton onClick={openSettingsPanel} />
      <SettingsPanel isVisible={isVisible} onClose={closeSettingsPanel} />
    </>
  );
}

export default SettingsTrigger;
