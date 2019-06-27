import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function DevOpsDefault() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Whale pose={DEFAULT} gender={gender} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default DevOpsDefault;
