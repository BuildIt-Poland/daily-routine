import generateTheme from '../generateTheme';
import { FRONT_END_VARIANT, BACK_END_VARIANT, DEV_OPS_VARIANT } from '../../constants/coloursVariants';
import {
  colorLightTeal,
  colorLightYellow,
  colorYellow,
  colorLightPurple,
  colorPurple,
  colorLightBlue,
  colorBlue
} from '../../styles/designTokens';

describe('COMPONENT - LandingPage', () => {
  it('should return default color', () => {
    const expectedTheme = {
      primaryColor: colorLightTeal,
      secondaryColor: colorLightTeal
    };

    const theme = generateTheme('');

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for FRONT_END_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightYellow,
      secondaryColor: colorYellow
    };

    const theme = generateTheme(FRONT_END_VARIANT);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for BACK_END_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightPurple,
      secondaryColor: colorPurple
    };

    const theme = generateTheme(BACK_END_VARIANT);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for DEV_OPS_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightBlue,
      secondaryColor: colorBlue
    };

    const theme = generateTheme(DEV_OPS_VARIANT);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for unknown path', () => {
    const expectedTheme = {
      primaryColor: colorLightTeal,
      secondaryColor: colorLightTeal
    };

    const theme = generateTheme('/test');

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });
});
