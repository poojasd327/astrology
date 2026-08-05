import React from 'react';
import { openBookingModal } from './BookingModal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: "url('/hero section-1.png')" }}></div>
      <div className="hero-overlay"></div>

      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">Sacred Solutions for <br />Every Life Path</h1>
        <p className="hero-subtitle delay-1">
          Guided by 37+ years of legacy, illuminate your life's path with profound astrological insights and remedies at the Sri Guru Raghavendra Astro Center.
        </p>
        <div className="hero-actions delay-2">
          <button className="btn-primary" onClick={openBookingModal}>Book Consultation</button>
        </div>
      </div>
    </section>
  );
}
