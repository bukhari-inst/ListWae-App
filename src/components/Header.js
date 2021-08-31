import React from 'react';
import { auth } from 'config/Firebase';
import Search from 'parts/Search';
import Wallet from 'parts/Wallet';
import Button from 'elements/Button';
import profile from 'assets/images/undraw_profile.svg';

export const Header = ({ currentUser }) => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload();
    });
  };

  return (
    <nav
      className="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
            "
    >
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3 box-shadow-none"
      >
        <i className="fa fa-bars"></i>
      </button>

      <Search />

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <Button
            isExternal
            type="link"
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </Button>
          <div
            className="
                    dropdown-menu dropdown-menu-right
                    p-3
                    shadow
                    animated--grow-in
                  "
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Cari daftar kebutuhanmu"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow d-md-none">
          <Button
            className="nav-link dropdown-toggle"
            isExternal
            type="link"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-usd fa-sm circle-ctn sm-icon"></i> 3875000
          </Button>
        </li>
        <li className="nav-item dropdown no-arrow mx-1 wallet">
          <Wallet />
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <Button
            className="nav-link dropdown-toggle"
            isExternal
            type="link"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3</span>
          </Button>
        </li>
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <Button
            className="nav-link dropdown-toggle"
            isExternal
            type="link"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              <h5>{currentUser}</h5>
            </span>
            <img
              className="img-profile rounded-circle"
              src={profile}
              alt="profile"
            />
          </Button>
          {/* <!-- Dropdown - User Information --> */}
          <div
            className="
                    dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  "
            aria-labelledby="userDropdown"
          >
            <Button
              onClick={handleLogout}
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
