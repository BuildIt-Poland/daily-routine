import React from 'react';
import PropTypes from 'prop-types';

import Subheadline from '../Subheadline';
import Header from './Header';
import SideBar from './SideBar';
import Overlay from './Overlay';

function SlidingPanel({ onClose }) {
  return (
    <>
      <Overlay />
      <SideBar>
        <Header>
          <Subheadline>
            My role <strong>settings</strong>
          </Subheadline>
          <button onClick={onClose}>Close</button>
        </Header>
      </SideBar>
    </>
  );
}

SlidingPanel.propTypes = {
  onClose: PropTypes.func
};

export default SlidingPanel;
