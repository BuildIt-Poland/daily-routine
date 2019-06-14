import generateColors from '../utils/generateColors';
import extractRoleFromPath from './extractRoleFromPath';

function generateTheme(currentLocation) {
  const roleAsColorVariant = extractRoleFromPath(currentLocation.toLowerCase());

  return {
    ...generateColors(roleAsColorVariant)
  };
}

export default generateTheme;
