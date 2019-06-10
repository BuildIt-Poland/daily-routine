import React from 'react';
import { Route } from 'react-router-dom';

import { ROOT_PATH, FRONT_END_PATH, BACK_END_PATH, DEV_OPS_PATH } from '../../constants/routes';
import LandingPage from '../LandingPage';
import FrontEnd from '../FrontEnd';
import BackEnd from '../BackEnd';
import DevOps from '../DevOps';

function App() {
  return (
    <main>
      <Route exact path={ROOT_PATH} component={LandingPage} />
      <Route exact path={FRONT_END_PATH} component={FrontEnd} />
      <Route exact path={BACK_END_PATH} component={BackEnd} />
      <Route exact path={DEV_OPS_PATH} component={DevOps} />
    </main>
  );
}

export default App;
