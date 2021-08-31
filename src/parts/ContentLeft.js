import React from 'react';
import Button from 'elements/Button';

export const ContentLeft = () => {
  return (
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          <div
            id="list-wae-card-header"
            className="
                        card-header
                        py-3
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-between
                      "
          >
            <h6 className="m-0 font-weight-bold">Earnings Overview</h6>
            <div className="dropdown no-arrow">
              <Button
                className="dropdown-toggle"
                type="link"
                isExternal
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </Button>
              <div
                className="
                            dropdown-menu dropdown-menu-right
                            shadow
                            animated--fade-in
                          "
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <Button
                  className="dropdown-item"
                  type="link"
                  isExternal
                  href="#"
                >
                  Action
                </Button>
                <Button
                  className="dropdown-item"
                  type="link"
                  isExternal
                  href="#"
                >
                  Another action
                </Button>
                <div className="dropdown-divider"></div>
                <Button
                  className="dropdown-item"
                  type="link"
                  isExternal
                  href="#"
                >
                  Something else here
                </Button>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="card-body">
            <p className="m-bottom-small">26 agustus</p>
            <div className="short-detail">
              <p className="item d-flex align-items-center">
                <span className="n-item">8</span> item
                <i className="fa fa-circle"></i> Rp<span>250.000</span>
              </p>
              <div
                className="
                            d-flex
                            flex-row
                            align-items-center align-self-center
                            progress-list
                          "
              >
                <div className="progress flex-grow-1">
                  <div
                    className="progress-bar bg-unggu"
                    role="progressbar"
                    style={{ width: 20 }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>
                  <span className="n-check-item">2</span>/
                  <span className="n-item">8</span>
                </p>
              </div>
            </div>
            <div className="detail-card">
              <p>
                Estimasi Pengeluaran
                <span className="amount">Rp. 200000</span>
              </p>
              <p>
                Sisa Saldo <span className="amount">Rp. 200000</span>
              </p>
              <form>
                <div className="input-group mb-3" id="list-wae-chekbox">
                  <div className="input-group-prepend">
                    <div className="checkbox">
                      <input type="checkbox" className="checkbox-round" />
                    </div>
                    <ul>
                      <li className="title-subtask">Beras</li>
                      <li className="d-flex align-items-center">
                        2kg
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        Rp22.000
                      </li>
                      <li>
                        Beli di pasar johar semarang di tempatnya bu maemunah
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="input-group mb-3" id="list-wae-chekbox">
                  <div className="input-group-prepend">
                    <div className="checkbox">
                      <input type="checkbox" className="checkbox-round" />
                    </div>
                    <ul>
                      <li className="title-subtask">Beras</li>
                      <li className="d-flex align-items-center">
                        2kg
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        Rp22.000
                      </li>
                      <li>
                        Beli di pasar johar semarang di tempatnya bu maemunah
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="details d-flex">
              <button
                className="btn flex-grow-1 papa"
                onClick={'detail(this)'}
                status="detail"
              >
                <i className="fa fa-angle-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
