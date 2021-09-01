import React from 'react';
import Logo from 'assets/images/logo.png';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export const Header = () => {
  return (
    <header className="spacing-sm ">
      <Fade delay={400}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="navbar-brand" type="link" href="">
              <figure>
                <img src={Logo} alt="logo" style={{ width: 52 }} />
              </figure>
            </Button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                  <Button className="nav-link" type="link" href="#">
                    Fitur <span className="sr-only">(current)</span>
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button className="nav-link" type="link" href="#">
                    Akun Premium
                  </Button>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <Button className="mr-4" type="link" href="/signup">
                  Daftar
                </Button>
                <Button
                  className="btn btn-primary my-2 my-sm-0 py-3 px-5 font-weight-light"
                  type="link"
                  href="/login"
                >
                  Masuk
                </Button>
              </form>
            </div>
          </nav>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
