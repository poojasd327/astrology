import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="footer-logo-link">
              <img
                src="/logo.webp"
                alt="Sri Guru Raghavendra Astro Center"
                className="footer-logo"
              />
            </a>
            <p className="footer-desc">
              Guided by 37+ years of legacy, illuminate your life's path with profound astrological insights and remedies at the Sri Guru Raghavendra Astro Center.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#consultations">Consultations</a></li>
              <li><a href="#guidance">Spiritual Guidance</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#poojas">Rituals & Offerings</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>#19, Jayanagar 5th Block, 5th Main 40th Cross Near Rashtreeya Vidyalaya Metro Station, Bangalore.</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span><a href="tel:+919036164617">+91 9036164617</a></span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span><a href="mailto:brameshshastri@gmail.com">brameshshastri@gmail.com</a></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sri Guru Raghavendra Astro Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
