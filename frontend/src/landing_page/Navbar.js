import React from 'react';
import './css/Navbar.css'; 
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg finvoke-navbar px-3 py-2">
      <div className="container">
        
        <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
          <img
            src="media/images/logo.svg"
            alt="Finvoke"
            width="32"
            height="32"
            className="me-2 logo-hover"
          />
          <span className="brand-text">Finvoke</span>
        </a>

        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 text-end">
            {['Signup', 'About', 'Products', 'Pricing', 'Support'].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link cool-link" to={`/${item.toLowerCase()}`}>{item}</Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


