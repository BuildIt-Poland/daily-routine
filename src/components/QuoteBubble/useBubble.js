// Custom hook to keep data required for smooth animation tranistions

import { useState, useEffect } from 'react';

import extractRoleFromPath from '../../utils/extractRoleFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import checkIfInDefaultPose from '../../utils/checkIfInDefaultPose';
import { getQuote } from '../../utils/quotesService';

function useBubble(pathname) {
  const [bubble, setBubble] = useState({
    quote: '',
    quoteID: '',
    isInDefaultPose: true
  });

  useEffect(() => {
    const role = extractRoleFromPath(pathname);
    const action = extractActionFromPath(pathname);
    const quoteID = extractQuoteIDFromPath(pathname);

    const randomQuote = getQuote(role, action, quoteID);

    setBubble({
      quote: randomQuote,
      quoteID,
      isInDefaultPose: checkIfInDefaultPose(pathname)
    });
  }, [pathname]);

  return bubble;
}

export default useBubble;
