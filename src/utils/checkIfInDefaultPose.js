// Wheter character is in default pose or not

import { extractAction, extractQuoteID } from './extractSomethingFromPath';

function checkIfInDefaultPose(pathname) {
  return !extractAction(pathname) && !extractQuoteID(pathname);
}

export default checkIfInDefaultPose;
