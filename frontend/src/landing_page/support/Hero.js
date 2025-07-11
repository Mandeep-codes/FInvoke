import React from 'react';
import '../css/SupportHero.css';

function Hero() {
  return (
    <section className="support-hero-section">
      <div className="container">
        <div className="row align-items-start">

          {/* Left Side - Search */}
          <div className="col-md-8 mb-4">
            <h6 className="label">Support Portal</h6>
            <h2 className="title">
              Search for an answer or browse help topics <br />to create a ticket
            </h2>

            <input
              type="text"
              className="search-box"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="quick-links">
              <a href="/">Track account opening</a>
              <a href="/">Track segment activation</a>
              <a href="/">Intraday margins</a>
              <a href="/">Kite user manual</a>
            </div>
          </div>

          {/* Right Side - Featured */}
          <div className="col-md-4 featured-box">
            <div className="featured-header">
              <h6>Featured</h6>
              <a href="/" className="track-ticket">Track Tickets</a>
            </div>
            <ol className="featured-list">
              <li>
                <a href="/">Current Takeovers and Delisting – January 2024</a>
              </li>
              <li>
                <a href="/">Latest Intraday leverages – MIS & CO</a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
