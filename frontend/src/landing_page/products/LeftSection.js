import React from "react";
import "../css/LeftSection.css"; 

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center justify-content-between">
        
        {/* Product Image */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "85%" }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-6 text-center text-lg-start">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
            <a href={tryDemo} className="btn btn-primary px-4">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-secondary px-4">
              Learn More
            </a>
          </div>

          <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="store-badge"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="store-badge"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;

