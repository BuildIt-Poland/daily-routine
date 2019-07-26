import unzip from 'lodash.unzip';
import isEmpty from 'lodash.isempty';

import { convertToDigits, convertToNickname } from './encode';
import { PHRASES, PREFIX, PAST, FUTURE } from './quotes';

export function getQuoteFromID(role, action, quoteID) {
  if (typeof quoteID != 'string') {
    return;
  }

  const digits = convertToDigits(quoteID);
  if (isEmpty(digits)) {
    return;
  }

  const expressionsAndIndexes = getOptions(role, action);
  if (!expressionsAndIndexes) {
    return;
  }

  const expressions = expressionsAndIndexes.map((phrases, index) => phrases[digits[index] % phrases.length]).join(' ');

  return expressions;
}

export function getRandomQuoteID(role, action) {
  // eslint-disable-next-line
  const [_, quoteID] = getRandomQuoteAndID(role, action);

  return convertToNickname(quoteID);
}

function getOptions(role, action) {
  const roleLeaf = PHRASES[role];
  const prefixLeaf = PHRASES[PREFIX][action];
  // this order is not fluid and affects proper encoding, decoding
  const arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];
  if (arrayOfExpressions.includes(undefined)) {
    return;
  }
  return arrayOfExpressions;
}

function getRandomQuoteAndID(role, action) {
  const sampleAndIndex = items => {
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];

    return [item, index];
  };
  const expressionsAndIndexes = getOptions(role, action);
  const [expressions, index] = unzip(expressionsAndIndexes.map(sampleAndIndex));
  const expression = expressions.join(' ');

  return [expression, index];
}
