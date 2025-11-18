// Success.tsx - Payment Success Page
import React from 'react';
import './Success.css';

const Success: React.FC = () => {
  return (
    <section className="success-page">
      <div className="success-container">
        <div className="success-icon">
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
            <polyline points="8 12 11 15 16 10"></polyline>
          </svg>
        </div>

        <h1 className="success-title">Payment Successful!</h1>

        <p className="success-message">
          Thank you for purchasing a signed copy of Finicky Felicia!
          Your order has been received and you will receive a confirmation email shortly.
        </p>

        <p className="success-submessage">
          We'll be in touch soon to arrange the personalization details for your signed copy.
        </p>

        <a
          href="/"
          className="success-btn"
        >
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default Success;
