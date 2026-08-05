'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Arjun Patel",
    location: "Hyderabad",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #C9A25E, #8B6914)",
    text: "Pandit B Ramesh Shastri has been guiding me for 7 years in my career, marriage, and personal challenges. His accurate career guidance helped me find stability in my IT career during a tough phase. His timely remedies during health issues supported quick healing. Panditji's detailed chart reading and easy-to-follow remedies are a true blessing."
  },
  {
    name: "Sneha Kulkarni",
    location: "Pune",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #8B6914, #C9A25E)",
    text: "For the last 6 years, I have regularly consulted Pandit B Ramesh Shastri for my career, marriage, and health issues. His predictions regarding my boutique expansion helped me take the right steps. Panditji's guidance during my marriage phase helped me find the right partner after facing constant delays."
  },
  {
    name: "Vivek Sharma",
    location: "Bangalore",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #C9A25E, #A07C3A)",
    text: "I have been consulting Pandit B Ramesh Shastri for over 8 years for career, marriage, and health guidance. His accurate predictions regarding my promotions and financial growth have helped me plan my investments wisely. His guidance during my health concerns ensured I followed the right medical and spiritual remedies."
  },
  {
    name: "Rohit Kumar",
    location: "Bangalore",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #A07C3A, #C9A25E)",
    text: "For the past 7 years, I have regularly taken guidance from Pandit B Ramesh Shastri for my business and marriage issues. His remedies helped clear financial blocks and stabilized my business. Panditji's insight also helped me resolve misunderstandings with my spouse."
  },
  {
    name: "Priya Nair",
    location: "Chennai",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #C9A25E, #8B6914)",
    text: "Pandit B Ramesh Shastri has been my trusted astrologer for 5 years now. His precise analysis of my horoscope and practical remedies worked wonders. He guided me during my marriage phase, helping me find a compatible partner. Panditji's calm and encouraging approach helps me gain clarity in life."
  },
  {
    name: "Ananya Gowda",
    location: "Bangalore",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #8B6914, #C9A25E)",
    text: "I have been consulting Pandit B Ramesh Shastri for over 6 years for my career and personal life. His predictions regarding my onsite opportunities and promotions were accurate. When I faced delays in marriage, he guided me with simple rituals that aligned things positively."
  },
  {
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #C9A25E, #A07C3A)",
    text: "I have been under the guidance of Pandit B Ramesh Shastri for over 5 years for career and family matters. His predictions about job changes helped me secure a good teaching job. When I faced marriage delays, Panditji provided simple remedies, leading to a successful marriage."
  }
];

const VISIBLE = 3;
const TOTAL = testimonials.length;

// Build cloned list: [last VISIBLE] + [all] + [first VISIBLE]
const cloned = [
  ...testimonials.slice(-VISIBLE),
  ...testimonials,
  ...testimonials.slice(0, VISIBLE),
];
const CLONED_LEN = cloned.length;

/* ── tiny sub-components ── */
const QuoteIcon = ({ fill = 'white', size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="t-star-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const TestimonialCard = ({ t }) => (
  <div className="t-card">
    <div className="t-card-top">
      <div className="t-avatar" style={{ background: t.avatarBg }}>
        <QuoteIcon fill="white" size={24} />
      </div>
      <div className="t-meta">
        <h4 className="t-name">{t.name}</h4>
        <span className="t-location">{t.location}</span>
      </div>
    </div>

    <div className="t-stars">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>

    <div className="t-divider" />
    <p className="t-text">{t.text}</p>

    <div className="t-watermark" aria-hidden="true">
      <QuoteIcon fill="rgba(201,162,94,0.13)" size={56} />
    </div>
  </div>
);

/* ── Main component ── */
export default function Testimonials() {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const idxRef       = useRef(VISIBLE);   // current position in cloned[]
  const busyRef      = useRef(false);     // prevent double-slide
  const autoRef      = useRef(null);
  const [dotIndex, setDotIndex] = useState(0);

  /* ---------- layout helpers ---------- */
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const slideW = () =>
    containerRef.current ? containerRef.current.offsetWidth / getVisibleCount() : 0;

  /** Move track to position `idx`.
   *  `animated`: true = slide smoothly, false = instant (no flash) */
  const moveTo = useCallback((idx, animated) => {
    const track = trackRef.current;
    if (!track) return;
    idxRef.current = idx;

    if (animated) {
      track.style.transition = 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)';
    } else {
      track.style.transition = 'none';
      // CRITICAL: force browser reflow so the "no transition" takes effect
      // before the transform changes.
      void track.getBoundingClientRect();
    }
    track.style.transform = `translateX(${-(idx * slideW())}px)`;

    const ri = ((idx - VISIBLE) % TOTAL + TOTAL) % TOTAL;
    setDotIndex(ri);
  }, []);

  /** Set pixel widths of track + slides based on current container size */
  const layout = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const sw = slideW();
    track.style.width = `${sw * CLONED_LEN}px`;
    Array.from(track.children).forEach(el => {
      (el).style.width = `${sw}px`;
    });
    moveTo(idxRef.current, false);
  }, [moveTo]);

  /* ---------- slide handlers ---------- */
  const next = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    moveTo(idxRef.current + 1, true);
  }, [moveTo]);

  const prev = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    moveTo(idxRef.current - 1, true);
  }, [moveTo]);

  /** After animated slide finishes — silently warp if in clone territory */
  const onTransitionEnd = useCallback(() => {
    busyRef.current = false;
    const idx = idxRef.current;
    if (idx >= VISIBLE + TOTAL) moveTo(idx - TOTAL, false);
    else if (idx < VISIBLE)     moveTo(idx + TOTAL, false);
  }, [moveTo]);

  /* ---------- auto-play ---------- */
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 3500);
  }, [next]);

  const stopAuto = useCallback(() => clearInterval(autoRef.current), []);

  /* ---------- lifecycle ---------- */
  useEffect(() => {
    layout();
    startAuto();
    window.addEventListener('resize', layout);
    return () => {
      stopAuto();
      window.removeEventListener('resize', layout);
    };
  }, [layout, startAuto, stopAuto]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">

        <div className="testimonials-header">
          <h2 className="testimonials-main-title">
            Client Feedback <span className="title-accent">&amp; Testimonial</span>
          </h2>
          <p className="testimonials-subtitle">
            Discover the transformative impact of Panditji's sacred guidance through the heartfelt experiences of those he has blessed.
          </p>
        </div>

        <div
          className="t-slider-viewport"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {/* Prev arrow */}
          <button className="t-arrow t-arrow-prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Overflow clip */}
          <div className="t-slider-overflow" ref={containerRef}>
            <div
              className="t-slider-track"
              ref={trackRef}
              onTransitionEnd={onTransitionEnd}
            >
              {cloned.map((t, i) => (
                <div key={i} className="t-slide">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button className="t-arrow t-arrow-next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === dotIndex ? 'active' : ''}`}
              onClick={() => { moveTo(i + VISIBLE, true); startAuto(); }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
