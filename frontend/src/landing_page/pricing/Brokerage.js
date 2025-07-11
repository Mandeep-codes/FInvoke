import React from "react";
import "../css/About.css";

function Brokerage() {
  return (
    <section className="py-5 border-top bg-white">
      <div className="container">
        <div className="row">
          {/* Left: Brokerage Info */}
          <div className="col-md-8">
            <h5 className="fw-bold text-primary mb-3">Brokerage calculator</h5>
            <ul className="text-muted small ps-3">
              <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
              </li>
              <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>
                If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
              </li>
            </ul>
          </div>

          {/* Right: Charges link */}
          <div className="col-md-4 d-flex flex-column align-items-start align-items-md-end mt-4 mt-md-0">
            <h5 className="fw-bold text-primary mb-2">List of charges</h5>
            <a href="/" className="text-decoration-none fw-semibold text-primary">
              View full list &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;

