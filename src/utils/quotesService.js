import { getRandomQuoteID as generateQuoteID, getQuoteFromID } from '../quotes/generate.js';

export const DEFAULT_QUOTE = "Daily in 5 minutes and I'm still not sure what to say...";

export function getQuote(role, action, quoteID) {
  if (!role || !quoteID || !action) {
    return DEFAULT_QUOTE;
  }
  return getQuoteFromID(role, action, quoteID);
}

export function getRandomQuoteID(role, action) {
  return generateQuoteID(role, action);
}
