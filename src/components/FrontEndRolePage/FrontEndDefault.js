import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { CONFUSED } from '../../constants/characterMoods';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndDefault() {
  return (
    <>
      <Fox mood={CONFUSED} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default FrontEndDefault;
