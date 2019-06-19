import React from 'react';
import PropTypes from 'prop-types';

import Subheadline from '../Subheadline';
import GearButton from './GearButton';
import Header from './Header';

function RoleBar({ label }) {
  return (
    <Header>
      <Subheadline>
        I am <strong>{label}</strong>
      </Subheadline>
      <GearButton />
    </Header>
  );
}

RoleBar.propTypes = {
  label: PropTypes.string.isRequired
};

export default RoleBar;
