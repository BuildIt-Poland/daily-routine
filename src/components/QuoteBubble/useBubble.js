// Custom hook to keep data required for smooth animation tranistions

import { useState, useEffect } from 'react';

import { extractRole, extractAction, extractQuoteID } from '../../utils/extractSomethingFromPath';
import checkIfInDefaultPose from '../../utils/checkIfInDefaultPose';
import { getQuote } from '../../utils/quotesService';

function useBubble(pathname) {
  const [bubble, setBubble] = useState({
    quote: '',
    quoteID: '',
    isInDefaultPose: true
  });

  useEffect(() => {
    const role = extractRole(pathname);
    const action = extractAction(pathname);
    const quoteID = extractQuoteID(pathname);

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
