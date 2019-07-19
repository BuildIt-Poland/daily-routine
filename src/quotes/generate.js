const success = 'success';
const fail = 'fail';
const past = 'past';
const future = 'future';
const devops = 'devops';
const backend = 'backend';
const frontend = 'frontend';

// Still consider this experimental
const PREFIX = {
  [success]: {
    [past]: [
      'Yesterday I finally ',
      'I have managed to "complete": ',
      'At last I have ',
      'Happy to state, I have ',
      'I have managed to finish ',
      'Finally it worked! I have '
    ],
    [future]: [
      'Now I can ',
      'At last I can ',
      'This unlocked me to have ',
      'Today I will, ',
      'Will continue to ',
      'Plan to further '
    ]
  },
  [fail]: {
    [past]: [
      'My current approach is to ',
      'Now I will ',
      'Today, I will reapproach to ',
      'I will try hard at ',
      'Today, plan to continue to ',
      'Hopefully today, '
    ],
    [future]: [
      'Sadly yesterday I ',
      'I was unable to ',
      'Failing to ',
      'I got humbled by inability to',
      'Yeterday I have unsuccessfully ',
      "Sadly I havn't "
    ]
  }
};

const DEVOPS = {
  [success]: {
    [past]: [
      'completed fixing ingress path aliasing in periodically scheduled jobs. ',
      'runned a successful migration of skew-library for node annotations. ',
      'decoupled intermediete layers of web-proxify-echo container to lessen in-memory footprints. '
    ],
    [future]: [
      'reapply to reapply context recapture for discarded jobs.',
      'reevaluate distributed label state synchronisation for running pods.',
      'verify if Jenkins pipeline flows operate respecting new image build scenarios.'
    ]
  },
  [fail]: {
    [past]: [
      'failed to apply global csrf rules as a secret exposure dependency. ',
      'debuged pods health probes resolution in prometheus namespace. ',
      'set missing routing multiplication for seconadry VLAN gateway hops. '
    ],
    [future]: [
      'verify Ansible output of the concatantion to diagnose failed ruling file.',
      'resolve issues related to namespace targetting as a potentional roadblock.',
      'can reestablish the routing table disparities to resolve hop debounces.'
    ]
  }
};

const BACKEND = {
  [success]: {
    [past]: [
      'finished throwing atomicized errors in nonpast conditions. ',
      'refactored module switching scheduler affinities for dereferenced items. ',
      'redfined Actor methods signatures for HTTP state tracking. '
    ],
    [future]: [
      'reevaluate application of RESNET120 deep neural network for log data analysis.',
      'restore conditionals for inferior module uploads ad-hoc.',
      'derefence failed requests mid Redis session sustaining.'
    ]
  },
  [fail]: {
    [past]: [
      'obtain race condition debugging scopes in inner maintainer loops. ',
      'collapsed curried parameters in Retry Monad Transformers. ',
      'reintegrated database schema validation dynamic libraries. '
    ],
    [future]: [
      'reread and reason on debugger flip states.',
      'try mapping applicative switchers to recover from runtime errors.',
      'configure the managment chaining of query structures.'
    ]
  }
};

const FRONTEND = {
  [success]: {
    [past]: ['dummy'],
    [future]: ['dummy']
  },
  [fail]: {
    [past]: ['dummy'],
    [future]: ['dummy']
  }
};

const ROLES = {
  [devops]: DEVOPS,
  [backend]: BACKEND,
  [frontend]: FRONTEND
};

function pickRandom(exprArray) {
  let rand = len => Math.floor(Math.random() * len);
  return exprArray[rand(exprArray.length)];
}

function _getQuote(role, kind) {
  var role_leaf = ROLES[role][kind];
  var prefix_leaf = PREFIX[kind];
  var arrayOfExpressions = [prefix_leaf[past], role_leaf[past], prefix_leaf[future], role_leaf[future]];
  var expressions = arrayOfExpressions.map(pickRandom).join(' $$ ');
  return expressions;
}
