import React, { useState } from 'react';
import 'pages/Kebutuhan/style.css';
import Button from 'elements/Button';
import { auth, db } from 'config/Firebase';

export const DetailItems = (props) => {
  const [estimasiPengeluaran, setEstimasiPengeluaran] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [kuantitas, setKuantitas] = useState('');

  const [Error, setError] = useState('');

  const handleDeatailItemSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('detailItem' + id)
          .add({
            estimasiPengeluaran: estimasiPengeluaran,
            namaBarang: namaBarang,
            kuantitas: kuantitas,
          })
          .then(() => {
            setEstimasiPengeluaran('');
            setNamaBarang('');
            setKuantitas('');
            props.history.push('/selesai');
          })
          .catch((err) => setError(err.message));
      } else {
        console.log('user is not signed in to add database');
      }
    });
  };

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
                          <li role="presentation" className="disabled">
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
                          <li role="presentation" className="active">
                            <Button
                              type="link"
                              isExternal
                              href="#step2"
                              data-toggle="tab"
                              aria-controls="step2"
                              role="tab"
                            >
                              <span className="round-tab bg-dua">2</span>
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
                        className="login-box"
                        onSubmit={handleDeatailItemSubmit}
                      >
                        <div className="tab-content" id="main_form">
                          <div
                            className="tab-pane active"
                            role="tabpanel"
                            id="step1"
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="font-weight-bold">
                                    Judul Kebutuhan
                                  </label>
                                  <input
                                    className="form-control bg-gray-200"
                                    id="jki"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    disabled
                                  />
                                </div>
                                <h5 className="text-left font-weight-bold">
                                  Detail Items
                                </h5>
                                <div className="form-group">
                                  <label>Estimasi Pengeluaran</label>
                                  <input
                                    className="form-control"
                                    id="jki"
                                    type="text"
                                    required
                                    onChange={(e) =>
                                      setEstimasiPengeluaran(e.target.value)
                                    }
                                    value={estimasiPengeluaran}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Nama Barang</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    required
                                    onChange={(e) =>
                                      setNamaBarang(e.target.value)
                                    }
                                    value={namaBarang}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Kuantitas</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    required
                                    onChange={(e) =>
                                      setKuantitas(e.target.value)
                                    }
                                    value={kuantitas}
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="list-inline pull-right mt-3">
                              <li>
                                <Button
                                  type="submit"
                                  className="default-btn next-step"
                                  href="/selesai"
                                >
                                  Simpan
                                </Button>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </form>
                      {Error && <div className="error-msg">{Error}</div>}
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

export default DetailItems;
