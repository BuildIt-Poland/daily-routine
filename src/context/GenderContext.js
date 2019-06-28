import { createContext } from 'react';

import { GENDER } from '../constants/genders';

const GenderContext = createContext({
  gender: localStorage.getItem(GENDER),
  onGenderChange: () => {}
});

export default GenderContext;
