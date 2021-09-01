import React from 'react';
import Button from 'elements/Button';
export const ContentLeft = () => {
  function handleClick(e) {
    e.preventDefault();
    // console.log(e);
    const status = e.target.getAttribute('status');
    var a = e.target.parentElement.parentElement.childNodes;
    var detail;
    var short;
    var n_check;
    var persen;
    var e_item;
    var e_item_cek;
    var e_progress;
    var cek_dulu = 0;
    var n_hiya_hiya;
    // console.log(cek_dulu);
    for (var i = 0; i < a.length; i++) {
      if (a[i].className == 'short-detail') {
        // console.log(a[i]);
        short = a[i];
        e_item = a[i].getElementsByClassName('n-item');
        e_item_cek = a[i].getElementsByClassName('n-check-item');
        e_progress = a[i].getElementsByClassName('progress-bar')[0];
      }
      if (a[i].className == 'detail-card') {
        detail = a[i];
        n_hiya_hiya = a[i].querySelectorAll(
          'input[type="checkbox"]:checked'
        ).length;
        // console.log('okey panjangnya n_hiya_hiya => '+n_hiya_hiya);
        n_check = a[i].querySelectorAll('input[type="checkbox"]').length;
        // console.log(n_hiya_hiya);
        persen = parseInt((n_hiya_hiya / n_check) * 100);
        // console.log("persen => "+persen);
      }
    }
    // console.log(persen);
    // console.log('okey panjangnya e_item_cek => '+e_item_cek.length);
    // console.log(e_item_cek);
    // console.log(e_progress);
    console.log(status);
    if (status == 'detail') {
      // console.log(short);
      e.target.children[0].classList.remove('fa-angle-up');
      e.target.children[0].classList.add('fa-angle-down');
      for (var i = 0; i < e_item.length; i++) {
        // console.log(e_item[i]);
        e_item[i].innerHTML = n_check;
      }
      for (var i = 0; i < e_item_cek.length; i++) {
        e_item_cek[i].innerHTML = n_hiya_hiya;
      }
      e_progress.style.width = persen + '%';
      short.style.display = 'block';
      detail.style.display = 'none';
      e.target.setAttribute('status', 'short');
    } else if (status == 'short') {
      detail.style.display = 'block';
      short.style.display = 'none';
      e.target.children[0].classList.remove('fa-angle-down');
      e.target.children[0].classList.add('fa-angle-up');
      e.target.setAttribute('status', 'detail');
    } else {
      console.log('status e salah');
    }
    // console.log(a);
  }
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
                onClick={handleClick}
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
