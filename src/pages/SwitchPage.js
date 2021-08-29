import React from 'react';
import HomePage from 'pages/HomePage';
import LandingPage from 'pages/LandingPage';

export const SwitchPage = ({ currentUser }) => {
  return (
    <div>
      {currentUser && (
        <>
          <HomePage />
        </>
      )}
      {!currentUser && (
        <>
          <LandingPage />
        </>
      )}
    </div>
  );
};

export default SwitchPage;
