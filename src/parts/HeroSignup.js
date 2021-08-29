import React from 'react';
import ImageHero from 'assets/images/hero-loginpage.svg';
import ImageArt from 'assets/images/art-loginpage.svg';
import ImageArt_ from 'assets/images/art2-loginpage.svg';

export default function HeroSignup() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-start my-3 mx-2">
          <img src={ImageArt} alt="ImageArt" style={{ height: 80 }} />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <img
              src={ImageHero}
              alt="ImageHero"
              style={{ width: 333, marginTop: 60 }}
            />
          </div>
          <div
            className="text-center mt-5 text-white font-weight-normal"
            style={{ fontSize: 24 }}
          >
            Buat list kebutuhanmu <br /> sekarang juga
          </div>
          <div
            className="text-center mt-3 text-gray-300 font-weight-light"
            style={{ fontSize: 14 }}
          >
            Kamu dapat dengan mudah membuat list <br /> kebutuhan dengan efektif
            dan efesien
          </div>
          <div className="d-flex justify-content-end my-4">
            <img
              src={ImageArt_}
              alt="ImageArt"
              style={{ marginTop: 132, height: 80 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
