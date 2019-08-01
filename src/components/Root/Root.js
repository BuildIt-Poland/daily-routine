import '../../styles/sanitize.css';
// CSS focus-visible polyfill
// Apply focus styles only when navigating with keyboard
import 'focus-visible/dist/focus-visible';

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
