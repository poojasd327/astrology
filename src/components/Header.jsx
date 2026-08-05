'use client';
import React, { useState, useEffect } from 'react';
import { openBookingModal } from './BookingModal';
import './Header.css';

const navLinks = [
  { label: 'Home',             href: '#' },
  { label: 'About',            href: '#about' },
  { label: 'Consultations',    href: '#consultations' },
  { label: 'Guidance',         href: '#guidance' },
  { label: 'Testimonials',     href: '#testimonials' },
  { label: 'Rituals & Offerings', href: '#poojas' },
  { label: 'Contact',          href: '#contact' },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        {/* Logo */}
        <a href="#" className="header-logo-link">
          <img
            src="/logo.webp"
            alt="Sri Guru Raghavendra Astro Center"
            className="header-logo"
          />
        </a>

        {/* Desktop nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <button onClick={openBookingModal} className="btn-primary header-cta">
          Book Consultation
        </button>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button 
          className="btn-primary mobile-cta" 
          onClick={() => {
            setMenuOpen(false);
            openBookingModal();
          }}
        >
          Book Consultation
        </button>
      </div>
    </header>
  );
}
