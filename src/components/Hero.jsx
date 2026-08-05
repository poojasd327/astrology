import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: "url('/hero-bg-light.png')" }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">Sacred solutions for <br/>every life path</h1>
        <p className="hero-subtitle delay-1">
          Guided by 37+ years of legacy, illuminate your life's path with profound astrological insights and remedies at the Sri Guru Raghavendra Astro Center.
        </p>
        <div className="hero-actions delay-2">
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
