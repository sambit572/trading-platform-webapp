import React from "react";

function Hero() {
  return (
    <div className="hero-section text-center text-md-start d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* Left Text Section */}
          <div className="col-12 col-md-6 mt-4 mt-md-0 animate-slide-in">
            <h1 className="display-5 fw-bold mb-3 text-gradient">
              Invest in Everything
            </h1>
            <p className="lead text-muted mb-4 fs-5">
              A powerful online platform to invest in stocks, derivatives, mutual funds, and more — all from one place.
            </p>
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale">
              Sign Up Now
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
            <img
              src="media/images/homeHero.png"
              alt="Hero"
              className="img-fluid hero-img animate-float"
            />
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        /* Background Gradient */
        .hero-section {
          background: linear-gradient(135deg, #eef7ff 0%, #f7faff 100%);
          overflow: hidden;
        }

        /* Gradient Text */
        .text-gradient {
          background: linear-gradient(90deg, #007bff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Button Hover */
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          box-shadow: 0 1rem 2rem rgba(0, 123, 255, 0.2);
        }

        /* Floating Animation */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* Slide-in Animation for Text */
        .animate-slide-in {
          animation: slideIn 1s ease forwards;
          opacity: 0;
        }
        @keyframes slideIn {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive Image */
        .hero-img {
          max-width: 90%;
          height: auto;
        }

        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem;
          }
          .btn-lg {
            font-size: 1rem;
            padding: 0.75rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;