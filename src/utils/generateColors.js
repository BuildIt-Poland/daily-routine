import {
  BRAG_VARIANT,
  CONFESS_VARIANT,
  FRONT_END_VARIANT,
  BACK_END_VARIANT,
  DEV_OPS_VARIANT
} from '../constants/coloursVariants';

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
    [DEV_OPS_VARIANT]: composeColors(colorLightBlue, colorBlue, colorDarkBlue)
  };

  return colorTheme[colourVariant] || composeColors(colorLightTeal, colorLightTeal, colorLightTeal);
}

export default generateColors;
