'use client';
import React, { useRef, useState, useEffect } from 'react';
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
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active dot as user swipes
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const handleScroll = () => {
      const card = grid.querySelector('.achievement-card');
      if (!card) return;
      const cardWidth = card.offsetWidth + 16; // 16px = gap 1rem
      const index = Math.round(grid.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, achievements.length - 1)));
    };
    grid.addEventListener('scroll', handleScroll, { passive: true });
    return () => grid.removeEventListener('scroll', handleScroll);
  }, []);

  // Click dot → scroll to that card
  const scrollToCard = (index) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelector('.achievement-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    grid.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

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

        {/* Grid / Slider */}
        <div className="achievements-grid" ref={gridRef}>
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

        {/* Dot navigation — hidden on desktop, shown on mobile via CSS */}
        <div className="ach-dots">
          {achievements.map((_, i) => (
            <button
              key={i}
              className={`ach-dot${i === activeIndex ? ' active' : ''}`}
              aria-label={`Go to achievement ${i + 1}`}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
