import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { CONFUSED } from '../../constants/characterMoods';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function BackEndDefault() {
  return (
    <>
      <Robot mood={CONFUSED} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default BackEndDefault;
