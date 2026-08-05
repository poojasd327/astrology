import React from 'react';
import './Cards.css';

const guidance = [
  {
    title: 'Career & Job Guidance',
    icon: 'fa-arrow-trend-up',
    description: "Overcome professional obstacles, job instability, and career stagnation with astrological insights tailored to your vocational path.",
    linkText: 'Explore Career Path'
  },
  {
    title: 'Love & Relationships',
    icon: 'fa-heart',
    description: "Find harmony and resolve emotional conflicts. Specialized guidance for marriage delays, partner compatibility, and restoring love in your life.",
    linkText: 'Consult for Love'
  },
  {
    title: 'Vashikarna Removal',
    icon: 'fa-shield-halved',
    description: "Release yourself from negative influences and spiritual blockages. Proven Vedic remedies to restore your natural energy and mental peace.",
    linkText: 'Seek Protection'
  }
];

export default function SpiritualGuidance() {
  return (
    <section id="guidance">
      <div className="bg-glow" style={{ bottom: '0', left: '-10%' }}></div>
      <div className="container">
        <h2 className="section-title">Specialized Spiritual <span className="title-accent">Guidance</span></h2>
        <p className="section-subtitle">Targeted remedies for specific life challenges.</p>
        
        <div className="cards-grid cols-3">
          {guidance.map((item, index) => (
            <div className="card glass-panel" key={index}>
              <div className="card-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <a href="#contact" className="btn-link">
                {item.linkText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
