import '../../styles/sanitize.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import GlobalStyle from '../GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </>
  );
}

export default Root;
