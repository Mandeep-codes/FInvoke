import React from "react";
import './landing_page/css/Hero.css';

function NotFound() {
  return (
    <div className="hero-section py-5 mb-5 text-center bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <h1 className="fw-bold display-5 mb-3 text-dark">
              404 Not Found
            </h1>
            <p>Sorry, the page you are looking for does not exist. </p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;