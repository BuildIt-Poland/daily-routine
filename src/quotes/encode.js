import partialRight from 'lodash.partialright';
import isEqual from 'lodash.isequal';
import mod from 'mod-op';

import { ADVERBS, ADJECTIVES, NOUNS } from './nicknameParts';

// URL-NICKNAME ENCODING

// domain assumes [0] -> repeating group, [1] -> static group
const DOMAIN = [[ADVERBS, ADVERBS, ADJECTIVES], NOUNS];
const REPEATL = DOMAIN[0].length;

function getWordFromDomain(digit, index, _, domain) {
  return index === 0 ? domain[1][digit] : domain[0][mod(REPEATL - index, REPEATL)][digit];
}
function getIntFromDomain(word, index, _, domain) {
  return index === 0 ? domain[1].indexOf(word) : domain[0][mod(REPEATL - index, REPEATL)].indexOf(word);
}
const getWord = partialRight(getWordFromDomain, DOMAIN);
const getInt = partialRight(getIntFromDomain, DOMAIN);

function reduceEmptyOnNegative(prev, item) {
  if (item < 0 || isEqual(prev, [])) {
    return [];
  }

  return [].concat(prev, item);
}

export function convertToDigits(nickname) {
  const words = nickname.split('-');
  // reversing twice to "mapRight"
  const digits = words
    .reverse()
    .map(getInt)
    .reverse()
    .reduce(reduceEmptyOnNegative);

  return digits;
}

export function convertToNickname(digits) {
  // reversing twice for processing without lazy generators
  const nickName = digits
    .reverse()
    .map(getWord)
    .reverse()
    .join('-');

  return nickName;
}
