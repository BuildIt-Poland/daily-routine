import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function BackEndBrag() {
  return (
    <>
      <QuoteBubble />
      <Robot pose={BRAG} />
    </>
  );
}

export default BackEndBrag;
