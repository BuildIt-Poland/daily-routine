import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { CONFUSED } from '../../constants/characterMoods';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function Default() {
  return (
    <>
      <Whale mood={CONFUSED} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default Default;
