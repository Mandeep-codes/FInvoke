import React from "react";
import "../css/About.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container">
        {/* Heading */}
        <div className="row my-5">
          <h1 className="hero-heading fs-2 text-center">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>

        <div className="row align-items-start border-top pt-5">
          <div className="col-md-6 pe-md-5">
            <p>
              We started Finvoke in early 2025 with one mission — to make smart,
              modern investing accessible to every Indian. Our goal was to break
              down the traditional barriers of cost, complexity, and outdated
              tools that held investors back..
            </p>
            <p>
              With our intuitive platform and powerful technology stack, we’re
              creating a seamless experience for both new and seasoned
              investors.
            </p>

            <p>
              Today, thousands of users trust Finvoke to grow their wealth,
              track their portfolios, and stay ahead in an evolving financial
              world.
            </p>
          </div>

         
          <div className="col-md-6 ps-md-5">
            <p>
              Beyond investing, we’re building a thriving community through open
              education, expert insights, and transparent financial tools.
            </p>
            <p>
              <span className="highlight-blue">Finvoke Labs</span>, our R&D and
              innovation division, supports fintech startups and ideas shaping
              the future of finance in India.
            </p>
            <p>
              And we’re just getting started. Follow our journey on our blog,
              social platforms, or explore what the media is saying about
              Finvoke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
