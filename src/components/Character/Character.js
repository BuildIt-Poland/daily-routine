import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { location } from '../../types';
import extractActionFromPath from '../../utils/extractActionFromPath';
import ErrorBoundary from '../ErrorBoundary';

function Character({ location, children }) {
  const { pathname } = location;
  const pose = extractActionFromPath(pathname);
  return <ErrorBoundary>{React.cloneElement(children, { pose })}</ErrorBoundary>;
}

Character.propTypes = {
  location,
  children: PropTypes.node
};

export default withRouter(Character);
