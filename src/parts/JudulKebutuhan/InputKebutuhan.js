import React from 'react';
import 'parts/JudulKebutuhan/style.css';
import Button from 'elements/Button';

export const InputKebutuhan = () => {
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

                      <form
                        role="form"
                        action="index.html"
                        className="login-box"
                      >
                        <div className="tab-content" id="main_form">
                          <div
                            className="tab-pane active"
                            role="tabpanel"
                            id="step1"
                          >
                            <p className="text-left">Buat Judul Kebutuhan</p>
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
                            <ul className="list-inline pull-right">
                              <li>
                                <button
                                  type="button"
                                  className="default-btn next-step"
                                >
                                  + Buat
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" role="tabpanel" id="step2">
                            <p className="text-left">Judul Kebutuhan</p>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control out"
                                    id="jko"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <hr />
                              <div className="col-md-12">
                                <p className="text-left mt-2">Detail Item</p>
                                <div className="form-group">
                                  <label>Estimasi Pengeluaran</label>
                                  <input
                                    className="form-control"
                                    id="ep"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Nama Barang</label>
                                  <input
                                    className="form-control"
                                    id="nb"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Kuantitas</label>
                                  <input
                                    className="form-control"
                                    id="kt"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Harga Barang</label>
                                  <input
                                    className="form-control"
                                    id="hb"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Catatan</label>
                                  <textarea
                                    className="form-control"
                                    id="ctt"
                                    name="name"
                                    rows="4"
                                    cols="50"
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-4">
                                <button
                                  type="button"
                                  className="default-btn prev-step"
                                >
                                  Kembali
                                </button>
                              </div>
                              <div
                                className="
                                  col-md-4
                                  ml-auto
                                  d-flex
                                  justify-content-end
                                "
                              >
                                <button
                                  type="button"
                                  className="default-btn next-step"
                                >
                                  Lanjutkan
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" role="tabpanel" id="step3">
                            <p className="text-left">Judul Kebutuhan</p>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control out"
                                    id="jko2"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <hr />
                              <div className="col-md-12">
                                <div className="row mb-4">
                                  <div className="col-md-4">
                                    <p className="text-left mt-3">Item</p>
                                  </div>
                                  <div
                                    className="
                                      col-md-6
                                      ml-auto
                                      d-flex
                                      justify-content-end
                                    "
                                  >
                                    <a
                                      href="#listone"
                                      data-toggle="collapse"
                                      aria-expanded="false"
                                      aria-controls="listone"
                                    >
                                      <button
                                        type="button"
                                        className="default-btn tambah"
                                        data-text-swap="Tambah"
                                        data-text-original="Tutup"
                                      >
                                        Tambah
                                      </button>
                                    </a>
                                  </div>
                                </div>
                                <div className="collapse" id="listone">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Nama Barang</label>
                                        <input
                                          className="form-control"
                                          id="nb2"
                                          type="text"
                                          name="name"
                                          placeholder=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Kuantitas</label>
                                        <input
                                          className="form-control"
                                          id="kt2"
                                          type="text"
                                          name="name"
                                          placeholder=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Harga Barang</label>
                                        <input
                                          className="form-control"
                                          id="hb2"
                                          type="text"
                                          name="name"
                                          placeholder=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Catatan</label>
                                        <textarea
                                          className="form-control"
                                          id="ctt2"
                                          name="name"
                                          rows="4"
                                          cols="50"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="list-inline pull-right">
                                    <li>
                                      <button
                                        type="button"
                                        className="default-btn tambah2"
                                      >
                                        + Tambah
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="dropdown drop-d">
                                    <a
                                      className="dropdown-toggle"
                                      href="#"
                                      role="button"
                                      id="dropdownMenuLink"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuLink"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="box-control" id="list"></div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-8">
                                <label className="text-left">
                                  Total Estimasi Pengeluaran
                                </label>
                              </div>
                              <div
                                className="
                                  col-md-4
                                  ml-auto
                                  d-flex
                                  justify-content-end
                                "
                                id="rp"
                              ></div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <button
                                  type="button"
                                  className="default-btn prev-step"
                                >
                                  Kembali
                                </button>
                              </div>
                              <div
                                className="
                                  col-md-4
                                  ml-auto
                                  d-flex
                                  justify-content-end
                                "
                              >
                                <button
                                  type="button"
                                  className="default-btn next-step"
                                >
                                  Simpan
                                </button>
                              </div>
                            </div>
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

export default InputKebutuhan;
