import {
  colorBlue,
  colorLightBlue,
  colorPurple,
  colorLightPurple,
  colorYellow,
  colorLightYellow,
  colorLightTeal
} from './designTokens';
import { FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH, ROOT_PATH } from '../constants/routes';

function getColors(currentLocation) {
  const composeColors = (primaryColor, secondaryColor) => ({ primaryColor, secondaryColor });

  const colorTheme = {
    [FRONT_END_ROLE_PATH]: composeColors(colorLightYellow, colorYellow),
    [BACK_END_ROLE_PATH]: composeColors(colorLightPurple, colorPurple),
    [DEV_OPS_ROLE_PATH]: composeColors(colorLightBlue, colorBlue),
    [ROOT_PATH]: composeColors(colorLightTeal, colorLightTeal)
  };

  return colorTheme[currentLocation] || colorTheme[ROOT_PATH];
}

function generateTheme(currentLocation) {
  return {
    ...getColors(currentLocation)
  };
}

export default generateTheme;
