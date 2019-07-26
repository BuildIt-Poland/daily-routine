import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { extractPose } from '../../utils/extractFromPath';
import { location } from '../../types';
import { QuoteContext } from '../../context/QuoteContext';
import ErrorBoundary from '../ErrorBoundary';

function Character({ location, children }) {
  const { pathname } = location;
  const { quote } = useContext(QuoteContext);

  const pose = extractPose(pathname, quote);

  return <ErrorBoundary>{React.cloneElement(children, { pose })}</ErrorBoundary>;
}

Character.propTypes = {
  location,
  children: PropTypes.node
};

export default withRouter(Character);
