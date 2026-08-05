"use client";
import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book a private consultation?",
      answer: "You can book by clicking the \"Book Consultation\" button or visiting our branches in Bangalore and Chennai for in-person sessions."
    },
    {
      question: "Are the remedies and poojas performed personally by Guruji?",
      answer: "Yes, all sacred rituals and specific Vedic remedies are personally supervised or performed by Pandith B Ramesh Shastri to ensure spiritual efficacy."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="faq-header animate-fade-in">
          <div className="section-badge">Help & Info</div>
          <h2 className="section-title">
            Frequently Asked <span className="title-accent">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our consultations, rituals, and services.
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                className={`faq-item glass-panel ${isActive ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {isActive ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isActive ? '200px' : '0' }}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
