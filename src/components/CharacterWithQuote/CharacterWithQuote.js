import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getQuote } from '../../utils/quotesService';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractRoleFromPath from '../../utils/extractRoleFromPath';
import QuoteBubble from '../QuoteBubble';
import { history } from '../../types';

function CharacterWitQuote({ history, children }) {
  const [{ quote, action }, updatePose] = useState({
    quote: getQuote(extractQuoteIDFromPath(history.location.pathname)),
    action: extractActionFromPath(history.location.pathname)
  });

  function addHistoryListener() {
    return history.listen(({ pathname }) => {
      const role = extractRoleFromPath(pathname);
      const action = extractActionFromPath(pathname);
      const quoteID = extractQuoteIDFromPath(pathname);
      const quote = getQuote(role, action, quoteID);
      updatePose({ quote, action });
    });
  }

  useEffect(addHistoryListener);

  return (
    <>
      <QuoteBubble quote={quote} />
      {React.Children.map(children, child => React.cloneElement(child, { pose: action }))}
    </>
  );
}

CharacterWitQuote.propTypes = {
  history,
  // TODO: Setup more precise type
  children: PropTypes.object
};

export default withRouter(CharacterWitQuote);
