import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getQuote } from '../../utils/quotesService';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractRoleFromPath from '../../utils/extractRoleFromPath';
import QuoteBubble from '../QuoteBubble';
import { history } from '../../types';

function CharacterWitQuote({ history, children }) {
  const role = extractRoleFromPath(history.location.pathname);
  const action = extractActionFromPath(history.location.pathname);
  const quoteID = extractQuoteIDFromPath(history.location.pathname);
  const quote = getQuote(role, action, quoteID);

  return (
    <>
      <QuoteBubble quote={quote} />
      {React.cloneElement(children, { pose: action })}
    </>
  );
}

CharacterWitQuote.propTypes = {
  history,
  children: PropTypes.node
};

export default withRouter(CharacterWitQuote);
