import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-text-top me-2 rounded-circle border border-warning shadow-sm"
            style={{ objectFit: 'cover' }}
          />
          Be Big Store
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Right side icons */}
          <ul className="navbar-nav d-flex flex-row align-items-center">
            {/* Notification */}
            <li className="nav-item me-3 position-relative">
              <a className="nav-link text-white" href="/notifications">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </a>
            </li>

            {/* Cart */}
            <li className="nav-item me-3 position-relative">
              <a className="nav-link text-white" href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
</svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </a>
            </li>

            {/* Profile dropdown */}
           <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle d-flex align-items-center text-white"
    href="#"
    role="button"
    id="userDropdown"  // Added for accessibility
    data-bs-toggle="dropdown"
    aria-expanded="false"
    aria-haspopup="true"  // Added for accessibility
  >
    <img
      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
      className="rounded-circle"
      height="35"
      width="35"  // Added for better image handling
      alt="User profile"  // More descriptive alt text
      loading="lazy"  // Added for performance
    />
  </a>
  <ul 
    className="dropdown-menu dropdown-menu-end bg-dark text-white shadow"
    aria-labelledby="userDropdown"  // Connects to the toggle button
  >
    <li>
      <a className="dropdown-item" href="/profile">
        <i className="fas fa-user me-2"></i>My Profile
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="/settings">
        <i className="fas fa-cog me-2"></i>Settings
      </a>
    </li>
    <li><hr className="dropdown-divider" /></li>
    <li>
      <a className="dropdown-item text-danger" href="/logout">
        <i className="fas fa-sign-out-alt me-2"></i>Logout
      </a>
    </li>
  </ul>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
