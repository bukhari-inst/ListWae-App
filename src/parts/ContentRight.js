import React from 'react';

export const ContentRight = () => {
  return (
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
          <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Pencapaian</h1>
        </div>
        <div className="col-lg flex-grow-1" id="padding-left-right-none">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="chart-pie mb-4" id="height-auto">
                <canvas id="myChart"></canvas>
              </div>
              <div className="mt-4 text-center small mb-4 d-flex flex-column">
                <span className="mr-2">
                  <i className="fas fa-circle done"></i> Sedang Berlangsung
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle not-done"></i> Sedang Berlangsung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
