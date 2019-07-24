import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../constants/roles.js';
import { BRAG, CONFESS } from '../constants/roleActions.js';

const SUCCESS = BRAG;
const FAIL = CONFESS;
export const PAST = 'past';
export const FUTURE = 'future';
const DEVOPS = DEV_OPS_ROLE;
const BACKEND = BACK_END_ROLE;
const FRONTEND = FRONT_END_ROLE;
export const PREFIX = 'prefix';

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
      'I failed in having',
      'Failed to have',
      'I stand correct as I',
      'Yeterday I have unsuccessfully in having',
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
      'applied global csrf rules as a secret exposure dependency.',
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

export const ROLES = {
  [DEVOPS]: DEVOPS_LEAF,
  [BACKEND]: BACKEND_LEAF,
  [FRONTEND]: FRONTEND_LEAF,
  // keeping in one tree for better bookkeeping structure
  [PREFIX]: PREFIX_LEAF
};

export const ADVERBS = [
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

export const ADJECTIVES = [
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
export const NOUNS = [
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
