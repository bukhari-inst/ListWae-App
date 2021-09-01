import React from 'react';
import Header from 'components/landingPage/Header';
import Hero from 'components/landingPage/Hero';
import Content from 'components/landingPage/Content';
import Footer from 'components/landingPage/Footer';

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-light">
        <Hero />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
