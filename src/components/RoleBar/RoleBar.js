import React from 'react';
import PropTypes from 'prop-types';

import Subheadline from '../Subheadline';
import SettingsTrigger from '../SettingsTrigger';
import Header from './Header';

function RoleBar({ label }) {
  return (
    <Header>
      <Subheadline>
        I am <strong>{label}</strong>
      </Subheadline>
      <SettingsTrigger />
    </Header>
  );
}

RoleBar.propTypes = {
  label: PropTypes.string.isRequired
};

export default RoleBar;
