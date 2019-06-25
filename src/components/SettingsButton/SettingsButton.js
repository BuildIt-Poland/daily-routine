import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MALE, FEMALE } from '../../constants/genders';
import { fontWeightBold } from '../../styles/designTokens';
import RadioOption from './RadioOption';
import RadioGroup from './RadioGroup';
import MaleRadioLabel from './MaleRadioLabel';
import FemaleRadioLabel from './FemaleRadioLabel';

const Label = styled.label`
  font-weight: ${fontWeightBold};
`;

function SettingsButton({ gender, onChange }) {
  return (
    <div>
      <Label>Gender</Label>
      <RadioGroup>
        <RadioOption id="male-option" type="radio" value={MALE} checked={gender === MALE} onChange={onChange} />
        <MaleRadioLabel htmlFor="male-option">Male</MaleRadioLabel>
        <RadioOption id="female-option" type="radio" value={FEMALE} checked={gender === FEMALE} onChange={onChange} />
        <FemaleRadioLabel htmlFor="female-option"> Female</FemaleRadioLabel>
      </RadioGroup>
    </div>
  );
}

SettingsButton.prototype = {
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SettingsButton;
