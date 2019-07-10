import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndDefault() {
  return (
    <>
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
      <Fox pose={DEFAULT} />
    </>
  );
}

export default FrontEndDefault;
