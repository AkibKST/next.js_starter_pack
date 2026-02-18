"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  // Team members
  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "👨‍💼",
      bio: "10+ years in service industry with vision to revolutionize home services",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "👨‍💻",
      bio: "Leading tech innovator with expertise in marketplace platforms",
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Head of Operations",
      image: "👩‍💼",
      bio: "Expert in scaling operations and customer satisfaction",
    },
    {
      id: 4,
      name: "David Martinez",
      role: "VP of Customer Success",
      image: "👨‍🎓",
      bio: "Dedicated to ensuring 100% satisfaction for all users",
    },
  ];

  // Company values
  const values = [
    {
      icon: "🎯",
      title: "Trust & Transparency",
      description:
        "We believe in honest, open communication with all our users and partners",
    },
    {
      icon: "⭐",
      title: "Quality Excellence",
      description:
        "We maintain the highest standards for every service provided",
    },
    {
      icon: "🤝",
      title: "Community First",
      description:
        "We're building a strong community of reliable professionals",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We continuously improve our platform with cutting-edge technology",
    },
    {
      icon: "💡",
      title: "Customer Focus",
      description: "Every decision is made with our customers' needs in mind",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices",
    },
  ];

  // Milestones
  const milestones = [
    {
      year: "2020",
      title: "Founded",
      desc: "FixItPro launched with a vision to connect customers with trusted professionals",
    },
    {
      year: "2021",
      title: "First 1,000 Technicians",
      desc: "Expanded rapidly across multiple cities with verified professionals",
    },
    {
      year: "2022",
      title: "10,000+ Happy Customers",
      desc: "Reached major milestone with consistently high satisfaction ratings",
    },
    {
      year: "2023",
      title: "Launched Premium Pro Plan",
      desc: "Introduced subscription service for regular maintenance and support",
    },
    {
      year: "2024",
      title: "Mobile App Release",
      desc: "Launched iOS and Android apps with 500K+ downloads",
    },
    {
      year: "2026",
      title: "Expanding Nationally",
      desc: "Now serving 50+ cities with plans for national coverage",
    },
  ];

  return (
    <div className="about-page">
      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: #0a0a1e;
          color: #fff;
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .about-hero {
          min-height: 70vh;
          background: linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 20px 60px;
        }

        .about-hero::before {
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
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ============================================
           MISSION SECTION
           ============================================ */
        .mission-section {
          max-width: 1200px;
          margin: 6rem auto;
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

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 3rem;
        }

        .mission-text h2 {
          font-size: 2rem;
          margin: 0 0 1.5rem 0;
          color: #fff;
        }

        .mission-text p {
          color: #cbd5e1;
          line-height: 1.8;
          margin: 0 0 1rem 0;
          font-size: 1.05rem;
        }

        .mission-highlights {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .mission-highlights li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #cbd5e1;
        }

        .mission-highlights li::before {
          content: "✓";
          color: #6366f1;
          font-weight: 800;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .mission-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-item {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
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

        .mission-image {
          font-size: 5rem;
          text-align: center;
          opacity: 0.8;
        }

        /* ============================================
           VALUES SECTION
           ============================================ */
        .values-section {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .value-card:hover {
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-8px);
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.25rem;
          margin: 0 0 0.75rem 0;
          color: #fff;
        }

        .value-card p {
          color: #cbd5e1;
          margin: 0;
          line-height: 1.6;
        }

        /* ============================================
           TIMELINE SECTION
           ============================================ */
        .timeline-section {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #6366f1, #a78bfa);
        }

        .timeline-item {
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          margin-right: 51%;
          text-align: right;
        }

        .timeline-item:nth-child(even) {
          margin-left: 51%;
          text-align: left;
        }

        .timeline-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: 3px solid #0a0a1e;
          border-radius: 50%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-content {
          border-color: rgba(99, 102, 241, 0.6);
          background: rgba(99, 102, 241, 0.1);
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .timeline-desc {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
        }

        /* ============================================
           TEAM SECTION
           ============================================ */
        .team-section {
          max-width: 1200px;
          margin: 8rem auto;
          padding: 0 20px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .team-avatar {
          width: 100%;
          height: 250px;
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.15)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }

        .team-info {
          padding: 2rem;
          text-align: center;
        }

        .team-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .team-role {
          color: #6366f1;
          font-weight: 600;
          margin: 0 0 1rem 0;
          font-size: 0.95rem;
        }

        .team-bio {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        /* ============================================
           CTA SECTION
           ============================================ */
        .cta-section {
          max-width: 1200px;
          margin: 8rem auto 4rem;
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
          .mission-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item:nth-child(odd),
          .timeline-item:nth-child(even) {
            margin-left: 60px;
            margin-right: 0;
            text-align: left;
          }

          .timeline-dot {
            left: 0;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 20px 40px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .mission-stats {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
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

          .mission-text h2 {
            font-size: 1.5rem;
          }

          .timeline-year {
            font-size: 1.2rem;
          }

          .team-avatar {
            height: 180px;
            font-size: 3rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About FixItPro</h1>
          <p>
            We&apos;re on a mission to revolutionize the home services industry
            by connecting customers with trusted, vetted professionals who
            deliver exceptional quality and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Story</h2>
            <p>
              FixItPro was founded with a simple idea: finding a reliable home
              service provider shouldn&apos;t be complicated. Our founder spent
              years struggling to find trustworthy professionals, which inspired
              us to create a platform that solves this problem.
            </p>
            <p>
              Today, we&apos;ve become the go-to platform for thousands of
              customers and professionals who believe in quality, transparency,
              and community.
            </p>
            <ul className="mission-highlights">
              <li>15,000+ satisfied customers</li>
              <li>2,000+ verified professionals</li>
              <li>50+ service categories covered</li>
              <li>4.9★ average rating</li>
            </ul>
          </div>
          <div className="mission-image">🏠</div>
        </div>

        <div className="mission-stats">
          <div className="stat-item">
            <div className="stat-number">2020</div>
            <div className="stat-label">Founded</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Cities Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2K+</div>
            <div className="stat-label">Professionals</div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.title} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-title">{milestone.title}</div>
                <p className="timeline-desc">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Leadership Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">{member.image}</div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Join the FixItPro Community</h2>
        <p>
          Whether you&apos;re looking for a trusted professional or want to grow
          your business, we&apos;re here to help.
        </p>
        <div className="cta-buttons">
          <Link href="/services" className="cta-btn cta-btn--primary">
            Browse Services →
          </Link>
          <Link href="/register" className="cta-btn cta-btn--secondary">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
