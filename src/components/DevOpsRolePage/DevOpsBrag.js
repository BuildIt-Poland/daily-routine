import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function DevOpsBrag() {
  return (
    <>
      <QuoteBubble />
      <Whale pose={BRAG} />
    </>
  );
}

export default DevOpsBrag;
