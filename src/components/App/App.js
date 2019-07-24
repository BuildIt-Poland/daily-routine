import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter, Switch } from 'react-router-dom';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { ROOT_PATH } from '../../constants/routes';
import { location, history } from '../../types';
import { GenderProvider } from '../../context/GenderContext';
import { RouteTransitionAnimationProvider } from '../../context/RouteTransitionAnimationContext';
import generateTheme from '../../utils/generateTheme';
import AppBar from '../AppBar';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';
import RouteTransitionAnimation from '../RouteTransitionAnimation';
import PageNotFound from '../PageNotFound';
import Wrapper from './Wrapper';

function App({ location, history }) {
  return (
    <RouteTransitionAnimationProvider history={history}>
      <ThemeProvider theme={generateTheme(location.pathname)}>
        <>
          <RouteTransitionAnimation location={location} />
          <GenderProvider>
            <Wrapper>
              <AppBar />
              <main>
                <Switch>
                  <Route exact path={ROOT_PATH} component={LandingPage} />
                  <Route path={`/${FRONT_END_ROLE}`} component={FrontEndRolePage} />
                  <Route path={`/${BACK_END_ROLE}`} component={BackEndRolePage} />
                  <Route path={`/${DEV_OPS_ROLE}`} component={DevOpsRolePage} />
                  <Route path="*" component={PageNotFound} />
                </Switch>
              </main>
              <Footer />
            </Wrapper>
          </GenderProvider>
        </>
      </ThemeProvider>
    </RouteTransitionAnimationProvider>
  );
}

App.propTypes = {
  location,
  history
};

export default withRouter(App);
