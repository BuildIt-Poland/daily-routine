import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { MALE } from '../constants/genders';
import useLocalStorage from '../hooks/useLocalStorage';

const GenderContext = createContext();
const { Provider } = GenderContext;

const GENDER_LOCAL_STORAGE_KEY = 'DAILY_ROUTINE_GENDER';

function GenderProvider({ children }) {
  const [gender, setGender] = useLocalStorage(GENDER_LOCAL_STORAGE_KEY, MALE);

  const handleGenderChange = gender => setGender(gender);

  return <Provider value={{ gender, handleGenderChange }}>{children}</Provider>;
}

GenderProvider.propTypes = {
  children: PropTypes.node
};

export { GenderContext, GenderProvider };
