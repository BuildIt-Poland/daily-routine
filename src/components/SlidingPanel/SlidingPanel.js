import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GearButton from '../GearButton';
import SideBar from './SideBar';
import Overlay from './Overlay';

function SlidingPanel() {
  const [isSlidingPanelOpen, setSlidingPanelVisible] = useState(false);

  const toogleSlidingPanel = () => setSlidingPanelVisible(!isSlidingPanelOpen);

  return (
    <>
      <GearButton onClick={toogleSlidingPanel} />
      <Overlay show={isSlidingPanelOpen} />
      <SideBar show={isSlidingPanelOpen} onClose={toogleSlidingPanel} />
    </>
  );
}

SlidingPanel.propTypes = {
  onClose: PropTypes.func
};

export default SlidingPanel;
