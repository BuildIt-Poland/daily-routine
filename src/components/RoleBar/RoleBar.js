import React from 'react';
import PropTypes from 'prop-types';

import Subheadline from '../Subheadline';
import Header from './Header';
import SlidingPanel from '../SlidingPanel';

function RoleBar({ label }) {
  return (
    <Header>
      <Subheadline>
        I am <strong>{label}</strong>
      </Subheadline>
      <SlidingPanel />
    </Header>
  );
}

RoleBar.propTypes = {
  label: PropTypes.string.isRequired
};

export default RoleBar;
