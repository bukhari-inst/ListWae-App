import React from 'react';
import ContentRight from 'parts/ContentRight';
import ContentLeft from 'parts/ContentLeft';
import Button from 'elements/Button';

export const Content = () => {
  return (
    <div
      className="
              container
              d-flex
              flex-lg-row-reverse flex-md-column flex-column
            "
      id="list-wae-container"
    >
      <ContentRight />
      <div className="container">
        <div
          className="
                  d-sm-flex
                  align-items-center
                  justify-content-between
                  mb-4
                "
        >
          <h1
            className="h3 mb-0 text-gray-800 font-weight-bold mb-4"
            id="h1-7rem"
          >
            Dashboard
          </h1>
          <Button
            className="
                    d-sm-inline-block
                    btn btn-sm btn-primary
                    shadow-sm
                    bg-unggu
                  "
            type="link"
            href="#"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Tambah Daftar
          </Button>
        </div>
        <ContentLeft />
      </div>
    </div>
  );
};

export default Content;
