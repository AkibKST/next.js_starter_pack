"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PlatformDetailsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Platform statistics
  const stats = [
    { number: "15K+", label: "Happy Customers", icon: "😊" },
    { number: "2K+", label: "Verified Technicians", icon: "👨‍🔧" },
    { number: "50+", label: "Service Categories", icon: "🛠️" },
    { number: "4.9★", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" },
    { number: "$500K+", label: "Monthly Transactions", icon: "💰" },
  ];

  // How it works steps
  const steps = [
    {
      number: "1",
      title: "Create Account",
      desc: "Sign up in just 2 minutes with your email or phone number",
      icon: "📝",
    },
    {
      number: "2",
      title: "Browse Services",
      desc: "Explore 50+ service categories with verified professionals",
      icon: "🔍",
    },
    {
      number: "3",
      title: "Select Technician",
      desc: "Choose from highly-rated experts matching your needs",
      icon: "👤",
    },
    {
      number: "4",
      title: "Book & Pay",
      desc: "Schedule your service and pay securely through our platform",
      icon: "📅",
    },
    {
      number: "5",
      title: "Get Service",
      desc: "Professional technician arrives on time at your location",
      icon: "🚗",
    },
    {
      number: "6",
      title: "Rate & Review",
      desc: "Share your feedback to help other customers decide",
      icon: "⭐",
    },
  ];

  // Core features
  const features = [
    {
      icon: "🔒",
      title: "100% Secure",
      desc: "All transactions protected by industry-standard encryption",
    },
    {
      icon: "✅",
      title: "Verified Professionals",
      desc: "Background checks and certifications for every technician",
    },
    {
      icon: "💯",
      title: "Satisfaction Guarantee",
      desc: "Money-back guarantee if you're not satisfied with service",
    },
    {
      icon: "⚡",
      title: "Same-Day Service",
      desc: "Get urgent issues resolved the same day for Pro members",
    },
    {
      icon: "📱",
      title: "Real-Time Tracking",
      desc: "Track technician arrival with live GPS notifications",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Round-the-clock customer support via chat, phone, or email",
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Basic",
      price: "$29",
      period: "/visit",
      description: "Perfect for one-time quick fixes",
      features: [
        "Single service visit",
        "Standard technician",
        "48-hour scheduling",
        "Email support",
        "Satisfaction guarantee",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Most popular for homeowners",
      features: [
        "Unlimited service requests",
        "Priority technicians",
        "Same-day scheduling",
        "24/7 phone support",
        "Price-lock guarantee",
        "10% parts discount",
      ],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Best for property managers",
      features: [
        "Multi-property support",
        "Dedicated account manager",
        "Instant dispatch",
        "Custom SLA",
        "Monthly reports",
        "20% parts discount",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do I know if a technician is qualified?",
      a: "All technicians on FixItPro undergo rigorous background checks, skill verification, and certification review. You can view their qualifications, experience, and customer ratings before booking.",
    },
    {
      q: "What if something goes wrong during service?",
      a: "We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll either send another technician at no cost or provide a full refund. Your satisfaction is guaranteed.",
    },
    {
      q: "How is pricing determined?",
      a: "Pricing is transparent and based on service type, complexity, and estimated duration. You'll always see the quote before confirming the booking with zero hidden fees.",
    },
    {
      q: "Can I reschedule or cancel?",
      a: "Yes! You can cancel or reschedule up to 2 hours before the appointment at no charge. Late cancellations may incur a small fee as per our policy.",
    },
    {
      q: "Is my payment information secure?",
      a: "Absolutely. We use bank-level encryption and never store full credit card details. All transactions are processed through secure, PCI-compliant payment gateways.",
    },
  ];

  return (
    <div className="platform-details">
      <style jsx>{`
        .platform-details {
          min-height: 100vh;
          background: #0a0a1e;
          color: #fff;
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 20px 60px;
        }

        .hero::before {
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
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin: 0 0 2rem 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-btn {
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

        .hero-btn--primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .hero-btn--primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 30px 60px rgba(99, 102, 241, 0.4);
        }

        .hero-btn--secondary {
          background: transparent;
          border: 2px solid #6366f1;
          color: #6366f1;
        }

        .hero-btn--secondary:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
        }

        /* ============================================
           STATS SECTION
           ============================================ */
        .stats-section {
          max-width: 1200px;
          margin: 6rem auto;
          padding: 0 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .stat-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-5px);
          background: rgba(99, 102, 241, 0.1);
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        /* ============================================
           HOW IT WORKS SECTION
           ============================================ */
        .how-works {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          color: #cbd5e1;
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(99, 102, 241, 0.08);
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 2rem;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .step-icon {
          font-size: 2.5rem;
          margin: 1rem 0;
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin: 1rem 0 0.5rem 0;
          color: #fff;
        }

        .step-card p {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
        }

        /* ============================================
           FEATURES SECTION
           ============================================ */
        .features-section {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.1),
            rgba(139, 92, 246, 0.1)
          );
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.2rem;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .feature-card p {
          color: #cbd5e1;
          margin: 0;
          line-height: 1.6;
        }

        /* ============================================
           PRICING SECTION
           ============================================ */
        .pricing-section {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .pricing-card--featured {
          border-color: rgba(99, 102, 241, 0.6);
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.1)
          );
          transform: scale(1.05);
        }

        .pricing-badge {
          position: absolute;
          top: -15px;
          right: 2rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .pricing-desc {
          color: #cbd5e1;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .pricing-amount {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .pricing-period {
          color: #cbd5e1;
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .pricing-features {
          list-style: none;
          margin: 0 0 2rem 0;
          padding: 0;
          flex-grow: 1;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .pricing-features li::before {
          content: "✓";
          color: #6366f1;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .pricing-btn {
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
        }

        .pricing-btn--primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .pricing-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .pricing-btn--secondary {
          background: transparent;
          border: 2px solid rgba(99, 102, 241, 0.3);
          color: #6366f1;
        }

        .pricing-btn--secondary:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        /* ============================================
           FAQ SECTION
           ============================================ */
        .faq-section {
          max-width: 900px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 3rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item--open {
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(99, 102, 241, 0.08);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: #a78bfa;
        }

        .faq-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
          color: #6366f1;
        }

        .faq-item--open .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item--open .faq-answer {
          max-height: 500px;
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.5rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* ============================================
           FOOTER CTA
           ============================================ */
        .footer-cta {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 4rem;
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.15)
          );
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 16px;
          text-align: center;
        }

        .footer-cta h2 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-cta p {
          color: #cbd5e1;
          margin: 0 0 2rem 0;
        }

        .footer-cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ============================================
           RESPONSIVE DESIGN
           ============================================ */
        @media (max-width: 768px) {
          .hero {
            padding: 80px 20px 40px;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .hero-cta {
            flex-direction: column;
          }

          .hero-btn {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card--featured {
            transform: scale(1);
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-section,
          .how-works,
          .features-section,
          .pricing-section,
          .faq-section,
          .footer-cta {
            margin: 4rem auto;
          }

          .footer-cta {
            padding: 2rem;
          }

          .footer-cta-buttons {
            flex-direction: column;
          }

          .footer-cta-buttons a {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 1.5rem;
          }

          .hero p {
            font-size: 0.95rem;
          }

          .stat-icon {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .faq-question {
            padding: 1rem;
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>The Complete Home Service Platform</h1>
          <p>
            Discover how FixItPro is revolutionizing the way people find and
            hire trusted professionals for all their home service needs.
          </p>
          <div className="hero-cta">
            <Link href="/technicians" className="hero-btn hero-btn--primary">
              Browse Services →
            </Link>
            <Link href="/register" className="hero-btn hero-btn--secondary">
              Join Our Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <h2 className="section-title">By The Numbers</h2>
        <p className="section-subtitle">
          Join thousands of satisfied customers who trust FixItPro for their
          home service needs
        </p>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Booking a service is simple and straightforward
        </p>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="features-section">
        <h2 className="section-title">Why Choose FixItPro</h2>
        <p className="section-subtitle">
          We prioritize your safety, satisfaction, and convenience
        </p>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <h2 className="section-title">Flexible Pricing Plans</h2>
        <p className="section-subtitle">
          Choose the plan that works best for you
        </p>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.highlighted ? "pricing-card--featured" : ""}`}
            >
              {tier.highlighted && (
                <span className="pricing-badge">Most Popular</span>
              )}
              <h3>{tier.name}</h3>
              <p className="pricing-desc">{tier.description}</p>
              <div className="pricing-amount">{tier.price}</div>
              <div className="pricing-period">{tier.period}</div>
              <ul className="pricing-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                className={`pricing-btn ${
                  tier.highlighted
                    ? "pricing-btn--primary"
                    : "pricing-btn--secondary"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about our platform
        </p>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${expandedFaq === idx ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">▼</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join FixItPro today and experience the easiest way to book home
          services
        </p>
        <div className="footer-cta-buttons">
          <Link href="/register" className="hero-btn hero-btn--primary">
            Create Account Now →
          </Link>
          <a href="#" className="hero-btn hero-btn--secondary">
            Browse Technicians
          </a>
        </div>
      </section>
    </div>
  );
}
