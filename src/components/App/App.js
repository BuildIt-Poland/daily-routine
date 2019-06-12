import React from 'react';
import { Route } from 'react-router-dom';

import { ROOT_PATH, FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH } from '../../constants/routes';
import Header from '../Header';
import LandingPage from '../LandingPage';
import FrontEndRolePage from '../FrontEndRolePage';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path={ROOT_PATH} component={LandingPage} />
        <Route exact path={FRONT_END_ROLE_PATH} component={FrontEndRolePage} />
        <Route exact path={BACK_END_ROLE_PATH} component={BackEndRolePage} />
        <Route exact path={DEV_OPS_ROLE_PATH} component={DevOpsRolePage} />
      </main>
    </>
  );
}

export default App;
