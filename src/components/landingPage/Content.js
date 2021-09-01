import React from 'react';
import Button from 'elements/Button';
import Image_Content_1 from 'assets/images/content-1-landingpage.png';
import Image_Content_2 from 'assets/images/content-2-landingpage.png';
import Fade from 'react-reveal/Fade';

export const Content = () => {
  return (
    <section className="container">
      <div className="align-item-center justify-content-center">
        <Fade bottom delay={550}>
          <div style={{ marginTop: 112 }}>
            <h2 className="text-center text-gray-800 mt-xl-5">
              Keuntungan yang akan anda peroleh <br /> menggunakan List Wae
            </h2>
          </div>
          <div style={{ marginTop: 12 }}>
            <img
              className="rounded mx-auto d-block"
              src={Image_Content_1}
              alt="heroimage"
              style={{ width: 862, height: 586 }}
            />
          </div>
        </Fade>
        <Fade bottom delay={600}>
          <div style={{ marginTop: 12 }}>
            <h2 className="text-center text-gray-800 mt-xl-5">
              Cari tau sekarang apa yang mereka katakan <br /> tentang ListWae
            </h2>
          </div>
          <div style={{ marginTop: 72 }}>
            <img
              className="rounded mx-auto d-block"
              src={Image_Content_2}
              alt="heroimage"
              style={{ width: 1100, height: 288 }}
            />
          </div>
        </Fade>
        <Fade bottom delay={650}>
          <div style={{ marginTop: 112 }}>
            <h2 className="text-center text-gray-800 mt-xl-5">
              Tunggu apa lagi? Buktikan sekarang juga!
            </h2>
          </div>
          <h4 className="text-center text-gray-600 mt-3 font-weight-normal">
            Daftar sekarang juga, anda akan mendapatkan banyak <br /> keuntungan
            menggunakan ListWae
          </h4>
          <div className="text-center ">
            <Button
              className="btn btn-primary mt-lg-5 py-3 px-5"
              type="link"
              href="/signup"
            >
              Mulai Sekarang
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Content;
