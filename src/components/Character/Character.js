import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import getPose from '../../utils/getPose';
import { location } from '../../types';

function Character({ location, children }) {
  const { pathname } = location;
  const pose = getPose(pathname);

  return React.cloneElement(children, { pose });
}

Character.propTypes = {
  location,
  children: PropTypes.node
};

export default withRouter(Character);
