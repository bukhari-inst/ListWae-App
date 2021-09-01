import React from 'react';
import Button from 'elements/Button';
import Logo from 'assets/images/logo_svg.svg';
import Fade from 'react-reveal/Fade';

export const Footer = () => {
  return (
    <div>
      <Fade top delay={700}>
        <div className="bg-primary" style={{ marginTop: 112 }}>
          <footer>
            <div className="container py-5">
              <div className="row">
                <div className="col-auto" style={{ width: 350 }}>
                  <figure>
                    <img src={Logo} alt="logo" style={{ width: 52 }} />
                  </figure>
                  <p className="brand-tagline text-white">
                    LIstWae merupakan platfrom website <br /> yang dapat
                    membantu melakukan <br /> daftar kebutuhan secra efisien.
                  </p>
                </div>
                <div className="col-auto mr-5">
                  <ul className="list-group list-group-flush  ">
                    <li className="list-group-item  bg-primary">
                      <h6 className="text-white">Links</h6>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/fitur"
                      >
                        Fitur
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/akunpremium"
                      >
                        Akun Premium
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/tentangkami"
                      >
                        Tentang Kami
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/buhungikami"
                      >
                        Hubungi Kami
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="col-2 mr-5">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-primary">
                      <h6 className="text-white">Company</h6>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/privacy"
                      >
                        Tentang Kami
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/terms"
                      >
                        Alamat
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/terms"
                      >
                        Karir
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-primary">
                      <h6 className="text-white">Social Media</h6>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/facebook"
                      >
                        Facebook
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/facebook"
                      >
                        Instagram
                      </Button>
                    </li>
                    <li className="list-group-item bg-primary">
                      <Button
                        className="text-white font-weight-normal"
                        type="link"
                        href="/facebook"
                      >
                        LinkedIn
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center copyrights text-white">
                  Copyright 2021 - All right reserved - ListWae
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
