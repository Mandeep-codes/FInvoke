import React from "react";
import './css/Hero.css';

function OpenAccount() {
  return (
    <div className="hero-section py-5 mb-5 text-center bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <h1 className="fw-bold display-5 mb-3 text-dark">
              Open a Finvoke account
            </h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades </p>

            <button
              className="btn custom-btn btn-lg mt-3 "
            >
              Sign up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
