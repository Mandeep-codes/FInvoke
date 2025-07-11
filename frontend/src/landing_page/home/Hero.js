import React from 'react';
import 'animate.css';
import '../css/Hero.css'; 

function Hero() {
  return (
    <div className="hero-section py-5 mb-5 text-center bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            
            <img
              src="media/images/homefront.png"
              alt="HeroImg"
              className="img-fluid rounded mb-4 animate__animated animate__fadeInDown"
              style={{ maxWidth: '280px' }}
            />

            
            <h1 className="fw-bold display-5 mb-3 text-dark animate__animated animate__fadeInUp animate__delay-1s">
              Where smart investing begins
            </h1>

            
            <button
              className="btn custom-btn btn-lg mt-3 animate__animated animate__bounceIn animate__delay-2s"
              style={{
                opacity: 0,
                animationFillMode: 'forwards',
                animationDuration: '1s',
              }}
            >
              Join Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

