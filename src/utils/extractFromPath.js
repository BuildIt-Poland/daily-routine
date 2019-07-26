import { CONFESS, DEFAULT } from '../constants/roleActions';

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

export function extractPose(path, quote) {
  const pose = extractAction(path);
  if (!pose) {
    return DEFAULT;
  }

  return !quote ? CONFESS : pose;
}
