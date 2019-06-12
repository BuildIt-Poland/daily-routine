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

function generateTheme(currentLocation) {
  const getColorTheme = (primaryColor, secondaryColor) => ({
    primaryColor,
    secondaryColor
  });

  const colorTheme = {
    [FRONT_END_ROLE_PATH]: getColorTheme(colorLightYellow, colorYellow),
    [BACK_END_ROLE_PATH]: getColorTheme(colorLightPurple, colorPurple),
    [DEV_OPS_ROLE_PATH]: getColorTheme(colorLightBlue, colorBlue),
    [ROOT_PATH]: getColorTheme(colorLightTeal, colorLightTeal)
  };

  return colorTheme[currentLocation] || colorTheme[ROOT_PATH];
}

export default generateTheme;
