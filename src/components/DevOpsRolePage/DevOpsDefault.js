import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function DevOpsDefault() {
  return (
    <>
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
      <Whale pose={DEFAULT} />
    </>
  );
}

export default DevOpsDefault;
