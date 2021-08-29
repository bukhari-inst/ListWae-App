import React from 'react';
import Hero from 'parts/Hero';
import Button from 'elements/Button';

export const SignupPage = (props) => {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col bg-primary">
          <Hero />
        </div>

        <div className="col bg-white d-flex justify-content-center">
          <div classNameName="container ml-5">
            <div
              classNameName="text-gray-800 font-weight-normal"
              style={{ fontSize: 24, marginTop: 150 }}
            >
              Daftarkan akun anda
            </div>
            <div
              classNameName="text-gray-800 font-weight-normal "
              style={{ fontSize: 18, marginTop: 8, marginBottom: 16 }}
            >
              Silahkan isi form pendaftaran untuk masuk ke akun anda
            </div>
            <form>
              <div className="form-group">
                <label for="Name">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Alamat Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="Name">Nomor Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Kata Sandi</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <Button
                type="submit"
                className="btn"
                isPrimary
                style={{
                  width: 420,
                  height: 45,
                  marginTop: 16,
                  marginBottom: 15,
                }}
              >
                Daftar
              </Button>
              <div className="text-center" style={{ width: 420 }}>
                Sudah mempunyai akun?
                <span>
                  <Button to="" type="link">
                    {' '}
                    Masuk
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
