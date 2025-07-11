import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer-section bg-white text-dark py-5 border-top">
      <div className="container">
        <div className="row g-5">

          {/* Brand & Social */}
          <div className="col-lg-3 col-md-6">
            <img src="media/images/logo.svg" alt="Finvoke Logo" width="140" className="mb-3" />
            <p className="text-muted small">
              © 2010 - 2025 <strong>Finvoke Inc.</strong><br />All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="/" className="footer-icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/" className="footer-icon"><i className="fa-brands fa-twitter"></i></a>
              <a href="/" className="footer-icon"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="/" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/">About</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Referral Program</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Media</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Contact</a></li>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Z-Blog</a></li>
              <li><a href="/">Charges</a></li>
              <li><a href="/">Downloads</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Open an Account</a></li>
              <li><a href="/">Fund Transfer</a></li>
              <li><a href="/">60 Day Challenge</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Legal and disclaimer */}
        <div className="text-muted small">
          <p>
            Finvoke Broking Ltd.: Member of NSE & BSE — SEBI Registration no.: INZ000031633. Depository services through Finvoke Securities Pvt. Ltd.
          </p>
          <p>
            Investments in securities are subject to market risks. Read all related documents carefully before investing.
          </p>
          <p>
            For support, contact us at <a href="mailto:support@finvoke.in" className="footer-link">support@finvoke.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



