import React, { useState } from 'react';

import GenderContext from '../../context/GenderContext';
import { GENDER } from '../../constants/genders';

const GenderProvider = ({ children }) => {
  const onGenderChange = ({ target }) => {
    localStorage.setItem(GENDER, target.value);
    setGender(prevState => ({
      ...prevState,
      gender: localStorage.getItem(GENDER)
    }));
  };

  const genderState = {
    gender: localStorage.getItem(GENDER),
    onGenderChange
  };

  const [gender, setGender] = useState(genderState);

  return <GenderContext.Provider value={gender}>{children}</GenderContext.Provider>;
};

export default GenderProvider;
