import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../constants/roles';
import { BRAG, CONFESS } from '../constants/roleActions';

export const PAST = 'past';
export const FUTURE = 'future';
export const PREFIX = 'prefix';
export const ROLES = 'roles';

// ORDER HERE MATTERS, ALWAYS ADD AT THE END
const PREFIX_QUOTES = {
  [BRAG]: {
    [PAST]: [
      'Yesterday I finally',
      'I have managed and',
      'At last, I',
      'Happy to state, I have',
      'I had a great day and',
      'Finally it worked! I have'
    ],
    [FUTURE]: [
      'Now I can',
      'At last I can',
      'This unlocked me to',
      'Today I will,',
      'I will continue to',
      'I am planning to further'
    ]
  },
  [CONFESS]: {
    [FUTURE]: [
      'My current approach is to',
      'Now I will',
      'Today, I will retry to',
      'I will try hard to',
      'Today, I plan to continue to',
      'Hopefully today I will,'
    ],
    [PAST]: [
      'Sadly yesterday I have not',
      'I failed in having',
      'Failed to have',
      'I stand correct as I',
      'Yesterday I failed and have not',
      "Sadly I haven't "
    ]
  }
};

const DEVOPS_QUOTES = {
  [PAST]: [
    'completed fixing ingress path aliasing in periodically scheduled jobs.',
    'launched a successful migration of skew-library for node annotations.',
    'decoupled intermediate layers of web-proxify-echo container to lessen in-memory footprints.',
    'applied global csrf rules as a secret exposure dependency.',
    'debugged pods health probes resolution in prometheus namespace.',
    'set missing routing multiplication for secondary VLAN gateway hops.'
  ],
  [FUTURE]: [
    'reapply to reapply context recapture for discarded jobs.',
    'reevaluate distributed label state synchronization for running pods.',
    'verify if Jenkins pipeline flows operate respecting new image build scenarios.',
    'verify Ansible output of the concatenation to diagnose failed ruling file.',
    'resolve issues related to namespace targeting as a potential roadblock.',
    'reestablish the routing table disparities to resolve hop debounces.'
  ]
};

const BACKEND_QUOTES = {
  [PAST]: [
    'finished throwing atomicized errors in nonpast conditions.',
    'refactored module switching scheduler affinities for dereferenced items.',
    'redfined Actor methods signatures for HTTP state tracking.',
    'obtained race condition debugging scopes in inner maintainer loops.',
    'collapsed curried parameters in Retry Monad Transformers.',
    'reintegrated database schema validation dynamic libraries.'
  ],
  [FUTURE]: [
    'reevaluate application of RESNET120 deep neural network for log data analysis.',
    'restore conditionals for inferior module uploads ad-hoc.',
    'derefence failed requests mid Redis session sustaining.',
    'reread and reason on debugger flip states.',
    'try mapping applicative switchers to recover from runtime errors.',
    'configure the managment chaining of query structures.'
  ]
};

const FRONTEND_QUOTES = {
  [PAST]: [
    'repopulated bundling dependencies in repository structures. ',
    'concretized treeshakeing entities in unportable packages.',
    'refitted component properties into lifting abstractions.',
    'flattened doctype declarations into iterative conditionals.',
    'refactored dynamically changing view contexts in cross-browser compilations.',
    'flattened stylesheet selectors for performant domain-scale compression.'
  ],
  [FUTURE]: [
    'reinitiate state-view reducers depending on flow constraints.',
    'fabricate animation effects as N-matrix transformations.',
    'resupply parameters for inline form enforcements.',
    'relocate implicit relative pathing to cross-domain CDN structures.',
    'adapt in-browser interface zooming as native SPA operation.',
    'phase out mutating data dependencies out of context-heavy external hooks.'
  ]
};

export const PHRASES = {
  [ROLES]: {
    [DEV_OPS_ROLE]: DEVOPS_QUOTES,
    [BACK_END_ROLE]: BACKEND_QUOTES,
    [FRONT_END_ROLE]: FRONTEND_QUOTES
  },
  [PREFIX]: PREFIX_QUOTES
};
