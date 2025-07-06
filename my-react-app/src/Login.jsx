import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import './Login.css';
import logo from './assets/logo.png'; // Ensure the logo path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      setMessage({ type: 'success', text: '✅ Login successful! Welcome.' });
    } else {
      setMessage({ type: 'danger', text: '❌ Please enter both email and password.' });
    }
  };

  return (
    <section className="h-100 gradient-form">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                
                {/* Left side */}
                <div className="col-lg-6">
                  <div className="card-body p-3 mx-md-2">
                    
                    <div className="text-center">
                      <img
                        src={logo}
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Be Big</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>

                      {message && (
                        <Alert variant={message.type} className="mt-3">
                          {message.text}
                        </Alert>
                      )}

                      <div className="text-center pt-4 mb-4 pb-4">
                        <button
                          type="button"
                          className="btn btn-block btn-danger"
                          onClick={handleLogin}
                        >
                          Log in
                        </button>
                        <a className="text-muted ms-3" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-3">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => window.location.href = "/SignIn"}
                        >
                          Create new
                        </button>
                      </div>
                    </form>

                  </div>
                </div>

                {/* Right side */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-2 py-3 p-md-3 mx-md-2">
                    <h4 className="mb-3">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
