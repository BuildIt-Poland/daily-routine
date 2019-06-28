import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import { MALE, GENDER } from '../../constants/genders';
import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import generateTheme from '../../utils/generateTheme';
import addToLocalStorage from '../../utils/addToLocalStorage';
import AppBar from '../AppBar';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';
import GenderProvider from '../GenderProvider';
import Wrapper from './AnimatedWrapper';

const ROOT_PATH = '/';

function App({ location }) {
  useEffect(() => addToLocalStorage(GENDER, MALE), []);

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

export default withRouter(App);
