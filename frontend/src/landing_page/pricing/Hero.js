import React from "react";
import "../css/About.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container">
        {/* Heading */}
        <div className="row my-5">
          <h1 className="hero-heading fs-2 text-center">
            Pricing
          </h1>
          <p className="text-center mt-2 text-muted">Free equilty investments and flat ₹20 traday and F&O trades </p>
        </div>

        <div className="row align-items-start border-top pt-5">
          <div className="col-4 pe-md-5">
            <img src="media/images/pricing0.svg" alt=""/>
            <h1 className="hero-heading fs-2 text-center">
            Free equity delivery
          </h1>
          <p className="text-center mt-2 text-muted">All equity delivery investments (NSE, BSE),<br></br>are absolutely free - ₹ 0 brokerage. </p>
            
          </div>
          <div className="col-4 pe-md-5">
            <img src="media/images/intradayTrades.svg" alt=""/>
            <h1 className="hero-heading fs-2 text-center">
            Intraday and F&O trades
          </h1>
          <p className="text-center mt-2 text-muted">Flat Rs. 20 or 0.03% (whichever is lower)<br></br> per executed order on intraday trades<br></br>across equity, currency, and commodity<br></br>          trades.</p>
            
          </div>
          <div className="col-4 pe-md-5">
            <img src="media/images/pricing0.svg" alt=""/>
            <h1 className="hero-heading fs-2 text-center">
            Free direct MF
          </h1>
          <p className="text-center mt-2 text-muted"> All equity direct mutual fund investments are<br></br>absolutely free - ₹ 0 commissions & DP<br></br> charges. </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
