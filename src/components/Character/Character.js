import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { extractPose } from '../../utils/extractFromPath';
import { location } from '../../types';

function Character({ location, children }) {
  const { pathname } = location;
  const pose = extractPose(pathname);

  return React.cloneElement(children, { pose });
}

Character.propTypes = {
  location,
  children: PropTypes.node
};

export default withRouter(Character);
