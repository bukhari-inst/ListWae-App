import React, { Component } from 'react';
import 'assets/scss/home-page.min.css';
import 'assets/scss/style-listwae.scss';
import 'assets/vendor/fontawesome-free/css/all.min.css';
import Sidebar from 'components/SidebarHomePage';
import Header from 'components/Header';
export default class LandingPage extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Header />
        </div>
      </div>
    );
  }
}
