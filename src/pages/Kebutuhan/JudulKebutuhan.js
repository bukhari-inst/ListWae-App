import React from 'react';
import 'pages/Kebutuhan/style.css';
import Button from 'elements/Button';

export const JudulKebutuhan = () => {
  return (
    <div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="signup-step-container">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-12">
                    <div className="wizard">
                      <div className="wizard-inner">
                        <div className="connecting-line"></div>
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" className="active">
                            <a
                              href="#step1"
                              data-toggle="tab"
                              aria-controls="step1"
                              role="tab"
                            >
                              <span className="round-tab">1</span>
                              <i>Judul Kebutuhan</i>
                            </a>
                          </li>
                          <li role="presentation" className="disabled">
                            <Button
                              type="link"
                              isExternal
                              href="#step2"
                              data-toggle="tab"
                              aria-controls="step2"
                              role="tab"
                            >
                              <span className="round-tab">2</span>
                              <i>Detail Item</i>
                            </Button>
                          </li>
                          <li role="presentation" className="disabled">
                            <a
                              href="#step3"
                              data-toggle="tab"
                              aria-controls="step3"
                              role="tab"
                            >
                              <span className="round-tab">3</span>
                              <i>Selesai</i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <form role="form" action="" className="login-box">
                        <div className="tab-content" id="main_form">
                          <div
                            className="tab-pane active"
                            role="tabpanel"
                            id="step1"
                          >
                            <p className="text-left font-weight-bold">
                              Buat Judul Kebutuhan
                            </p>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Judul Kebutuhan</label>
                                  <input
                                    className="form-control"
                                    id="jki"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Tanggal</label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="list-inline pull-right mt-3">
                              <li>
                                <Button
                                  type="link"
                                  className="default-btn next-step"
                                  href="/detailitems"
                                >
                                  + Buat
                                </Button>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudulKebutuhan;
