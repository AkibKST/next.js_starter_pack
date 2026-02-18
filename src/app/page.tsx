"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
    ),
    title: "Plumbing",
    desc: "Expert plumbers for leaks, installations, pipe repairs and bathroom renovations.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
    title: "Electrical",
    desc: "Certified electricians for wiring, panel upgrades, lighting and safety inspections.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><rect width="18" height="6" x="3" y="9" rx="1" /><path d="m9 9-3-6" /><path d="m15 9 3-6" /></svg>
    ),
    title: "HVAC",
    desc: "Heating & cooling experts for AC repair, furnace service, and duct cleaning.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>
    ),
    title: "Carpentry",
    desc: "Skilled carpenters for furniture, cabinets, doors and custom woodwork.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4z" /></svg>
    ),
    title: "Painting",
    desc: "Professional painters for interior, exterior, and decorative wall finishes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
    ),
    title: "Appliance Repair",
    desc: "Fast fixes for washers, dryers, refrigerators, ovens and all home appliances.",
  },
];

const PRICING = [
  {
    name: "Basic",
    price: "$29",
    period: "/visit",
    desc: "Perfect for one-time quick fixes",
    features: ["Single service visit", "Standard technician", "48-hour scheduling", "Email support", "Satisfaction guarantee"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    desc: "Most popular for homeowners",
    features: ["Unlimited service requests", "Priority technicians", "Same-day scheduling", "24/7 phone support", "Price-lock guarantee", "10% parts discount"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    desc: "Best for property managers",
    features: ["Multi-property support", "Dedicated account manager", "Instant dispatch", "Custom SLA", "Monthly reports", "20% parts discount", "API access"],
    highlighted: false,
  },
];

const FAQS = [
  { q: "How do I book a technician?", a: "Simply browse our available technicians, select the service you need, pick a convenient time slot, and confirm your booking. It takes less than 2 minutes!" },
  { q: "Are your technicians verified?", a: "Yes! Every technician on FixItPro goes through a rigorous background check, skill verification, and certification review before joining our platform." },
  { q: "What if I'm not satisfied with the service?", a: "We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll send another technician at no extra cost or provide a full refund." },
  { q: "How are the prices determined?", a: "Prices are transparent and based on the type of service, complexity, and duration. You'll always see the estimated cost before confirming a booking — no hidden fees." },
  { q: "Can I cancel or reschedule a booking?", a: "Absolutely. You can cancel or reschedule up to 2 hours before the appointment at no charge. Late cancellations may incur a small fee." },
  { q: "Do you offer emergency services?", a: "Yes! Pro and Enterprise plan members get access to our 24/7 emergency dispatch for urgent issues like burst pipes or electrical failures." },
];

const STATS = [
  { value: "15K+", label: "Happy Customers" },
  { value: "2K+", label: "Verified Technicians" },
  { value: "50+", label: "Service Categories" },
  { value: "4.9★", label: "Average Rating" },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="home">
      {/* ═══════════════════════════════════════
          SECTION 1 — HERO BANNER
         ═══════════════════════════════════════ */}
      <section className="hero">
        <div className="hero__blobs">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
        </div>

        <div className="hero__content">
          <span className="hero__badge">🚀 #1 Technician Hiring Platform</span>

          <h1 className="hero__title">
            Find &amp; Hire <span className="hero__title-gradient">Expert Technicians</span> in Minutes
          </h1>

          <p className="hero__subtitle">
            FixItPro connects you with verified, top-rated professionals for plumbing, electrical, HVAC, painting and more — all backed by our satisfaction guarantee.
          </p>

          <div className="hero__actions">
            <Link href="/technicians" className="hero__btn hero__btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              Browse Technicians
            </Link>
            <Link href="/register" className="hero__btn hero__btn--ghost">
              Join as Technician
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — SERVICES
         ═══════════════════════════════════════ */}
      <section className="section" id="services">
        <div className="section__container">
          <span className="section__badge">Our Services</span>
          <h2 className="section__title">What We <span className="gradient-text">Offer</span></h2>
          <p className="section__subtitle">From routine maintenance to emergency repairs — we cover every home service you need.</p>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <Link href="/services" className="service-card__link">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — ABOUT US
         ═══════════════════════════════════════ */}
      <section className="section section--dark" id="about">
        <div className="section__container">
          <div className="about">
            <div className="about__text">
              <span className="section__badge">About Us</span>
              <h2 className="section__title">Why Choose <span className="gradient-text">FixItPro</span>?</h2>
              <p className="about__desc">
                FixItPro was founded with a simple mission: make home services effortless. We believe everyone deserves quick access to trustworthy, skilled professionals — without the hassle of endless searching and uncertainty.
              </p>
              <div className="about__features">
                {[
                  { icon: "✅", text: "Background-checked & certified technicians" },
                  { icon: "⚡", text: "Same-day service for urgent requests" },
                  { icon: "💰", text: "Transparent pricing with no hidden fees" },
                  { icon: "🛡️", text: "100% satisfaction guarantee on every job" },
                ].map((f) => (
                  <div key={f.text} className="about__feature">
                    <span className="about__feature-icon">{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="hero__btn hero__btn--primary" style={{ marginTop: "0.5rem" }}>
                Learn More About Us
              </Link>
            </div>

            <div className="about__visual">
              <div className="about__card about__card--1">
                <div className="about__card-num">2K+</div>
                <div className="about__card-label">Verified Pros</div>
              </div>
              <div className="about__card about__card--2">
                <div className="about__card-num">4.9★</div>
                <div className="about__card-label">Avg Rating</div>
              </div>
              <div className="about__card about__card--3">
                <div className="about__card-num">24/7</div>
                <div className="about__card-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — PLATFORM PRICING
         ═══════════════════════════════════════ */}
      <section className="section" id="pricing">
        <div className="section__container">
          <span className="section__badge">Platform Services &amp; Pricing</span>
          <h2 className="section__title">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="section__subtitle">Choose the plan that fits your needs. No contracts. Cancel anytime.</p>

          <div className="pricing-grid">
            {PRICING.map((p) => (
              <div key={p.name} className={`pricing-card ${p.highlighted ? "pricing-card--highlight" : ""}`}>
                {p.highlighted && <span className="pricing-card__badge">Most Popular</span>}
                <h3 className="pricing-card__name">{p.name}</h3>
                <p className="pricing-card__desc">{p.desc}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{p.price}</span>
                  <span className="pricing-card__period">{p.period}</span>
                </div>
                <ul className="pricing-card__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`pricing-card__btn ${p.highlighted ? "pricing-card__btn--primary" : ""}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — FAQ
         ═══════════════════════════════════════ */}
      <section className="section section--dark" id="faq">
        <div className="section__container section__container--sm">
          <span className="section__badge">FAQ</span>
          <h2 className="section__title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section__subtitle">Everything you need to know about hiring technicians through FixItPro.</p>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`}>
                <button className="faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg className="faq-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                <div className="faq-item__a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — CONTACT
         ═══════════════════════════════════════ */}
      <section className="section" id="contact">
        <div className="section__container">
          <span className="section__badge">Contact Us</span>
          <h2 className="section__title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section__subtitle">Have a question or need help? We&apos;d love to hear from you.</p>

          <div className="contact">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Full Name</label>
                  <input type="text" className="contact__input" placeholder="John Doe" required />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email</label>
                  <input type="email" className="contact__input" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input type="text" className="contact__input" placeholder="How can we help?" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea className="contact__input contact__textarea" placeholder="Tell us more about your question..." rows={5} required />
              </div>
              <button type="submit" className="hero__btn hero__btn--primary" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>

            <div className="contact__info">
              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div>
                  <h4 className="contact__info-title">Email</h4>
                  <p className="contact__info-text">support@fixitpro.com</p>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h4 className="contact__info-title">Phone</h4>
                  <p className="contact__info-text">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h4 className="contact__info-title">Office</h4>
                  <p className="contact__info-text">123 Tech Street, San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <h4 className="contact__info-title">Business Hours</h4>
                  <p className="contact__info-text">Mon – Fri: 8AM – 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
