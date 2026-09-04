// Hero.tsx - Hero/Home Section Component
import React from 'react';
import { AMAZON_URL, BARNES_URL } from '../config/site';
import { trackBuyClick } from '../lib/analytics';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
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
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary"
              onClick={() => trackBuyClick('amazon')}
            >
              Buy on Amazon
            </a>

            <a
              href={BARNES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
              onClick={() => trackBuyClick('barnes_noble')}
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
