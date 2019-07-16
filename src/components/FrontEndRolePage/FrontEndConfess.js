import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndConfess() {
  return (
    <>
      <QuoteBubble />
      <Fox pose={CONFESS} />
    </>
  );
}

export default FrontEndConfess;
