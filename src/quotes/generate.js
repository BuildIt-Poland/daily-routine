// import _ from "lodash";
let _ = require('lodash');

const SUCCESS = 'success';
const FAIL = 'fail';
const PAST = 'past';
const FUTURE = 'future';
const DEVOPS = 'devops';
const BACKEND = 'backend';
const FRONTEND = 'frontend';
const PREFIX = 'prefix';

// kindof hackish providing enums via array indexing
// something here should be used to collapse binary paths
// to more congested numbers for example: 2018 -> 178
const PATH_PARTS = [[DEVOPS, BACKEND, FRONTEND], [SUCCESS, FAIL]];

// encode path as root_number, currently 0-6
// matching pattern for instance 5 -> rootnum , 4345 -> pattern elemnts
// this is lightly enforced by decimal system currently, but should be flexible till 35-ary system

let cartesian_merge = (a, b) => a.map(x => b.map(y => [].concat(x, y))).flat();
// static cartesian product required if we need to keep links consistent across updates
// order is important
let cartesian = (a, b, ...c) => (b ? cartesian(cartesian_merge(a, b), ...c) : a);

const PATHS = cartesian(...PATH_PARTS);

// const ENCODING_ARRITY = PATHS.length;
// considering building assert mechanism for (1 < ENCODING_ARRITY < 36)
// this is a list of all possible paths, order is important

// Still consider this experimental
// ORDER HERE MATTERS, ALWAYS ADD AT THE END
const PREFIX_LEAF = {
  [SUCCESS]: {
    [PAST]: [
      'Yesterday I finally',
      'I have managed and',
      'At last I have',
      'Happy to state, I have',
      'I have managed to finish',
      'Finally it worked! I have'
    ],
    [FUTURE]: [
      'Now I can',
      'At last I can',
      'This unlocked me to have',
      'Today I will,',
      'Will continue to',
      'Plan to further'
    ]
  },
  [FAIL]: {
    [FUTURE]: [
      'My current approach is to',
      'Now I will',
      'Today, I will reapproach to',
      'I will try hard to',
      'Today, plan to continue to',
      'Hopefully today, '
    ],
    [PAST]: [
      'Sadly yesterday I',
      'I was unable to',
      'Failing to',
      'I got humbled by',
      'Yeterday I have unsuccessfully',
      "Sadly I havn't "
    ]
  }
};

const DEVOPS_LEAF = {
  [SUCCESS]: {
    [PAST]: [
      'completed fixing ingress path aliasing in periodically scheduled jobs.',
      'runned a successful migration of skew-library for node annotations.',
      'decoupled intermediete layers of web-proxify-echo container to lessen in-memory footprints.'
    ],
    [FUTURE]: [
      'reapply to reapply context recapture for discarded jobs.',
      'reevaluate distributed label state synchronisation for running pods.',
      'verify if Jenkins pipeline flows operate respecting new image build scenarios.'
    ]
  },
  [FAIL]: {
    [PAST]: [
      'failed to apply global csrf rules as a secret exposure dependency.',
      'debuged pods health probes resolution in prometheus namespace.',
      'set missing routing multiplication for seconadry VLAN gateway hops.'
    ],
    [FUTURE]: [
      'verify Ansible output of the concatantion to diagnose FAILed ruling file.',
      'resolve issues related to namespace targetting as a potentional roadblock.',
      'reestablish the routing table disparities to resolve hop debounces.'
    ]
  }
};

const BACKEND_LEAF = {
  [SUCCESS]: {
    [PAST]: [
      'finished throwing atomicized errors in nonPAST conditions.',
      'refactored module switching scheduler affinities for dereferenced items.',
      'redfined Actor methods signatures for HTTP state tracking.'
    ],
    [FUTURE]: [
      'reevaluate application of RESNET120 deep neural network for log data analysis.',
      'restore conditionals for inferior module uploads ad-hoc.',
      'derefence FAILed requests mid Redis session sustaining.'
    ]
  },
  [FAIL]: {
    [PAST]: [
      'obtain race condition debugging scopes in inner maintainer loops.',
      'collapsed curried parameters in Retry Monad Transformers.',
      'reintegrated database schema validation dynamic libraries.'
    ],
    [FUTURE]: [
      'reread and reason on debugger flip states.',
      'try mapping applicative switchers to recover from runtime errors.',
      'configure the managment chaining of query structures.'
    ]
  }
};

const FRONTEND_LEAF = {
  [SUCCESS]: {
    [PAST]: ['dummy'],
    [FUTURE]: ['dummy']
  },
  [FAIL]: {
    [PAST]: ['dummy'],
    [FUTURE]: ['dummy']
  }
};

const ROLES = {
  [DEVOPS]: DEVOPS_LEAF,
  [BACKEND]: BACKEND_LEAF,
  [FRONTEND]: FRONTEND_LEAF,
  // keeping in one tree for better bookkeeping structure
  [PREFIX]: PREFIX_LEAF
};

function _getQuoteFromNum(number) {
  let [roleIx, prefixPast, rolePast, prefixFuture, roleFuture, ..._] = number.toString().split('');
  let [role, kind] = PATHS[roleIx];

  let roleLeaf = ROLES[role][kind];
  let prefixLeaf = ROLES[PREFIX][kind];

  // this order is not fluid and affects proper encoding, decoding, it can be refactored
  // by encoding this order, yeah i know :)
  let samplePositions = [prefixPast, rolePast, prefixFuture, roleFuture];

  let arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];
  let expressions = arrayOfExpressions.map(
    // module is if we somehow run out of bounds, it should not happen, but it will map to something
    (phrases, ix) => phrases[samplePositions[ix] % phrases.length]
  );
  return expressions;
}

function _getQuote(role, kind) {
  //let role_ix = PATHS.indexOf([role, kind]);
  let roleMatch = _.partial(_.isEqual, [role, kind]);
  let role_ix = PATHS.findIndex(roleMatch);

  let roleLeaf = ROLES[role][kind];
  let prefixLeaf = ROLES[PREFIX][kind];

  // this order is not fluid and affects proper encoding, decoding, it can be refactored
  // by encoding this order, yeah i know :)
  let arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];

  let sample_and_ix = items => {
    let ix = Math.floor(Math.random() * items.length);
    let item = items[ix];
    return [item, ix];
  };
  let [expressions, ixs] = _.unzip(arrayOfExpressions.map(phrases => sample_and_ix(phrases)));
  let expression = expressions.join(' ');

  return [expression, parseInt([role_ix, ...ixs].join(''))];
}

// nickname generating
// we keep it decimal here
const adverbs = [
  'neatly',
  'uncleanly',
  'bluntly',
  'trivially',
  'bravely',
  'spirtually',
  'so',
  'lazily',
  'ruthlessly',
  'eagerly'
];

const adjectives = [
  'abusive',
  'leaking',
  'reverting',
  'raginng',
  'ample',
  'admirable',
  'arctic',
  'corny',
  'dense',
  'feisty'
];
const nouns = [
  'boxer',
  'walrus',
  'trickster',
  'typist',
  'kidoh',
  'soul',
  'minion',
  'telegraph',
  'painter',
  'jungleboy'
];

let DOMAIN = [[adverbs, adjectives], nouns];
let getWordFromDomain = (digit, ix, num_arr, domain) => (ix === 0 ? domain[1][digit] : domain[0][ix % 2][digit]);

let getIntFromDomain = (word, ix, words, domain) =>
  ix == 0 ? domain[1].indexOf(word) : domain[0][ix % 2].indexOf(word);

let getWord = _.partialRight(getWordFromDomain, DOMAIN);
let getInt = _.partialRight(getIntFromDomain, DOMAIN);

function _convertToNumber(nickname) {
  let words = nickname.split('-');
  // reversing twice for processing without lazy generators
  let number = parseInt(
    words
      .reverse()
      .map((word, ix, words) => getInt(word, ix, words))
      .reverse()
      .join('')
  );
  return number;
}

function _convertToNickname(number_key) {
  let digits = number_key
    .toString()
    .split('')
    .map(num => parseInt(num));
  // reversing twice for processing without lazy generators
  let nickName = digits
    .reverse()
    .map((item, ix, arr) => getWord(item, ix, arr))
    .reverse()
    .join('-');

  return nickName;
}
