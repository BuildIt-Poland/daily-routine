import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { MALE, FEMALE } from '../../constants/genders';
import RadioButton from './RadioButton';
import Wrapper from './Wrapper';
import Description from './Description';

function GenderSettings() {
  const { gender, onGenderChange } = useContext(GenderContext);

  return (
    <>
      <Description>Gender</Description>
      <Wrapper>
        <RadioButton value={MALE} checked={gender === MALE} onChange={onGenderChange}>
          Male
        </RadioButton>
        <RadioButton value={FEMALE} checked={gender === FEMALE} onChange={onGenderChange}>
          Female
        </RadioButton>
      </Wrapper>
    </>
  );
}

export default GenderSettings;
