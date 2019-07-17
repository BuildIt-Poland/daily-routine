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
  const initialState = {
    quote: getQuote(extractQuoteIDFromPath(history.location.pathname)),
    action: extractActionFromPath(history.location.pathname)
  };

  const [{ quote, action }, setQuoteAndAction] = useState(initialState);

  function addHistoryListener() {
    return history.listen(({ pathname }) => {
      const role = extractRoleFromPath(pathname);
      const action = extractActionFromPath(pathname);
      const quoteID = extractQuoteIDFromPath(pathname);
      const quote = getQuote(role, action, quoteID);
      setQuoteAndAction({ quote, action });
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
  children: PropTypes.node
};

export default withRouter(CharacterWitQuote);
