import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function DevOpsDefault() {
  return (
    <>
      <Whale pose={DEFAULT} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default DevOpsDefault;
