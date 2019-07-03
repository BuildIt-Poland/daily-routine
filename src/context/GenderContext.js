import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { MALE, GENDER } from '../constants/genders';
import useLocalStorage from '../hooks/useLocalStorage';

const GenderContext = createContext();
const { Provider } = GenderContext;

function GenderProvider({ children }) {
  const handleGenderChange = gender => setGender(gender);

  const [gender, setGender] = useLocalStorage(GENDER, MALE);

  return <Provider value={{ gender, handleGenderChange }}>{children}</Provider>;
}

GenderProvider.propTypes = {
  children: PropTypes.node
};

export { GenderContext, GenderProvider };
