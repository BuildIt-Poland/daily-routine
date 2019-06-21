import React, { useState } from 'react';

import SidePanel from '../SidePanel';
import GearButton from './GearButton';
import Header from './Header';

function SettingsTrigger() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSettings = () => setIsVisible(!isVisible);

  return (
    <>
      <GearButton onClick={toggleSettings} />
      <SidePanel header={<Header />} isVisible={isVisible} onClose={toggleSettings} />
    </>
  );
}

export default SettingsTrigger;
