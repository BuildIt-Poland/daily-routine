// Wheter character is in default pose or not

import extractActionFromPath from './extractActionFromPath';
import extractQuoteIDFromPath from './extractQuoteIDFromPath';

function checkIfInDefaultPose(pathname) {
  return !extractActionFromPath(pathname) && !extractQuoteIDFromPath(pathname);
}

export default checkIfInDefaultPose;
