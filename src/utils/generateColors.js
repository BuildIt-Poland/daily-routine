import { BRAG, CONFESS, FRONT_END, BACK_END, DEV_OPS } from '../constants/buttonVariants';
import {
  colorPurple,
  colorDeepPurple,
  colorYellow,
  colorDarkYellow,
  colorBlue,
  colorDarkBlue,
  colorGreen,
  darkGreen,
  colorRed,
  darkRed
} from '../styles/designTokens';

function generateColors(buttonVariant) {
  const composeColors = (backgroundColor, borderBottomColor) => ({ backgroundColor, borderBottomColor });

  const buttonColors = {
    [BRAG]: composeColors(colorGreen, darkGreen),
    [CONFESS]: composeColors(colorRed, darkRed),
    [FRONT_END]: composeColors(colorYellow, colorDarkYellow),
    [BACK_END]: composeColors(colorPurple, colorDeepPurple),
    [DEV_OPS]: composeColors(colorBlue, colorDarkBlue)
  };

  return buttonColors[buttonVariant] || buttonColors[FRONT_END];
}

export default generateColors;
