import React from 'react';
import '../css/Stats.css'; 


function Stats() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-6 text-center text-md-start hover-lift glass-effect mb-4 mb-md-0">
            <h1 className="fw-bold mb-4">Trust with Confidence</h1>

            <ul className="list-unstyled">
              <li className="mb-4">
                <h5 className="fw-semibold">Customer-first always</h5>
                <p className="text-muted">
                  That’s why crores of customers trust Finvoke with investments worth thousands of crores.
                </p>
              </li>
              <li className="mb-4">
                <h5 className="fw-semibold">Built with technology</h5>
                <p className="text-muted">
                  Fast, stable platforms crafted in-house for a seamless investing experience.
                </p>
              </li>
              <li className="mb-4">
                <h5 className="fw-semibold">Transparent & Secure</h5>
                <p className="text-muted">
                  No hidden fees. Enterprise-grade security. 100% regulatory compliance.
                </p>
              </li>
            </ul>

            <div className="d-flex gap-4 flex-wrap">
              <a href="/" className="stat-link">Explore our products</a>
              <a href="/" className="stat-link">Try Kite demo</a>
            </div>
          </div>

          
          <div className="col-md-6 text-center">
            <img
              src="media/images/ecosystem.png"
              alt="eco"
              className="img-fluid rounded"
              style={{ maxWidth: '90%' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;
