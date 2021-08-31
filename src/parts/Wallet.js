import React from 'react';

const Wallet = () => {
  return (
    <form
      className="
                    wallet-form
                    d-none d-sm-inline-block
                    form-inline
                    mr-auto
                    ml-md-3
                    my-2 my-md-0
                    mw-100
                    navbar-search
                  "
    >
      <div className="input-group">
        <div className="curency-money btn abs-center dollar">
          <i className="fas fa-usd fa-sm circle-ctn"></i>
        </div>
        <input
          type="text"
          className="
                        form-control
                        font-weight-bold
                        bg-light
                        border-0
                        small
                      "
          placeholder="Search for..."
          aria-label="Search"
          value="25000.00"
          aria-describedby="basic-addon2"
          disabled
        />
        <div className="input-group-append">
          <button
            className="
                          btn
                          curency-money-add
                          d-flex
                          align-items-center
                          justify-content-center
                        "
            type="button"
          >
            <i className="fas fa-plus fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Wallet;
