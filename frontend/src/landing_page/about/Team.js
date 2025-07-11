import React from 'react';
import '../css/About.css'; // 
import founderImg from './me.jpeg'; 

function Team() {
  return (
    <section className="team-section py-5 border-top">
      <div className="container">
        <h2 className="text-center mb-5">People</h2>
        <div className="row align-items-center">
          
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={founderImg} alt="Founder" className="founder-img img-fluid rounded-circle shadow" />
            <h5 className="mt-3 mb-0 fw-semibold">Mandeep Nehra</h5>
            <p className="text-muted">Founder, CEO</p>
          </div>

          
          <div className="col-md-8">
            <p>
              Mandeep founded <strong>Finvoke</strong> in 2025 to transform how Indians invest — with smarter tools, cleaner design, and zero noise. What started as an idea in college quickly turned into a platform challenging outdated brokers.
            </p>
            <p>
              Finvoke focuses on simplicity, speed, and trust. Under Mandeep's leadership, the platform is helping young investors and experienced traders alike take control of their financial future.
            </p>
            <p>
              When he's not coding or shipping features, you'll find him reading tech blogs or sipping chai with the team.
            </p>
            <p>
              Connect on <a href="/" target="_blank" rel="noreferrer">Twitter</a> / <a href="/" target="_blank" rel="noreferrer">LinkedIn</a> / <a href="/">Finvoke Blog</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
