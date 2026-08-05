import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="bg-glow" style={{ top: '10%', right: '-10%' }}></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-frame glass-panel">
              <img src="/pandith-portrait.png" alt="Pandith Ramesh Shastri" className="about-img" />
              <div className="about-experience">
                <span className="exp-number">37+</span>
                <span className="exp-text">Years of<br/>Legacy</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Meet Pandith Ramesh Shastri</h2>
            <p className="about-desc">
              Pandith Ramesh Shastri is a renowned astrologer in Bangalore, trusted by thousands for his accurate astrological guidance and personalized solutions. With years of expertise in Vedic astrology, palm reading, and face reading, he helps individuals overcome challenges related to marriage, love, career, business, finances, family, and children.
            </p>
            <p className="about-desc">
              His practical approach, deep understanding, and effective remedies have helped many find clarity, confidence, and peace of mind. If you're looking for a reliable astrologer in Bengaluru to guide you through life's uncertainties, Pandith Ramesh Shastri is here to help you move forward with confidence.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-star"></i></div>
                <span>Recommended Astrologer</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-wallet"></i></div>
                <span>Affordable fees</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-compass"></i></div>
                <span>Authentic guidance</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-certificate"></i></div>
                <span>Certified vedic expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
