import { createContext } from 'react';

import { MALE } from '../constants/genders';

const GenderContext = createContext({
  gender: MALE,
  onGenderChange: () => {}
});

export default GenderContext;
