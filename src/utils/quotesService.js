import sample from 'lodash.sample';

import { DEVOPS_BRAG, DEVOPS_CONFESS } from '../quotes/devOpsQuotes';
import { BACKEND_BRAG, BACKEND_CONFESS } from '../quotes/backEndQuotes';
import { FRONTEND_BRAG, FRONTEND_CONFESS } from '../quotes/frontEndQuotes';

const DEFAULT_QUOTE = "Daily in 5 minutes and I'm still not sure what to say...";

const roleQuotes = {
  devops: {
    brag: DEVOPS_BRAG,
    confess: DEVOPS_CONFESS
  },
  backend: {
    brag: BACKEND_BRAG,
    confess: BACKEND_CONFESS
  },
  frontend: {
    brag: FRONTEND_BRAG,
    confess: FRONTEND_CONFESS
  }
};

export function getQuote(role, action, quoteID) {
  if (!role || !quoteID || !action) {
    return DEFAULT_QUOTE;
  }

  return roleQuotes[role][action][quoteID];
}

export function getRandomQuoteID(role, action) {
  return sample(Object.keys(roleQuotes[role][action]));
}
