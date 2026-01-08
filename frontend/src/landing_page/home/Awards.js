import React from "react";

function Awards() {
  return (
    <section className="awards-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 animate-fade-in">
            <img
              src="media/images/largestBroker.svg"
              alt="Award"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxWidth: "320px", width: "100%", height: "auto" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6 animate-slide-in">
            <h1 className="fw-bold mb-3 text-gradient">
              Largest Stock Broker in India 🇮🇳
            </h1>
            <p className="text-muted fs-5 mb-4">
              Over <strong>2 million+</strong> Zerodha clients contribute to more
              than <strong>15%</strong> of all retail order volumes in India
              daily by trading and investing in:
            </p>

            {/* Investment Categories */}
            <div className="row mb-4">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-chart-line text-primary me-2"></i>
                    <span>Futures & Options</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-balance-scale text-success me-2"></i>
                    <span>Commodity Derivatives</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-coins text-warning me-2"></i>
                    <span>Currency Derivatives</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-building text-danger me-2"></i>
                    <span>Stocks & IPOs</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-seedling text-success me-2"></i>
                    <span>Direct Mutual Funds</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="fa fa-landmark text-info me-2"></i>
                    <span>Bonds & Govt. Securities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Press Logos */}
            <div className="text-center text-md-start">
              <img
                src="media/images/pressLogos.png"
                alt="Press Logos"
                className="img-fluid press-logos"
                style={{ maxWidth: "420px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        /* Background */
        .awards-section {
          background: linear-gradient(135deg, #f8fbff, #ffffff);
          overflow: hidden;
        }

        /* Gradient Text */
        .text-gradient {
          background: linear-gradient(90deg, #007bff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Fade & Slide Animations */
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
          opacity: 0;
        }
        .animate-slide-in {
          animation: slideIn 1.2s ease forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Press Logos Hover */
        .press-logos {
          transition: transform 0.3s ease;
        }
        .press-logos:hover {
          transform: scale(1.05);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .text-gradient {
            font-size: 1.5rem;
          }
          .fs-5 {
            font-size: 1rem;
          }
          .press-logos {
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}

export default Awards;