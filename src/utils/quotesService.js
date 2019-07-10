import sample from 'lodash.sample';

import { DEVOPS_BRAG, DEVOPS_CONFESS } from '../quotes/devOpsQuotes';
import { BACKEND_BRAG, BACKEND_CONFESS } from '../quotes/backEndQuotes';
import { FRONTEND_BRAG, FRONTEND_CONFESS } from '../quotes/frontEndQuotes';

import extractRoleFromPath from './extractRoleFromPath';
import extractActionFromPath from './extractActionFromPath';

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

export function getQuoteByUrl(url, quoteID) {
  const role = extractRoleFromPath(url);
  const action = extractActionFromPath(url);

  if (!role || !quoteID || !action) {
    return DEFAULT_QUOTE;
  }

  return roleQuotes[role][action][quoteID];
}

export function getRandomQuotesIDs(role) {
  const { brag, confess } = roleQuotes[role];

  return {
    bragQuoteID: sample(Object.keys(brag)),
    confessQuoteID: sample(Object.keys(confess))
  };
}
