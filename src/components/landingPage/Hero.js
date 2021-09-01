import React from 'react';
import Button from 'elements/Button';

export const Hero = () => {
  return (
    <section className="container pt-4 text">
      <div className="align-item-center justify-content-center">
        <h1 className="display-4 text-center text-gray-800 mt-xl-5">
          Kelola daftar kebutuhanmu secara efektif dan efesien
        </h1>
        <h4 className="text-center text-gray-600 mt-3 font-weight-normal">
          Mudah, cepat, efektif dan efesien
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
      </div>
    </section>
  );
};

export default Hero;
