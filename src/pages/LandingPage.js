import React from 'react';
import Header from 'components/landingPage/Header';
import Fade from 'react-reveal/Fade';
import Hero from 'components/landingPage/Hero';

export const LandingPage = ({ currentUser }) => {
  return (
    <div>
      <Fade delay={400}>
        <Header />
        <div className="bg-light">
          <Hero />
        </div>
      </Fade>
    </div>
  );
};

export default LandingPage;
