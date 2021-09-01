import React from 'react';
import Header from 'components/landingPage/Header';
import Fade from 'react-reveal/Fade';
import Hero from 'components/landingPage/Hero';
import Content from 'components/landingPage/Content';
import Footer from 'components/landingPage/Footer';

export const LandingPage = ({ currentUser }) => {
  return (
    <div>
      <Fade delay={400}>
        <Header />
        <div className="bg-light">
          <Hero />
          <Content />
        </div>
        <Footer />
      </Fade>
    </div>
  );
};

export default LandingPage;
