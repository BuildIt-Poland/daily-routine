import { CONFESS, DEFAULT } from '../constants/roleActions';
import { getQuote } from './quotesService';
import extractActionFromPath from './extractActionFromPath';
import extractRoleFromPath from './extractRoleFromPath';
import extractQuoteIDFromPath from './extractQuoteIDFromPath';

function getPose(pathname) {
  const pose = extractActionFromPath(pathname);
  if (!pose) {
    return DEFAULT;
  }

  const role = extractRoleFromPath(pathname);
  const quoteID = extractQuoteIDFromPath(pathname);

  return !getQuote(role, pose, quoteID) ? CONFESS : pose;
}

export default getPose;
