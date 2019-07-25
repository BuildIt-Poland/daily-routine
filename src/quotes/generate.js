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
  const expressionsAndIndexes = getOptionsFromLeaf(role, action, PREFIX, ROLES);
  const expressions = expressionsAndIndexes.map((phrases, index) => phrases[digits[index] % phrases.length]).join(' ');
  return expressions;
}

export function getRandomQuoteID(role, action) {
  const [, quoteID] = getRandomQuoteAndID(role, action);
  return convertToNickname(quoteID);
}

const getOptionsFromLeaf = (role, action, prefix, tree) => {
  const roleLeaf = tree[role];
  const prefixLeaf = tree[prefix][action];
  // this order is not fluid and affects proper encoding, decoding
  const arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];
  return arrayOfExpressions;
};

function getRandomQuoteAndID(role, action) {
  const sampleAndIndex = items => {
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];
    return [item, index];
  };
  const expressionsAndIndexes = getOptionsFromLeaf(role, action, PREFIX, ROLES);
  const [expressions, index] = unzip(expressionsAndIndexes.map(phrases => sampleAndIndex(phrases)));
  const expression = expressions.join(' ');
  return [expression, index];
}

// URL-NICKNAME ENCODING

// domain assumes [0] -> repeating group, [1] -> static group
const DOMAIN = [[ADVERBS, ADVERBS, ADJECTIVES], NOUNS];
const REPEATL = DOMAIN[0].length;

const getWordFromDomain = (digit, index, _, domain) =>
  index === 0 ? domain[1][digit] : domain[0][(REPEATL - index) % REPEATL][digit];
const getIntFromDomain = (word, index, _, domain) =>
  index === 0 ? domain[1].indexOf(word) : domain[0][(REPEATL - index) % REPEATL].indexOf(word);

const getWord = partialRight(getWordFromDomain, DOMAIN);
const getInt = partialRight(getIntFromDomain, DOMAIN);
const reduceEmptyOnNegative = (prev, item) => (item < 0 ? [] : isEqual(prev, []) ? [] : [].concat(prev, item));

function convertToDigits(nickname) {
  const words = nickname.split('-');
  // reversing twice to "mapRight"
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
