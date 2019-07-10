import React from 'react';

import { location } from '../../types';
import Wrapper from './Wrapper';
import Logo from './Logo';

function AppBar({ location }) {
  return (
    <Wrapper role="banner">
      <Logo location={location} />
    </Wrapper>
  );
}

AppBar.propTypes = {
  location
};

export default AppBar;
