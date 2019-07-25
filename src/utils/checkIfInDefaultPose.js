// Wheter character is in default pose or not

import { extractAction, extractQuoteID } from './extractFromPath';

function checkIfInDefaultPose(pathname) {
  return !extractAction(pathname) && !extractQuoteID(pathname);
}

export default checkIfInDefaultPose;
