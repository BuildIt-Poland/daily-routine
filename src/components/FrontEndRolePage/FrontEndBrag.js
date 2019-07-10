import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndBrag() {
  return (
    <>
      <QuoteBubble />
      <Fox pose={BRAG} />
    </>
  );
}

export default FrontEndBrag;
