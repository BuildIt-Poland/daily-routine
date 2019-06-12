import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import generateTheme from '../../styles/generateTheme';
import { ROOT_PATH, FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH } from '../../constants/routes';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';

const Wrapper = styled.main`
  background-color: ${props => props.theme.primaryColor};
`;

function App({ location }) {
  return (
    <ThemeProvider theme={generateTheme(location.pathname)}>
      <Wrapper>
        <Route exact path={ROOT_PATH} component={LandingPage} />
        <Route exact path={FRONT_END_ROLE_PATH} component={FrontEndRolePage} />
        <Route exact path={BACK_END_ROLE_PATH} component={BackEndRolePage} />
        <Route exact path={DEV_OPS_ROLE_PATH} component={DevOpsRolePage} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
