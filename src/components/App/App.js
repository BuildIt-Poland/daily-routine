import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { GenderProvider } from '../../context/GenderContext';
import generateTheme from '../../utils/generateTheme';
import AppBar from '../AppBar';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';
import Wrapper from './AnimatedWrapper';
import { location } from './../../types/';
const ROOT_PATH = '/';

function App({ location }) {
  return (
    <GenderProvider>
      <ThemeProvider theme={generateTheme(location.pathname)}>
        <Wrapper location={location}>
          <AppBar />
          <main>
            <Route exact path={ROOT_PATH} component={LandingPage} />
            <Route path={`/${FRONT_END_ROLE}`} component={FrontEndRolePage} />
            <Route path={`/${BACK_END_ROLE}`} component={BackEndRolePage} />
            <Route path={`/${DEV_OPS_ROLE}`} component={DevOpsRolePage} />
          </main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </GenderProvider>
  );
}

App.propTypes = {
  location
};

export default withRouter(App);
