import React, { useState, createContext } from 'react';

import { MALE } from '../constants/genders';

const GenderContext = createContext(MALE);
const { Provider } = GenderContext;

function GenderProvider({ children }) {
  const handleGenderChange = gender => setGender(gender);

  const [gender, setGender] = useState(MALE);

  return <Provider value={{ gender, handleGenderChange }}>{children}</Provider>;
}

export { GenderContext, GenderProvider };
