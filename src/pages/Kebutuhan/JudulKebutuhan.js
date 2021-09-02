import React, { useState } from 'react';
import 'pages/Kebutuhan/style.css';
import Button from 'elements/Button';
import { auth, db } from 'config/Firebase';

export const JudulKebutuhan = (props) => {
  const [kebutuhan, setKebutuhan] = useState('');
  const [tgl, setTgl] = useState('');

  const [Error, setError] = useState('');

  const handleKebutuhanSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('judulKebutuhan')
          .add({
            judulKebutuhan: kebutuhan,
            tgl: tgl,
          })
          .then(() => {
            setKebutuhan('');
            setTgl('');
            props.history.push('/detailitems');
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
                        className="login-box"
                        onSubmit={handleKebutuhanSubmit}
                      >
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
                                    required
                                    onChange={(e) =>
                                      setKebutuhan(e.target.value)
                                    }
                                    value={kebutuhan}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Tanggal</label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    required
                                    onChange={(e) => setTgl(e.target.value)}
                                    value={tgl}
                                  />
                                </div>
                              </div>
                            </div>
                            <ul className="list-inline pull-right mt-3">
                              <li>
                                <Button
                                  type="submit"
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

export default JudulKebutuhan;
