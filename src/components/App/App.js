import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { ROOT_PATH } from '../../constants/routes';
import { location } from '../../types';
import { GenderProvider } from '../../context/GenderContext';
import generateTheme from '../../utils/generateTheme';
import { RouteTransitionAnimationProvider } from '../../context/RouteTransitionAnimationContext';
import AppBar from '../AppBar';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';
import RouteTransitionAnimation from '../RouteTransitionAnimation';
import AnimatedWrapper from './AnimatedWrapper';

function App({ location, history }) {
  return (
    <RouteTransitionAnimationProvider history={history}>
      <ThemeProvider theme={generateTheme(location.pathname)}>
        <>
          <RouteTransitionAnimation location={location} />
          <GenderProvider>
            <AnimatedWrapper location={location}>
              <AppBar />
              <main>
                <Route exact path={ROOT_PATH} component={LandingPage} />
                <Route path={`/${FRONT_END_ROLE}`} component={FrontEndRolePage} />
                <Route path={`/${BACK_END_ROLE}`} component={BackEndRolePage} />
                <Route path={`/${DEV_OPS_ROLE}`} component={DevOpsRolePage} />
              </main>
              <Footer />
            </AnimatedWrapper>
          </GenderProvider>
        </>
      </ThemeProvider>
    </RouteTransitionAnimationProvider>
  );
}

App.propTypes = {
  location,
  history: PropTypes.object
};

export default withRouter(App);
