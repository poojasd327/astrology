"use client";
import React, { useRef, useEffect, useState } from 'react';
import './SpecialPoojas.css';

const poojas = [
  {
    title: 'Navagraha Shanti',
    desc: 'Pacify malefic planetary influences. This essential ritual restores balance to your life by appeasing the nine celestial bodies.',
    image: '/navagraha.webp'
  },
  {
    title: 'Lakshmi Pooja',
    desc: 'Invoke the Goddess of Wealth. This ceremony is meticulously performed to attract financial stability and ensure a prosperous household.',
    image: '/lakshmi.webp'
  },
  {
    title: 'Ashlesha Bali Homa',
    desc: 'A sacred ritual performed to appease the serpent deities, providing relief from Sarpa Dosha and ensuring protection for the family.',
    image: '/ashlesha.webp'
  },
  {
    title: 'Rahu Ketu Shanti Homa',
    desc: 'Targeted remedies to balance the malefic effects of lunar nodes, clearing path-blocks and restoring stability in life.',
    image: '/rahu kethu.webp'
  },
  {
    title: 'Rana Chandi Homa',
    desc: 'A powerful invocation of Goddess Chandi to overcome obstacles, gain victory over adversities, and ensure divine protection.',
    image: '/rana chandi.webp'
  },
  {
    title: 'Shatru Stambhan Pooja',
    desc: 'A spiritual shield against negative influences and competitors, fostering peace and neutralizing hidden animosities.',
    image: '/shatru.webp'
  },
  {
    title: 'Ashta Shakti Homa',
    desc: 'Invoking the eight divine energies to grant holistic prosperity, courage, and spiritual empowerment.',
    image: '/ashta.webp'
  }
];

export default function SpecialPoojas() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardsInView, setCardsInView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsInView(1);
      } else {
        setCardsInView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current || !trackRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const windowHeight = window.innerHeight;
      
      if (top <= 0) {
        const scrollableDistance = height - windowHeight;
        let p = -top / scrollableDistance;
        p = Math.max(0, Math.min(1, p));
        setProgress(p);
        
        // Calculate discrete steps so only full cards are visible
        const totalSteps = Math.max(1, poojas.length - cardsInView + 1);
        const index = Math.round(p * (totalSteps - 1));
        
        const containerWidth = containerRef.current.clientWidth;
        const gap = 32; // 2rem gap
        const step = (containerWidth + gap) / cardsInView;
        
        setTranslateX(index * step);
      } else if (top > 0) {
        setProgress(0);
        setTranslateX(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger layout measurement safely after mount
    requestAnimationFrame(() => handleScroll()); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalSteps = Math.max(1, poojas.length - cardsInView + 1);
  const activeIndex = Math.round(progress * (totalSteps - 1));

  return (
    <section ref={sectionRef} id="poojas" className="poojas-section-sticky">
      <div className="poojas-sticky-wrapper">
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem', textAlign: 'center' }}>
          <div className="section-badge">Rituals & Offerings</div>
          <h2 className="section-title">Special Pooja's & Homa's</h2>
        </div>
        
        <div className="container" style={{ overflow: 'hidden' }} ref={containerRef}>
          <div className="poojas-horizontal-container">
            <div 
              ref={trackRef}
              className="poojas-track" 
              style={{ 
                transform: `translateX(-${translateX}px)`,
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {poojas.map((pooja, index) => (
                <div className="pooja-card glass-panel" key={index}>
                  <div className="pooja-image-wrapper">
                    <img src={pooja.image} alt={pooja.title} className="pooja-card-image" />
                  </div>
                  <div className="pooja-card-content">
                    <h3 className="pooja-title">{pooja.title}</h3>
                    <p className="pooja-desc">{pooja.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pagination-dots">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`dot ${i === activeIndex ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
