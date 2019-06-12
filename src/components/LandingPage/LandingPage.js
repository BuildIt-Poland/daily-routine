import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section>
      <h1>Daily Routine</h1>
      <Link to="/frontend">FrontEnd</Link>
      <Link to="/backend">BackEnd</Link>
      <Link to="/devops">DevOps</Link>
    </section>
  );
}

export default LandingPage;
