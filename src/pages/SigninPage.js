import React, { useState } from 'react';
import HeroSignin from 'parts/HeroSignin';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';
import { auth } from 'config/Firebase';

export const SigninPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [resetError, setResetError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setLoginError('');
        props.history.push('/');
      })
      .catch((err) => setLoginError(err.message));
  };

  function sendPasswordReset() {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Please check your email...');
      })
      .catch((error) => setResetError(error.message));
    // [END auth_send_password_reset]
  }

  return (
    <Fade top delay={300}>
      <div>
        <div class="row d-flex justify-content-center">
          <div class="col bg-primary">
            <Fade bottom delay={500}>
              <HeroSignin />
            </Fade>
          </div>

          <div class="col bg-white d-flex justify-content-center">
            <Fade bottom delay={500}>
              <div classNameName="container ml-5">
                <div style={{ marginTop: 150 }}>
                  <h1 className="text-gray-800 font-weight-light">
                    Masuk Ke Akun Anda
                  </h1>
                </div>
                <div classNameName="text-gray-600 font-weight-lighter ">
                  <h3 className="text-gray-600 font-weight-normal my-3">
                    Masuk Dengan Data Yang Anda Massukkan Saat <br />{' '}
                    Pendaftaran Akun
                  </h3>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label for="Name" className="mb-0">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Alamat Email
                      </h3>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1" className="mb-0">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Kata Sandi
                      </h3>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="text-right" style={{ width: 420 }}>
                    <Button
                      className="cursor-pointer"
                      onClick={(e) => sendPasswordReset(email)}
                      type="link"
                    >
                      {' '}
                      Lupa kata sandi?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="btn my-3"
                    isPrimary
                    style={{
                      width: 420,
                      height: 45,
                    }}
                  >
                    Masuk
                  </Button>
                </form>
                {loginError && <div className="error-msg">{loginError}</div>}
                {resetError && <div className="error-msg">{resetError}</div>}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};
