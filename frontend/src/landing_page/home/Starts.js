import React from 'react';

function Starts() {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-4">
        
        {/* LEFT SIDE CONTENT */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 px-4">
          <h1 className="fs-2 mb-4 fw-semibold">Trust with confidence</h1>

          <h2 className="fs-4 mt-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4 mt-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions — we actively help you do better with your money.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE & LINKS */}
        <div className="col-lg-6 col-md-12 text-center px-4">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%", height: "auto" }}
          />
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="" className="text-decoration-none fw-semibold">
              Explore our Products <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
            <a href="" className="text-decoration-none fw-semibold">
              Try Kite demo <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starts;