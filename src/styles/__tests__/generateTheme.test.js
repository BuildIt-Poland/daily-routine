import generateTheme from '../generateTheme';
import { ROOT_PATH, FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH } from '../../constants/routes';
import {
  colorLightTeal,
  colorLightYellow,
  colorYellow,
  colorLightPurple,
  colorPurple,
  colorLightBlue,
  colorBlue
} from '../designTokens';

describe('COMPONENT - LandingPage', () => {
  it('should return default color theme for ROOT_PATH', () => {
    const expectedTheme = {
      primaryColor: colorLightTeal,
      secondaryColor: colorLightTeal
    };

    const theme = generateTheme(ROOT_PATH);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for FRONT_END_ROLE_PATH', () => {
    const expectedTheme = {
      primaryColor: colorLightYellow,
      secondaryColor: colorYellow
    };

    const theme = generateTheme(FRONT_END_ROLE_PATH);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for BACK_END_ROLE_PATH', () => {
    const expectedTheme = {
      primaryColor: colorLightPurple,
      secondaryColor: colorPurple
    };

    const theme = generateTheme(BACK_END_ROLE_PATH);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for DEV_OPS_ROLE_PATH', () => {
    const expectedTheme = {
      primaryColor: colorLightBlue,
      secondaryColor: colorBlue
    };

    const theme = generateTheme(DEV_OPS_ROLE_PATH);

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
