import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import generateTheme from '../../utils/generateTheme';
import Wrapper from './Wrapper';
import AppBar from '../AppBar';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';

const ROOT_PATH = '/';

function App({ location }) {
  return (
    <ThemeProvider theme={generateTheme(location.pathname)}>
      <Wrapper>
        <AppBar />
        <main>
          <Route exact path={ROOT_PATH} component={LandingPage} />
          <Route exact path={`/${FRONT_END_ROLE}`} component={FrontEndRolePage} />
          <Route path={`/${BACK_END_ROLE}`} component={BackEndRolePage} />
          <Route path={`/${DEV_OPS_ROLE}`} component={DevOpsRolePage} />
        </main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
