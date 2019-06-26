import React, { useState } from 'react';

import { MALE, FEMALE } from '../../constants/genders';
import RadioButton from './RadioButton';
import Wrapper from './Wrapper';
import Description from './Description';

function GenderButton() {
  const [gender, setGender] = useState(MALE);

  const onGenderChange = event => setGender(event.target.value);

  return (
    <>
      <Description>Gender</Description>
      <Wrapper>
        <RadioButton value={MALE} checked={gender === MALE} onChange={onGenderChange}>
          Male
        </RadioButton>
        <RadioButton value={'TEST'} checked={gender === 'TEST'} onChange={onGenderChange}>
          Female
        </RadioButton>
        <RadioButton value={'TEST1'} checked={gender === 'TEST1'} onChange={onGenderChange}>
          Female
        </RadioButton>
        <RadioButton value={FEMALE} checked={gender === FEMALE} onChange={onGenderChange}>
          Female
        </RadioButton>
      </Wrapper>
    </>
  );
}

export default GenderButton;
