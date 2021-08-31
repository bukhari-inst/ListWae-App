import React from 'react';
import Fade from 'react-reveal/Fade';
import 'assets/scss/home-page.min.css';
import 'assets/scss/style-listwae.scss';
import 'assets/vendor/fontawesome-free/css/all.min.css';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Content from 'components/Content';

export const HomePage = ({ currentUser }) => {
  return (
    <div id="wrapper">
      <Fade delay={400}>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Header currentUser={currentUser} />
          <Content />
        </div>
      </Fade>
    </div>
  );
};

export default HomePage;
