import generateColors from '../utils/generateColors';
import { extractRole } from './extractSomethingFromPath';

function generateTheme(currentLocation) {
  const role = extractRole(currentLocation);

  return {
    ...generateColors(role)
  };
}

export default generateTheme;
