import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { CONFUSED } from '../../constants/characterMoods';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function Default() {
  return (
    <>
      <Fox mood={CONFUSED} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default Default;
