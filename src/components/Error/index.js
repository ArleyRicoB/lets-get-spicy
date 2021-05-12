import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

const Error = () => {
  return (
    <div className="container error">
      <h1>Page not found</h1>
      <p>
        The page you want to access is not available. Go to <NavLink to="/">main page</NavLink>.
      </p>
    </div>
  );
};

export default Error;
