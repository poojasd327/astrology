'use client';
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', concern: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://crm-leads-service.pointofconnect.com/api/leads/webapi/1ac78a29-9fa6-4c29-8e35-5b563c867db6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": formData.name,
          "phone-number": formData.phone,
          "concern-area": formData.concern,
          "form-name": "Footer Form"
        }),
      });

      if (response.ok) {
        alert('Thank you! Your divine inquiry has been submitted successfully.');
        setFormData({ name: '', phone: '', concern: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <span>+91 9036164617</span>
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
                    <span>+91 9036164617</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="form-wrapper glass-panel">
            <h3 className="form-title">Send a Divine Inquiry</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your earthly name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91" 
                  className="form-control" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Area of Concern</label>
                <select 
                  className="form-control"
                  value={formData.concern}
                  onChange={(e) => setFormData({...formData, concern: e.target.value})}
                >
                  <option value="">Select an area</option>
                  <option value="Career & Business">Career & Business</option>
                  <option value="Love & Relationships">Love & Relationships</option>
                  <option value="Health & Wellbeing">Health & Wellbeing</option>
                  <option value="Spiritual Growth">Spiritual Growth</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-100 mt-3" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : (
                  <>SEEK ANSWERS <i className="fa-solid fa-arrow-right ml-2"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
