import React from 'react';

export const Search = () => {
  return (
    <div>
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3 box-shadow-none"
      >
        <i className="fa fa-bars"></i>
      </button>
      <form
        className="
                d-none d-sm-inline-block
                form-inline
                mr-auto
                ml-md-3
                my-2 my-md-0
                mw-100
                navbar-search
                wallet-form
              "
      >
        <div className="input-group">
          <div className="curency-money btn">
            <i className="fas fa-search fa-sm icon-gray"></i>
          </div>
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Cari daftar kebutuhanmu"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn bg-unggu" type="button">
              Cari
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
