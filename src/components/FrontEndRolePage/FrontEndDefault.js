import React from 'react';

import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndDefault() {
  return (
    <>
      <Fox pose={DEFAULT} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default FrontEndDefault;
