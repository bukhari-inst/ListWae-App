import React from 'react';
// import { auth } from 'config/Firebase';
import 'assets/scss/home-page.min.css';
import 'assets/scss/style-listwae.scss';
import 'assets/vendor/fontawesome-free/css/all.min.css';
import Sidebar from 'components/SidebarHomePage';
import ContentWrapper from 'components/ContentWrapper';
// import Button from 'elements/Button';

export const HomePage = () => {
  // const handleLogout = () => {
  //   auth.signOut().then(() => {
  //     window.location.reload();
  //   });
  // };

  return (
    <div id="wrapper">
      <ul className="navbar-nav menu-nav sidebar accordion">
        <Sidebar />
        {/* <div className="d-flex justify-content-center">
        <Button className="btn px-5" isPrimary onClick={handleLogout}>
          LOGOUT
        </Button>
      </div> */}
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <nav
          className="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
            "
        >
          <ContentWrapper />
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
