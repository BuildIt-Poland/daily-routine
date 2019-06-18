// Centralised type definitions for common cases

import { oneOf } from 'prop-types';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../constants/roles';
import { MALE, FEMALE } from '../constants/genders';
import { CONFIDENT, CONFUSED, SAD } from '../constants/characterMoods';

export const role = oneOf([FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE]);
export const gender = oneOf([MALE, FEMALE]);
export const mood = oneOf([CONFIDENT, CONFUSED, SAD]);
