import React from 'react';
import '../css/LeftSection.css';

function Universe() {
  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-3">The Finvoke Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our partner platforms.
      </p>

      <div className="row g-4 justify-content-center">
        {/* Row 1 */}
        <div className="col-md-4">
          <img src="media/images/smallcaseLogo.png" alt="Platform 1" className="img-fluid mb-2 universe-logo" />
          <p className="text-muted small">Thematic investment platform</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/streakLogo.png" alt="Platform 2" className="img-fluid mb-2 universe-logo" />
          
          <p className="text-muted small">Algo & strategy platform</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/sensibullLogo.svg" alt="Platform 3" className="img-fluid mb-2 universe-logo" />
          
          <p className="text-muted small">Options trading platform</p>
        </div>

        {/* Row 2 */}
        <div className="col-md-4">
          <img src="media/images/zerodhaFundhouse.png" alt="Platform 4" className="img-fluid mb-2 universe-logo" />
         
          <p className="text-muted small">Asset management</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/goldenpiLogo.png" alt="Platform 5" className="img-fluid mb-2 usmallcaseLogoniverse-logo" />
          
          <p className="text-muted small">Bonds trading platform</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/dittoLogo.png" alt="Platform 6" className="img-fluid mb-2 universe-logo" />
          
          <p className="text-muted small">Insurance & investment gateway</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-5">
        <a href="/" className="btn btn-primary px-4 py-2">Sign up now</a>
      </div>
    </section>
  );
}

export default Universe;

