import {
  BRAG_VARIANT,
  CONFESS_VARIANT,
  FRONT_END_VARIANT,
  BACK_END_VARIANT,
  DEV_OPS_VARIANT,
  BASE_VARIANT
} from '../constants/colourVariants';

import {
  colorBlue,
  colorLightBlue,
  colorPurple,
  colorLightPurple,
  colorYellow,
  colorLightYellow,
  colorLightTeal,
  colorDarkBlue,
  colorDarkYellow,
  colorDeepPurple,
  colorGreen,
  darkGreen,
  colorRed,
  darkRed
} from '../styles/designTokens';

function generateColors(colourVariant) {
  const composeColors = (primaryColor, secondaryColor, tertiaryColor) => ({
    primaryColor,
    secondaryColor,
    tertiaryColor
  });

  const colorTheme = {
    [BRAG_VARIANT]: composeColors(colorGreen, colorGreen, darkGreen),
    [CONFESS_VARIANT]: composeColors(colorRed, colorRed, darkRed),
    [FRONT_END_VARIANT]: composeColors(colorLightYellow, colorYellow, colorDarkYellow),
    [BACK_END_VARIANT]: composeColors(colorLightPurple, colorPurple, colorDeepPurple),
    [DEV_OPS_VARIANT]: composeColors(colorLightBlue, colorBlue, colorDarkBlue),
    [BASE_VARIANT]: composeColors(colorLightTeal, colorLightTeal, colorLightTeal)
  };

  return colorTheme[colourVariant] || colorTheme[BASE_VARIANT];
}

export default generateColors;
