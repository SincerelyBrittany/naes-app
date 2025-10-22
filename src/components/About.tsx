// About.tsx - About Section Component
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Image/Visual Side */}
          <div className="about-image-side">
            <div className="about-image-wrapper">
              {/* Placeholder for book image - replace with actual image */}
              <div className="about-image-placeholder">
                {/* <svg className="book-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg> */}
                {/* <p className="placeholder-text">Book Image Here</p> */}
              </div>
              
              {/* Decorative elements */}
              <div className="about-decoration decoration-1"></div>
              <div className="about-decoration decoration-2"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content-side">
            <div className="about-content">
              <span className="about-label">About The Book</span>
              <h2 className="about-title">Finicky Felicia</h2>
              
              <div className="about-text">
                <p className="about-question">
                  Do you know a finicky eater?
                </p>
                
                <p className="about-description">
                  How about someone who doesn't like to eat anything healthy?
                </p>
                
                <p className="about-intro">
                  <strong>Well, let me introduce you to a little girl named Felicia.</strong>
                </p>
                
                <p className="about-story">
                  Felicia loves sweets and frowns upon foods that are good for her, 
                  including oatmeal! Finicky Felicia is a book about how she is surprised 
                  to taste vegetables while learning how important it is to eat vegetables.
                </p>
                
                <p className="about-cta">
                  Read more to learn how Finicky Felicia became less finicky!
                </p>
              </div>

              {/* Stats or Features */}
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">📚</div>
                  <div className="feature-text">
                    <h4>Perfect For Ages</h4>
                    <p>3-8 years old</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🥕</div>
                  <div className="feature-text">
                    <h4>Teaches About</h4>
                    <p>Healthy eating habits</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">❤️</div>
                  <div className="feature-text">
                    <h4>Parents Love</h4>
                    <p>Fun & educational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;