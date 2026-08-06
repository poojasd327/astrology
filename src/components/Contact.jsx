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
                <div className="location-city">Bangalore & Chennai</div>
                <div className="location-hub">ASTRO CENTER</div>

                <ul className="location-details">
                  <li>
                    <i className="fa-solid fa-map"></i>
                    <span>#19, Jayanagar 5th Block, 5th Main 40th Cross Near Rashtreeya Vidyalaya Metro Station, Bangalore.</span>
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Area of Concern</label>
                <select
                  className="form-control"
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                >
                  <option value="">Select an area</option>
                  <option value="Kundli & Horoscope">Kundli & Horoscope</option>
                  <option value="Job & Career">Job & Career</option>
                  <option value="Love & Relationships">Love & Relationships</option>
                  <option value="Business & Finance">Business & Finance</option>
                  <option value="Foreign Travel & Visa">Foreign Travel & Visa</option>
                  <option value="Health & Well-being">Health & Well-being</option>
                  <option value="Mental Peace & Stress">Mental Peace & Stress</option>
                  <option value="Loan & Financial Issues">Loan & Financial Issues</option>
                  <option value="Marriage Problems">Marriage Problems</option>
                  <option value="Black Magic & Negative Energy">Black Magic & Negative Energy</option>
                  <option value="Court Cases & Legal Matters">Court Cases & Legal Matters</option>
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
