import React from 'react';
import './Cards.css';

const consultations = [
  {
    title: 'Horoscope Analysis',
    icon: 'fa-star-and-crescent',
    description: "A deep dive into your natal chart (Kundli). We decode planetary alignments, Dashas, and Yogas to reveal karmic patterns, career trajectories, and relationship dynamics, offering clarity for your life's true purpose.",
    linkText: 'Explore Astrology'
  },
  {
    title: 'Palmistry',
    icon: 'fa-hand-sparkles',
    description: "Read the map etched in your hands. Hast Samudrika Shastra reveals inherent traits, life longevity, and immediate future milestones through lines and mounts.",
    linkText: 'Read My Palms'
  },
  {
    title: 'Vastu Shastra',
    icon: 'fa-house-chimney-window',
    description: "Harmonize your living and working spaces with cosmic energies. Correct directional flaws to invite prosperity, peace, and positive vibrations into your environment without major demolitions.",
    linkText: 'Consult Vastu'
  },
  {
    title: 'Face Reading',
    icon: 'fa-face-smile',
    description: "Mukha Samudrika. Understand personality nuances, hidden talents, and current mental states by analyzing facial structures and expressions to navigate interpersonal relationships better.",
    linkText: 'Book Reading'
  }
];

export default function VedicConsultations() {
  return (
    <section id="consultations" className="consultations-section">
      <div className="vedic-bg-overlay" style={{ backgroundImage: "url('/kundali-bg.png')" }}></div>
      <div className="container">
        <h2 className="section-title">Vedic Consultations</h2>
        <p className="section-subtitle">Profound insights guided by tradition.</p>
        
        <div className="cards-grid">
          {consultations.map((item, index) => (
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
