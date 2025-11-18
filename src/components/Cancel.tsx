// Cancel.tsx - Payment Cancellation Page
import React from 'react';
import './Cancel.css';

const Cancel: React.FC = () => {
  return (
    <section className="cancel-page">
      <div className="cancel-container">
        <div className="cancel-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>

        <h1 className="cancel-title">Payment Cancelled</h1>

        <p className="cancel-message">
          Your payment was cancelled and no charges were made to your account.
        </p>

        <p className="cancel-submessage">
          If you encountered any issues or have questions, please feel free to contact us.
          We're here to help!
        </p>

        <div className="cancel-buttons">
          <a
            href="/#order"
            className="cancel-btn cancel-btn-primary"
          >
            Try Again
          </a>

          <a
            href="/"
            className="cancel-btn cancel-btn-secondary"
          >
            Return to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
