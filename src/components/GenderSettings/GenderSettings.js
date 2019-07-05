import React, { useContext } from 'react';

import { GenderContext } from '../../context/GenderContext';
import { MALE, FEMALE } from '../../constants/genders';
import RadioButton from './RadioButton';
import Wrapper from './Wrapper';
import Description from './Description';

function GenderSettings() {
  const { gender, handleGenderChange } = useContext(GenderContext);

  const onGenderChange = event => handleGenderChange(event.target.value);

  return (
    <>
      <Description>Gender</Description>
      <Wrapper>
        <RadioButton data-testid="male-button" value={MALE} checked={gender === MALE} onChange={onGenderChange}>
          Male
        </RadioButton>
        <RadioButton data-testid="female-button" value={FEMALE} checked={gender === FEMALE} onChange={onGenderChange}>
          Female
        </RadioButton>
      </Wrapper>
    </>
  );
}

export default GenderSettings;
