import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" style={{ padding: '0.75rem 2rem', backgroundColor: 'transparent' }}>
      <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.5rem', color: 'red', fontFamily: 'DAWN, Newsreader, serif' }}>DAWN</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
        <a className="nav-item nav-link active" href="#" style={{ marginRight: '1rem', color: 'red' }}>
          Category </a>
        <a className="nav-item nav-link" href="#" style={{ marginRight: '1rem', color: 'red' }}>Profile</a>
        <a className="nav-item nav-link" href="#" style={{ marginRight: '1rem', color: 'red' }}>Contact</a>
        <a className="nav-item nav-link" href="#" style={{ marginRight: '1rem', color: 'red' }}>Log Out</a>

        <a className="nav-item nav-link" href="#" tabIndex="-1" aria-disabled="true" style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </a>
        </div>
      </div>
      </nav>
    );
};

export default Nav;