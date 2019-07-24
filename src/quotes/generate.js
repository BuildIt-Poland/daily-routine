import partialRight from 'lodash.partialright';
import unzip from 'lodash.unzip';
import isEmpty from 'lodash.isempty';
import isEqual from 'lodash.isequal';
import { ROLES, PREFIX, PAST, FUTURE, ADVERBS, ADJECTIVES, NOUNS } from './quotes';

export function getQuoteFromID(role, action, quoteID) {
  const digits = convertToDigits(quoteID);
  if (isEmpty(digits)) {
    return;
  }
  const [prefixPast, rolePast, prefixFuture, roleFuture] = digits;
  const roleLeaf = ROLES[role][action];
  const prefixLeaf = ROLES[PREFIX][action];

  // this order is not fluid and affects proper encoding, decoding, refactor by encoding this list
  const expressionIndexes = [prefixPast, rolePast, prefixFuture, roleFuture];
  const arrayExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  const expressions = arrayExpressions
    // module is if we somehow run out of bounds, it should not happen, but it will map to something
    .map((phrases, index) => phrases[expressionIndexes[index] % phrases.length])
    .join(' ');
  return expressions;
}

export function getRandomQuoteID(role, action) {
  const [, quoteID] = getRandomQuoteAndID(role, action);
  return convertToNickname(quoteID);
}

function getRandomQuoteAndID(role, action) {
  const roleLeaf = ROLES[role][action];
  const prefixLeaf = ROLES[PREFIX][action];

  // this order is not fluid and affects proper encoding, decoding, refactor by encoding this list
  const arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  const sampleAndIndex = items => {
    // index as string, to cover for 0
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];
    return [item, index];
  };

  const [expressions, index] = unzip(arrayOfExpressions.map(phrases => sampleAndIndex(phrases)));
  const expression = expressions.join(' ');
  return [expression, index];
}

// URL-NICKNAME GENERATING
// we keep it decimal here

//domain assumes [0] -> repeating group, [1] -> static group
const DOMAIN = [[ADVERBS, ADVERBS, ADJECTIVES], NOUNS];
const REPEATL = DOMAIN[0].length;

const getWordFromDomain = (digit, index, _, domain) =>
  index === 0 ? domain[1][digit] : domain[0][(REPEATL - index) % REPEATL][digit];
const getIntFromDomain = (word, index, _, domain) =>
  index === 0 ? domain[1].indexOf(word) : domain[0][(REPEATL - index) % REPEATL].indexOf(word);

const getWord = partialRight(getWordFromDomain, DOMAIN);
const getInt = partialRight(getIntFromDomain, DOMAIN);
// if one of the indexes is 0, reduce to empty list (keep it a list for future chaining)
const reduceEmptyOnNegative = (prev, item) => (item < 0 ? [] : isEqual(prev, []) ? [] : [].concat(prev, item));

function convertToDigits(nickname) {
  const words = nickname.split('-');
  // reversing twice for processing without lazy generators
  const digits = words
    .reverse()
    .map((word, index, words) => getInt(word, index, words))
    .reverse()
    .reduce(reduceEmptyOnNegative);
  return digits;
}

function convertToNickname(digits) {
  // reversing twice for processing without lazy generators
  const nickName = digits
    .reverse()
    .map((item, index, arr) => getWord(item, index, arr))
    .reverse()
    .join('-');

  return nickName;
}
