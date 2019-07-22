// Centralised type definitions for common cases

import { oneOf, shape, string, func } from 'prop-types';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../constants/roles';
import { DEFAULT, BRAG, CONFESS } from '../constants/roleActions';
import { MALE, FEMALE } from '../constants/genders';
import { SPEECH, THOUGHT } from '../constants/speechBubbleVariant';

export const role = oneOf([FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE]);
export const gender = oneOf([MALE, FEMALE]);
export const pose = oneOf([DEFAULT, BRAG, CONFESS]);

export const theme = shape({
  primaryColor: string.isRequired,
  secondaryColor: string.isRequired
});

export const location = shape({
  pathname: string.isRequired,
  hash: string.isRequired,
  key: string,
  search: string
});
export const history = shape({
  location: location.isRequired,
  push: func.isRequired
});

export const speechBubbleVariant = oneOf([SPEECH, THOUGHT]);
