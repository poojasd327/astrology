"use client";
import React, { useState, useEffect } from "react";
import "./BookingModal.css";

export const openBookingModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-booking-modal"));
  }
};

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concern: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://crm-leads-service.pointofconnect.com/api/leads/webapi/1ac78a29-9fa6-4c29-8e35-5b563c867db6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            "phone-number": formData.phone,
            "concern-area": formData.concern,
            message: formData.message,
            "form-name": "Popup",
          }),
        },
      );

      if (response.ok) {
        alert("Thank you! Your request has been submitted successfully.");
        setIsOpen(false);
        setFormData({ name: "", phone: "", concern: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h2 className="modal-title">Get in Touch</h2>
        <form
          id="popup-booking-form"
          name="popup-booking-form"
          className="modal-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="form-control"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              required
              placeholder="Your Phone Number"
              className="form-control"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Area of Concern</label>
            <select
              className="form-control"
              value={formData.concern}
              onChange={(e) =>
                setFormData({ ...formData, concern: e.target.value })
              }
            >
              <option value="">Select an area</option>
              <option value="Kundli & Horoscope">Kundli & Horoscope</option>
              <option value="Job & Career">Job & Career</option>
              <option value="Love & Relationships">Love & Relationships</option>
              <option value="Business & Finance">Business & Finance</option>
              <option value="Foreign Travel & Visa">
                Foreign Travel & Visa
              </option>
              <option value="Health & Well-being">Health & Well-being</option>
              <option value="Mental Peace & Stress">
                Mental Peace & Stress
              </option>
              <option value="Loan & Financial Issues">
                Loan & Financial Issues
              </option>
              <option value="Marriage Problems">Marriage Problems</option>
              <option value="Black Magic & Negative Energy">
                Black Magic & Negative Energy
              </option>
              <option value="Court Cases & Legal Matters">
                Court Cases & Legal Matters
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              placeholder="How can we help you?"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
