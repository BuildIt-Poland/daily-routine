import React, { useState } from 'react';

import GearButton from './GearButton';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';

function SettingsTrigger() {
  const [isVisible, setIsVisible] = useState(false);

  const toogleSettings = () => setIsVisible(!isVisible);

  const Header = () => {
    return (
      <Subheadline>
        My role <strong>settings</strong>
      </Subheadline>
    );
  };

  return (
    <>
      <GearButton onClick={toogleSettings} />
      <SidePanel header={<Header />} isVisible={isVisible} onClose={toogleSettings} />
    </>
  );
}

export default SettingsTrigger;
