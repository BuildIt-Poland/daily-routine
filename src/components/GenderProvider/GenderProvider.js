import React, { useState } from 'react';

import GenderContext from '../../context/GenderContext';
import { MALE } from '../../constants/genders';

const GenderProvider = ({ children }) => {
  const onGenderChange = ({ target }) =>
    setGender(prevState => ({
      ...prevState,
      gender: target.value
    }));

  const genderState = {
    gender: MALE,
    onGenderChange
  };

  const [gender, setGender] = useState(genderState);

  return <GenderContext.Provider value={gender}>{children}</GenderContext.Provider>;
};

export default GenderProvider;
