import React from "react";
import "../css/LeftSection.css";

function RightSection({
  imageURL,
  productName,
  productDescription,

  learnMore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Content */}
        <div className="col-lg-6 text-center text-lg-start">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
            <a href={learnMore} className="btn btn-outline-secondary px-4">
              Learn More
            </a>
          </div>
        </div>

        {/* Product Image */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "85%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
