import { CONFESS } from '../constants/roleActions';
import { getQuote } from './quotesService';
import extractActionFromPath from './extractActionFromPath';
import extractRoleFromPath from './extractRoleFromPath';
import extractQuoteIDFromPath from './extractQuoteIDFromPath';

export function getPose(pathname) {
  const pose = extractActionFromPath(pathname);
  if (!pose) {
    return undefined;
  }

  const role = extractRoleFromPath(pathname);
  const quoteID = extractQuoteIDFromPath(pathname);

  return !getQuote(role, pose, quoteID) ? CONFESS : pose;
}

export default getPose;
