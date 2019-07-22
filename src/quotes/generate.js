import _ from "lodash";

const SUCCESS = 'success';
const FAIL = 'fail';
const PAST = 'past';
const FUTURE = 'future';
const DEVOPS = 'devops';
const BACKEND = 'backend';
const FRONTEND = 'frontend';

// Still consider this experimental
// ORDER HERE MATTERS, ALWAYS ADD AT THE END
const PREFIX = {
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
  [FRONTEND]: FRONTEND_LEAF
};

function _getQuote(role, kind) {
  let roleLeaf = ROLES[role][kind];
  let prefixLeaf = PREFIX[kind];
  let arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];
  let expressions = arrayOfExpressions.map(sample).join(' ');
  return expressions;
}


function _convertToNumber(nickname){
  words = nickname.split("-")

}


// it is not the most
function _convertToNickname(number_key){
  // seeds need to be in 10
  const adverbs = [
    "neatly", "uncleanly", "bluntly", "trivially", "bravely",
    "spirtually", "so", "lazily", "ruthlessly", "eagerly"
  ];
  // const supp = [
  //   "somewhat", "kindof", "likea", "moreso", "en"
  // ]
  const adjectives = [
    "abusive", "leaking", "reverting", "unapologetic", "raginng",
    "ample", "admirable", "arctic", "corny", "dense", "feisty"
  ];
  const nouns = [
    "boxer", "walrus", "trickster", "typist", "kidoh",
    "soul", "minion", "telegraph", "painter", "jungleboy"
  ];

  // formation flipped here for easier module
  let formation = [[adverbs, adjectives], nouns];

  let lazy_binary = function* () {
    let x = 0;
    while(true) { x = (x+1) % 2; yield x; }
  }

  function getDomainWithFormation(item, ix, items, formation, lazy_gen){
    let l = lazy_gen
    return ix === items.length - 1
           ? formation[1][item]
           : formation[0][l.next().value][item];
  }
  let l = lazy_binary()
  let getWord = _.partialRight(getDomainWithFormation, formation, l)
  let digits = number_key.toString().split("").map(num => parseInt(num));

  let nickName = digits.map(
      (item, ix, arr) => getWord(item, ix, arr)
    ).join("-")
    ;
  return nickName;

}
