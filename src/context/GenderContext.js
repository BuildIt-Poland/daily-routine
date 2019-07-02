import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import { MALE } from '../constants/genders';

const GenderContext = createContext();
const { Provider } = GenderContext;

function GenderProvider({ children }) {
  const handleGenderChange = gender => setGender(gender);

  const [gender, setGender] = useState(MALE);

  return <Provider value={{ gender, handleGenderChange }}>{children}</Provider>;
}

GenderProvider.propTypes = {
  children: PropTypes.node
};

export { GenderContext, GenderProvider };
