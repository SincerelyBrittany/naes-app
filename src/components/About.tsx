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
              {/* Real <img> (not a CSS background) so search engines can index the cover */}
              <div className="about-image-placeholder">
                <img
                  src="/img/finicky-felicia-book-cover.jpg"
                  alt="Cover of the children's book Finicky Felicia by Narene Russell, showing Felicia frowning at a plate of broccoli"
                  width={439}
                  height={595}
                  loading="lazy"
                  className="about-cover-img"
                />
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
                
                <p className="about-story">
                  Felicia and her family are Black, as is every character in the story.
                  It’s a book where Black children can see themselves at the
                  kitchen table, and where any child can relate to Felicia’s battle with
                  vegetables.
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