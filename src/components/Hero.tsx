// Hero.tsx - Hero/Home Section Component
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Shown only on small screens — desktop uses section background + overlay */}
      <div className="hero-visual" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-copy-panel">
        <div className="hero-content">
          <h1 className="hero-title">Finicky Felicia</h1>

          <p className="hero-subtitle">
            A delightful children’s book about learning to love healthy foods!
          </p>

          <p className="hero-description">
            Join Felicia on her journey from being a picky eater who only loves sweets to
            discovering the joy of vegetables and healthy foods.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary"
            >
              Buy on Amazon
            </a>

            <a
              href="https://www.barnesandnoble.com/w/finicky-felicia-narene-russell/1144045912"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              Barnes & Noble
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to learn more</span>
          <svg
            className="hero-scroll-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
