import React from 'react';
import './Achievements.css';

const achievements = [
  {
    image: "/1.webp",
    text: "DIVYA JYOTISHYA SEVA BY NATIONAL INTEGRITY CULTURAL ACADEMY"
  },
  {
    image: "/2.webp",
    text: "AWARD BY VISHWAKARMA INSTITUTE AND RESEARCH CENTER"
  },
  {
    image: "/3.webp",
    text: "AWARDED AT 11TH INTERNATIONAL PHYSIOLOGY, ASTRO, VASTU AND PALMISTRY CONFERENCE"
  },
  {
    image: "/4.webp",
    text: "RECOGNITION AS RENOWNED ASTROLOGER BY KARNATAKA CONGRESS COMMITTEE"
  }
];

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        
        {/* Header */}
        <div className="achievements-header animate-fade-in">
          <div className="section-badge">Awards & Recognition</div>
          <h2 className="section-title">
            Guruji's <span className="title-accent">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Honored and recognized by prestigious institutions across the country for profound knowledge and selfless service in the field of Astrology.
          </p>
        </div>

        {/* Grid */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div 
              className="achievement-card animate-fade-in" 
              key={index} 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="achievement-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.text} 
                  className="achievement-img"
                  loading="lazy"
                />
              </div>
              <div className="achievement-footer">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
