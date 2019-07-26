import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { extractPose } from '../../utils/extractFromPath';
import { location } from '../../types';
import { QuoteContext } from '../../context/QuoteContext';

function Character({ location, children }) {
  const { pathname } = location;
  const { quote } = useContext(QuoteContext);

  const pose = extractPose(pathname, quote);

  return React.cloneElement(children, { pose });
}

Character.propTypes = {
  location,
  children: PropTypes.node
};

export default withRouter(Character);
