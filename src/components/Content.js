import React from 'react';
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
      <div
        className="
                container
                d-flex
                flex-lg-column flex-column-reverse
                col-xl-3
              "
      >
        <div id="task-done">
          <div
            className="
                    d-sm-flex
                    align-items-center
                    justify-content-between
                    mb-4
                  "
          >
            <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
              Telah Selesai
            </h1>
          </div>
          <div className="row">
            <div className="mb-4">
              <div className="card shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Service motor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="card shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Rakit PC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="task-done">
          <div
            className="
                    d-sm-flex
                    align-items-center
                    justify-content-between
                    mb-4
                  "
          >
            <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
              Pencapaian
            </h1>
          </div>
          <div className="col-lg flex-grow-1" id="padding-left-right-none">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-pie mb-4" id="height-auto">
                  <canvas id="myChart"></canvas>
                </div>
                <div className="mt-4 text-center small mb-4 d-flex flex-column">
                  <span className="mr-2">
                    <i className="fas fa-circle done"></i> Sedang Berlangsung
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle not-done"></i> Sedang
                    Berlangsung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Page Heading */}
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
          <a
            href="#"
            className="
                    d-sm-inline-block
                    btn btn-sm btn-primary
                    shadow-sm
                    bg-unggu
                  "
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Tambah Daftar
          </a>
        </div>
        {/* Content Row */}
        <div className="row">
          {/* Area Chart */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdow */}
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
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="
                            dropdown-menu dropdown-menu-right
                            shadow
                            animated--fade-in
                          "
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
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
                            Beli di pasar johar semarang di tempatnya bu
                            maemunah
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
                            Beli di pasar johar semarang di tempatnya bu
                            maemunah
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
      </div>
    </div>
  );
};

export default Content;
