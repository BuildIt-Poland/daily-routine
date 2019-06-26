import React from 'react';
import PropTypes from 'prop-types';

import { MALE, FEMALE } from '../../constants/genders';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';
import Text from './Text';
import Form from './Form';

function SettingsButton({ gender, onChange }) {
  return (
    <Form>
      <Text>Gender</Text>
      <RadioButtonGroup>
        <RadioButton value={MALE} checked={gender === MALE} onChange={onChange}>
          Male
        </RadioButton>
        <RadioButton value={FEMALE} checked={gender === FEMALE} onChange={onChange}>
          Female
        </RadioButton>
      </RadioButtonGroup>
    </Form>
  );
}

SettingsButton.prototype = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SettingsButton;
