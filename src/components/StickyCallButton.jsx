'use client';
import React from 'react';
import './StickyCallButton.css';

export default function StickyCallButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'call_button_click',
        phone_number: '9036164617',
      });
    }
  };

  return (
    <a
      href="tel:+919036164617"
      className="sticky-call-btn"
      aria-label="Call +91 9036164617"
      title="Call +91 9036164617"
      onClick={handleClick}
    >
      <span className="call-pulse-ring" aria-hidden="true" />
      <span className="call-icon-wrap" aria-hidden="true">
        <i className="fa-solid fa-phone" />
      </span>
      <span className="call-text">
        <span className="call-label">Call Now</span>
        <span className="call-number">+91 9036164617</span>
      </span>
    </a>
  );
}

