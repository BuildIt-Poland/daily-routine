import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function DevOpsConfess() {
  return (
    <>
      <QuoteBubble />
      <Whale pose={CONFESS} />
    </>
  );
}

export default DevOpsConfess;
