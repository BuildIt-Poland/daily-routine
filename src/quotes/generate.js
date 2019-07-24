import partialRight from 'lodash.partialright';
import unzip from 'lodash.unzip';
import isEmpty from 'lodash.isempty';
import isEqual from 'lodash.isequal';
import { ROLES, PREFIX, PAST, FUTURE, ADVERBS, ADJECTIVES, NOUNS } from './quotes';

export function getQuoteFromID(role, action, quoteID) {
  let digits = convertToDigits(quoteID);
  if (isEmpty(digits)) {
    return;
  }
  let [prefixPast, rolePast, prefixFuture, roleFuture] = digits;
  let roleLeaf = ROLES[role][action];
  let prefixLeaf = ROLES[PREFIX][action];

  // this order is not fluid and affects proper encoding, decoding, refactor by encoding this list
  let expressionIxs = [prefixPast, rolePast, prefixFuture, roleFuture];
  let arrayExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  let expressions = arrayExpressions
    // module is if we somehow run out of bounds, it should not happen, but it will map to something
    .map((phrases, ix) => phrases[expressionIxs[ix] % phrases.length])
    .join(' ');
  return expressions;
}

export function getRandomQuoteID(role, action) {
  let [, quoteID] = getRandomQuoteAndID(role, action);
  return convertToNickname(quoteID);
}

function getRandomQuoteAndID(role, action) {
  let roleLeaf = ROLES[role][action];
  let prefixLeaf = ROLES[PREFIX][action];

  // this order is not fluid and affects proper encoding, decoding, refactor by encoding this list
  let arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  let sample_and_ix = items => {
    // ix as string, to cover for 0
    let ix = Math.floor(Math.random() * items.length);
    let item = items[ix];
    return [item, ix];
  };

  let [expressions, ixs] = unzip(arrayOfExpressions.map(phrases => sample_and_ix(phrases)));
  let expression = expressions.join(' ');
  return [expression, ixs];
}

// URL-NICKNAME GENERATING
// we keep it decimal here

//domain assumes [0] -> repeating group, [1] -> static group
const DOMAIN = [[ADVERBS, ADVERBS, ADJECTIVES], NOUNS];
const REPEATL = DOMAIN[0].length;

let getWordFromDomain = (digit, ix, _, domain) =>
  ix === 0 ? domain[1][digit] : domain[0][(REPEATL - ix) % REPEATL][digit];
let getIntFromDomain = (word, ix, _, domain) =>
  ix === 0 ? domain[1].indexOf(word) : domain[0][(REPEATL - ix) % REPEATL].indexOf(word);

let getWord = partialRight(getWordFromDomain, DOMAIN);
let getInt = partialRight(getIntFromDomain, DOMAIN);
// if one of the indexes is 0, reduce to empty list (keep it a list for future chaining)
let reduceEmptyOnNegative = (prev, item) => (item < 0 ? [] : isEqual(prev, []) ? [] : [].concat(prev, item));

function convertToDigits(nickname) {
  let words = nickname.split('-');
  // reversing twice for processing without lazy generators
  let digits = words
    .reverse()
    .map((word, ix, words) => getInt(word, ix, words))
    .reverse()
    .reduce(reduceEmptyOnNegative);
  return digits;
}

function convertToNickname(digits) {
  // reversing twice for processing without lazy generators
  let nickName = digits
    .reverse()
    .map((item, ix, arr) => getWord(item, ix, arr))
    .reverse()
    .join('-');

  return nickName;
}
