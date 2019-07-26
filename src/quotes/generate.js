import unzip from 'lodash.unzip';
import isEmpty from 'lodash.isempty';

import { convertToDigits, convertToNickname } from './encode';
import { ROLES, PREFIX, PAST, FUTURE } from './quotes';

export function getQuoteFromID(role, action, quoteID) {
  const digits = convertToDigits(quoteID);
  if (isEmpty(digits)) {
    return;
  }
  const expressionsAndIndexes = getOptionsFromLeaf(role, action, PREFIX, ROLES);
  const expressions = expressionsAndIndexes.map((phrases, index) => phrases[digits[index] % phrases.length]).join(' ');

  return expressions;
}

export function getRandomQuoteID(role, action) {
  const [, quoteID] = getRandomQuoteAndID(role, action);

  return convertToNickname(quoteID);
}

function getOptionsFromLeaf(role, action, prefix, tree) {
  const roleLeaf = tree[role];
  const prefixLeaf = tree[prefix][action];
  // this order is not fluid and affects proper encoding, decoding
  const arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  return arrayOfExpressions;
}

function getRandomQuoteAndID(role, action) {
  const sampleAndIndex = items => {
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];

    return [item, index];
  };
  const expressionsAndIndexes = getOptionsFromLeaf(role, action, PREFIX, ROLES);
  const [expressions, index] = unzip(expressionsAndIndexes.map(sampleAndIndex));
  const expression = expressions.join(' ');

  return [expression, index];
}
