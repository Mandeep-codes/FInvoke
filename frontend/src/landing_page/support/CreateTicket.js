import React from 'react';

function CreateTicket() {
     return (
    <section className="py-5 bg-white border-top">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">To create a ticket, select a relevant topic</h2>
        </div>

        {/* Support Categories */}
        <div className="row gy-5">
          {/* Column 1 */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-user-plus me-2 text-primary"></i> Account Opening
            </h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="/" className="text-primary text-decoration-none">Online Account Opening</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Offline Account Opening</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
              <li><a href="/" className="text-primary text-decoration-none">NRI Account Opening</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Charges at Finvoke</a></li>
              <li><a href="/" className="text-primary text-decoration-none">IDFC FIRST Bank 3-in-1 Account</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Getting Started</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-user-gear me-2 text-primary"></i> Your Finvoke Account
            </h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="/" className="text-primary text-decoration-none">Login Credentials</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Account Modification and Segment Addition</a></li>
              <li><a href="/" className="text-primary text-decoration-none">DP ID and Bank Details</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Your Profile</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Transfer and Conversion of Shares</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">
              <i className="fa-solid fa-chart-column me-2 text-primary"></i> Trading & Tools
            </h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="/" className="text-primary text-decoration-none">Margin/Leverage, Product & Order Types</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Finvoke Web & Mobile</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Trading FAQs</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Corporate Actions</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Sentinel</a></li>
              <li><a href="/" className="text-primary text-decoration-none">API Access</a></li>
              <li><a href="/" className="text-primary text-decoration-none">Other Tools & Platforms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
