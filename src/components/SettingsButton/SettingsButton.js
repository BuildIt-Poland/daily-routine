import React from 'react';
import PropTypes from 'prop-types';

import Gender from './Gender';
import Male from './Male';
import Female from './Female';
import Wrapper from './Wrapper';
import Text from './Text';
import Input from './Input';

function SettingsButton({ checked, onChange }) {
  return (
    <Wrapper>
      <Text>Gender</Text>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <Gender>
        <Male checked={checked}>Male</Male>
        <Female checked={checked}>Female</Female>
      </Gender>
    </Wrapper>
  );
}

SettingsButton.prototype = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SettingsButton;
