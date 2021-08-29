import React from 'react';
import ImageHero from 'assets/images/heroSignup.svg';
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
          <div>
            <h1 className="text-center mt-5 text-white font-weight-normal line-height-1">
              Dapatkan Informasi Terkait <br /> List Kebutuhanmu
            </h1>
          </div>
          <div>
            <h5 className="text-center mt-3 text-gray-300 font-weight-lighter line-height-1">
              Kamu Akan Mendapatkan Informasi Berupa <br /> Estimasi Biaya
              Pengeluaran Dan Langkah <br /> Yang Sedang Kamu Lakukan dan
              efesien
            </h5>
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
