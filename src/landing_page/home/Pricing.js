import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center text-center text-md-start">
        {/* Left Section */}
        <div className="col-12 col-md-5 mb-5 mb-md-0">
          <h1 className="fw-bold mb-3 text-gradient">Unbeatable Pricing</h1>
          <p className="text-muted mb-4 fs-5">
            We pioneered the concept of discount broking and price transparency in India.
            Enjoy flat fees, zero hidden charges, and complete control over your trades.
          </p>
          <a
            href="#"
            className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
          >
            See Pricing <i className="fa fa-long-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-7">
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-10 col-sm-6 col-lg-5">
              <div className="card border-0 shadow-lg p-4 rounded-4 h-100 pricing-card position-relative overflow-hidden hover-scale">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-light-gradient opacity-10"></div>
                <div className="card-body position-relative">
                  <h1 className="fw-bold mb-2 text-primary">&#8377;0</h1>
                  <p className="mb-3 fs-5">
                    Free equity delivery and <br /> direct mutual funds
                  </p>
                  <i className="fa fa-check-circle text-success fs-3"></i>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-10 col-sm-6 col-lg-5">
              <div className="card border-0 shadow-lg p-4 rounded-4 h-100 pricing-card position-relative overflow-hidden hover-scale">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-blue-gradient opacity-10"></div>
                <div className="card-body position-relative">
                  <h1 className="fw-bold mb-2 text-primary">&#8377;20</h1>
                  <p className="mb-3 fs-5">Intraday and F&O</p>
                  <i className="fa fa-bolt text-warning fs-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #007bff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
        }

        .bg-light-gradient {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }

        .bg-blue-gradient {
          background: linear-gradient(135deg, #cfe2ff, #e3f2fd);
        }
      `}</style>
    </div>
  );
}

export default Pricing;