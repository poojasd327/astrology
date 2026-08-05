'use client';
import React, { useRef } from 'react';
import './VideoTestimonials.css';

const videos = [
  {
    src: "https://rameshshastriastro.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-04-at-18.26.33.mp4#t=0.001",
    label: "Client Experience"
  },
  {
    src: "https://rameshshastriastro.com/wp-content/uploads/2025/07/WhatsApp-Video-2025-07-11-at-18.00.11.mp4#t=0.001",
    label: "Client Experience"
  }
];

export default function VideoTestimonials() {
  // One ref per video element
  const videoRefs = useRef([]);

  // When a video starts playing, pause all other videos
  const handlePlay = (playingIndex) => {
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== playingIndex) {
        vid.pause();
      }
    });
  };

  return (
    <section className="video-testimonials-section" id="video-testimonials">
      {/* Decorative background glow */}
      <div className="vt-bg-glow vt-glow-left" />
      <div className="vt-bg-glow vt-glow-right" />

      <div className="container">
        {/* Header */}
        <div className="vt-header animate-fade-in">
          <div className="section-badge">Real Stories</div>
          <h2 className="section-title">
            Video <span className="vt-title-accent">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Hear directly from those whose lives have been transformed by Pandit B Ramesh Shastri's sacred guidance and astrological wisdom.
          </p>
        </div>

        {/* Video grid */}
        <div className="vt-grid">
          {videos.map((video, index) => (
            <div className="vt-card animate-fade-in" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Badge */}
              <div className="vt-card-badge">
                <i className="fa-solid fa-video"></i>
              </div>

              <div className="vt-video-wrapper">
                <video
                  className="vt-video"
                  src={video.src}
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                  playsInline
                  ref={el => videoRefs.current[index] = el}
                  onPlay={() => handlePlay(index)}
                />
              </div>

              <div className="vt-card-footer">
                <div className="vt-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="vt-star">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="vt-label">{video.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
