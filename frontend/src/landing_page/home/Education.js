import React from 'react';
import '../css/Education.css';

function Education() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-6 text-center mb-4 mb-md-0 ">
            <img
              src="media/images/education.svg" 
              alt="Varsity illustration"
              className="img-fluid rounded"
              style={{ maxWidth: '80%' }}
            />
          </div>

          
          <div className="col-md-6 text-center text-md-start hover-lift glass-effect">
            <h1 className="fw-bold mb-4">Free and open market education</h1>
            <p className="text-muted">
              Varsity, the largest online stock market education book in the world, covering everything from the basics to advanced trading.
            </p>
            <a href="/" className="edu-link d-inline-block mb-4">
              Varsity 
            </a>

            <p className="text-muted">
              TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="/" className="edu-link d-inline-block">
              TradingQ&A 
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
