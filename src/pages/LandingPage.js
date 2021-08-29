import React from 'react';
import HomePage from 'pages/HomePage';

export const LandingPage = ({ currentUser }) => {
  return (
    <div>
      {currentUser && <HomePage />}
      {!currentUser && <h1>masuk dulu</h1>}
    </div>
  );
};

export default LandingPage;
