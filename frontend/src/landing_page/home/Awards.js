import React from 'react';
import '../css/Award.css'; 

function Awards() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-6 mb-4 mb-md-0 text-center ">
            <img
              src="media/images/largestBroker.svg"
              alt="Largest Broker"
              className="img-fluid rounded"
              style={{ maxWidth: '80%'}}
            />
          </div>

          
          <div className="col-md-6 text-center text-md-start hover-lift glass-effect">
            <h1 className="fw-bold mb-3">Smart Investing. Simplified.</h1>
            <p className="text-muted mb-4">
              Trade, invest, and build wealth — all with zero hidden fees, real-time insights, and tools designed for you:
            </p>

            <div className="row mb-4">
              <div className="col-6">
                <ul>
                  <li className="mb-2"> Futures and Options</li>
                  <li className="mb-2"> Commodity Derivatives</li>
                  <li className="mb-2"> Currency Derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="mb-2"> Stocks & IPOs</li>
                  <li className="mb-2"> Direct Mutual Funds</li>
                  <li className="mb-2"> Bonds & Govt. Securities</li>
                </ul>
              </div>
            </div>

            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: '90%', transition: 'transform 0.3s ease' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;



