import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import generateTheme from '../../styles/generateTheme';
import { ROOT_PATH, FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH } from '../../constants/routes';
import Wrapper from './Wrapper';
import Header from '../Header';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';

function App({ location }) {
  return (
    <ThemeProvider theme={generateTheme(location.pathname)}>
      <Wrapper>
        <Header />
        <main>
          <Route exact path={ROOT_PATH} component={LandingPage} />
          <Route exact path={FRONT_END_ROLE_PATH} component={FrontEndRolePage} />
          <Route path={BACK_END_ROLE_PATH} component={BackEndRolePage} />
          <Route exact path={DEV_OPS_ROLE_PATH} component={DevOpsRolePage} />
        </main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
