import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getQuote } from '../../utils/quotesService';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractRoleFromPath from '../../utils/extractRoleFromPath';
import { history } from '../../types';

function CharacterWitQuote({ history, children }) {
  const role = extractRoleFromPath(history.location.pathname);
  const pose = extractActionFromPath(history.location.pathname);
  const quoteID = extractQuoteIDFromPath(history.location.pathname);
  const quote = getQuote(role, pose, quoteID);

  function renderChildren(child, index) {
    if (index === 0) {
      return React.cloneElement(children[index], { quote });
    } else if (index === 1) return React.cloneElement(children[index], { pose });
  }

  return <>{React.Children.map(children, renderChildren)}</>;
}

CharacterWitQuote.propTypes = {
  history,
  children: PropTypes.node
};

export default withRouter(CharacterWitQuote);
