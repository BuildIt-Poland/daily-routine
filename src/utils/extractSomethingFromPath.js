import { CONFESS, DEFAULT } from '../constants/roleActions';
import { getQuote } from './quotesService';

export function extractAction(path) {
  return path.split('/')[2];
}

export function extractQuoteID(path) {
  return path.split('/')[3];
}

export function extractRole(path) {
  const match = path.match(/([^/]+)/);

  if (!match) {
    return;
  }

  return match[0];
}

export function extractPose(path) {
  const pose = extractAction(path);
  if (!pose) {
    return DEFAULT;
  }

  const role = extractRole(path);
  const quoteID = extractQuoteID(path);

  return !getQuote(role, pose, quoteID) ? CONFESS : pose;
}
