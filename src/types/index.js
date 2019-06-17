// Centralised type definitions for common cases

import { oneOf } from 'prop-types';

import { MALE, FEMALE } from '../constants/genders';
import { CONFIDENT, CONFUSED, SAD } from '../constants/characterMoods';

export const gender = oneOf([MALE, FEMALE]);
export const mood = oneOf([CONFIDENT, CONFUSED, SAD]);
