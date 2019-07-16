import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function BackEndConfess() {
  return (
    <>
      <QuoteBubble />
      <Robot pose={CONFESS} />
    </>
  );
}

export default BackEndConfess;
