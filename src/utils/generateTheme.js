import generateColors from '../utils/generateColors';
import extractRoleFromPath from './extractRoleFromPath';

function generateTheme(currentLocation) {
  const role = extractRoleFromPath(currentLocation);

  return {
    ...generateColors(role)
  };
}

export default generateTheme;
