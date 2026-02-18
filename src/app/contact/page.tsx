"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #0a0a1e;
          color: #fff;
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .contact-hero {
          min-height: 60vh;
          background: linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 20px 60px;
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.15) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.15rem;
          color: #cbd5e1;
          margin: 0;
          line-height: 1.7;
        }

        /* ============================================
           MAIN CONTENT
           ============================================ */
        .contact-content {
          max-width: 1200px;
          margin: -40px auto 0;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin: 4rem 0;
        }

        /* ============================================
           CONTACT INFO
           ============================================ */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: rgba(99, 102, 241, 0.6);
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-5px);
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          color: #fff;
        }

        .info-content {
          color: #cbd5e1;
          margin: 0;
          line-height: 1.6;
          font-size: 1rem;
        }

        .info-link {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .info-link:hover {
          color: #a78bfa;
        }

        /* ============================================
           CONTACT FORM
           ============================================ */
        .contact-form-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.75rem;
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 8px;
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #94a3b8;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: rgba(99, 102, 241, 0.8);
          background: rgba(99, 102, 241, 0.15);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .form-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .form-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
        }

        .form-btn:active {
          transform: translateY(-1px);
        }

        /* ============================================
           SUCCESS MESSAGE
           ============================================ */
        .success-message {
          background: rgba(34, 197, 94, 0.1);
          border: 2px solid #22c55e;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          color: #86efac;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ============================================
           CTA SECTION
           ============================================ */
        .cta-section {
          max-width: 1200px;
          margin: 6rem auto;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 16px;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-section p {
          color: #cbd5e1;
          margin: 0 0 2rem 0;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-btn--primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .cta-btn--primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
        }

        .cta-btn--secondary {
          background: transparent;
          border: 2px solid #6366f1;
          color: #6366f1;
        }

        .cta-btn--secondary:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
        }

        /* ============================================
           RESPONSIVE DESIGN
           ============================================ */
        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 80px 20px 40px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .content-wrapper {
            margin: 2rem 0;
          }

          .contact-form-section {
            padding: 1.5rem;
          }

          .cta-section {
            padding: 2rem;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.5rem;
          }

          .hero-content p {
            font-size: 0.95rem;
          }

          .contact-info-section {
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.5rem;
          }

          .info-icon {
            font-size: 2rem;
          }

          .contact-form-section {
            padding: 1.25rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions? We&apos;d love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="content-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            {/* Email Card */}
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:akibkst22@gmail.com" className="info-link">
                <p className="info-content">akibkst22@gmail.com</p>
              </a>
              <p className="info-content" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                We&apos;ll respond within 24 hours
              </p>
            </div>

            {/* Phone Card */}
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+8801500000025" className="info-link">
                <p className="info-content">015 *** *** 25</p>
              </a>
              <p className="info-content" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Available Monday to Saturday, 9 AM - 6 PM
              </p>
            </div>

            {/* Address Card */}
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p className="info-content">Kushtia, Bangladesh</p>
              <p className="info-content" style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Visit our office or schedule an appointment
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#fff" }}>
              Send us a Message
            </h2>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+880 1700 000000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <select
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Service Request">Service Request</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Other Ways to Connect</h2>
        <p>Explore our platform or browse available services</p>
        <div className="cta-buttons">
          <Link href="/services" className="cta-btn cta-btn--primary">
            Browse Services
          </Link>
          <Link href="/technicians" className="cta-btn cta-btn--secondary">
            Hire Technician
          </Link>
        </div>
      </section>
    </div>
  );
}
