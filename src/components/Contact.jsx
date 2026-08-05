import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#F3EFE7' }}>
      <div className="container">
        <h2 className="section-title">Seek Guidance in Person or Online</h2>
        <p className="section-subtitle">Connect with our sacred spaces or reach out digitally. The cosmic energy knows no physical bounds.</p>
        
        <div className="contact-layout">
          <div className="locations-wrapper">
            <h3 className="sub-heading"><i className="fa-solid fa-location-dot"></i> Our Sanctuaries</h3>
            
            <div className="location-cards">
              <div className="glass-panel location-card">
                <div className="location-city">Bangalore</div>
                <div className="location-hub">JAYANAGAR HUB</div>
                
                <ul className="location-details">
                  <li>
                    <i className="fa-solid fa-map"></i>
                    <span>108 Sacred Path Road, 4th Block, Jayanagar, Bangalore 560011</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <span>+91 98765 43210</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel location-card">
                <div className="location-city">Chennai</div>
                <div className="location-hub">ASTRO AVENUE</div>
                
                <ul className="location-details">
                  <li>
                    <i className="fa-solid fa-map"></i>
                    <span>45 Cosmic Alignment St, T. Nagar, Chennai 600017</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>Tue - Sun: 10:00 AM - 8:00 PM</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <span>+91 98765 43211</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="form-wrapper glass-panel">
            <h3 className="form-title">Send a Divine Inquiry</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your earthly name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" placeholder="+91" className="form-control" />
              </div>
              <div className="form-group">
                <label>Area of Concern</label>
                <select className="form-control">
                  <option>Select an area</option>
                  <option>Career & Business</option>
                  <option>Love & Relationships</option>
                  <option>Health & Wellbeing</option>
                  <option>Spiritual Growth</option>
                </select>
              </div>
              <button type="button" className="btn-primary w-100 mt-3">SEEK ANSWERS <i className="fa-solid fa-arrow-right ml-2"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
