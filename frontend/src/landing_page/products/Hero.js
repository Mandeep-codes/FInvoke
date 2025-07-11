import React from "react";
import "../css/About.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="row my-5 mt-5">
          <h1 className="hero-heading fs-2 text-center">
            Technology
          </h1>
          <h3 className="text-center text-muted mt-2">Sleek, modern and intutive trading platforms</h3>
          <p className="text-center">Check out our <a href='/' style={{textDecoration:"none"}}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
