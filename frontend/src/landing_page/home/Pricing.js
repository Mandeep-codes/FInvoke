import React from 'react';
import '../css/Pricing.css'; 

function Pricing() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-5 text-center text-md-start hover-lift glass-effect mb-4 mb-md-0">
            <h1 className="fw-bold mb-4">Unbeatable Pricing</h1>
            <p className="text-muted mb-3">
              We pioneered the concept of discount broking and price transparency in India.
              Flat fees. No hidden charges.
            </p>
            <a href="/" className="pricing-link">See Pricing </a>
          </div>

          
          <div className="col-md-7">
            <div className="row text-center g-4">

              <div className="col-sm-6">
                <div className="p-4 border rounded h-100 ">
                  <h1 className="text-success fw-bold">₹0</h1>
                  <p className="text-muted mb-0">Free equity delivery and direct mutual funds</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-4 border rounded h-100 ">
                  <h1 className="text-primary fw-bold">₹20</h1>
                  <p className="text-muted mb-0">Intraday and F&O trades</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
