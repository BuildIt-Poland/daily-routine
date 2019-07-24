import * as generate from '../quotes/generate.js';

export const DEFAULT_QUOTE = "Daily in 5 minutes and I'm still not sure what to say...";

export function getQuote(role, action, quoteID) {
  if (!role || !quoteID || !action) {
    return DEFAULT_QUOTE;
  }
  return generate.getQuoteFromID(role, action, quoteID);
}

export function getRandomQuoteID(role, action) {
  return generate.getRandomQuoteID(role, action);
}
