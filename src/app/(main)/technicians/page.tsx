"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Technician {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  reviews: number;
  hourlyRate: string;
  experience: string;
  certifications: string[];
  availability: string;
  responseTime: string;
  image: string;
  verified: boolean;
  completedJobs: number;
  bio: string;
}

// Sample technicians data
const ALL_TECHNICIANS: Technician[] = [
  {
    id: 1,
    name: "John Anderson",
    specialization: "Plumbing",
    rating: 4.9,
    reviews: 320,
    hourlyRate: "$65-85",
    experience: "12 years",
    certifications: ["Master Plumber", "Gas Fitting"],
    availability: "Mon-Sat",
    responseTime: "1-2 hours",
    image: "👨‍🔧",
    verified: true,
    completedJobs: 1200,
    bio: "Expert plumber with extensive experience in residential repairs",
  },
  {
    id: 2,
    name: "Maria Garcia",
    specialization: "Electrical",
    rating: 4.8,
    reviews: 285,
    hourlyRate: "$70-90",
    experience: "10 years",
    certifications: ["Licensed Electrician", "Home Inspector"],
    availability: "Mon-Fri",
    responseTime: "2-3 hours",
    image: "👩‍🔧",
    verified: true,
    completedJobs: 950,
    bio: "Reliable electrician specializing in residential wiring and repairs",
  },
  {
    id: 3,
    name: "Robert Smith",
    specialization: "HVAC",
    rating: 4.9,
    reviews: 412,
    hourlyRate: "$75-100",
    experience: "15 years",
    certifications: ["EPA Certified", "NATE Certified"],
    availability: "Mon-Sun",
    responseTime: "Same-day",
    image: "👨‍⚙️",
    verified: true,
    completedJobs: 1500,
    bio: "HVAC specialist with expertise in AC and heating systems",
  },
  {
    id: 4,
    name: "Lisa Chen",
    specialization: "Carpentry",
    rating: 4.7,
    reviews: 198,
    hourlyRate: "$60-80",
    experience: "8 years",
    certifications: ["Certified Carpenter", "Safety Course"],
    availability: "Tue-Sat",
    responseTime: "2-4 hours",
    image: "👩‍🔨",
    verified: true,
    completedJobs: 720,
    bio: "Skilled carpenter for furniture assembly and custom installations",
  },
  {
    id: 5,
    name: "James Wilson",
    specialization: "Painting",
    rating: 4.8,
    reviews: 356,
    hourlyRate: "$50-70",
    experience: "9 years",
    certifications: ["Professional Painter", "Eco-Friendly Painting"],
    availability: "Mon-Sat",
    responseTime: "2-3 hours",
    image: "👨‍🎨",
    verified: true,
    completedJobs: 890,
    bio: "Expert painter offering interior and exterior painting services",
  },
  {
    id: 6,
    name: "Angela Martinez",
    specialization: "Landscaping",
    rating: 4.9,
    reviews: 478,
    hourlyRate: "$45-65",
    experience: "11 years",
    certifications: ["Landscape Designer", "Horticulture Specialist"],
    availability: "Mon-Sun",
    responseTime: "24 hours",
    image: "👩‍🌾",
    verified: true,
    completedJobs: 1100,
    bio: "Professional landscaper creating beautiful outdoor spaces",
  },
  {
    id: 7,
    name: "David Thompson",
    specialization: "Cleaning",
    rating: 4.9,
    reviews: 524,
    hourlyRate: "$40-60",
    experience: "7 years",
    certifications: ["Professional Cleaner", "Eco-Friendly Cleaning"],
    availability: "Mon-Sun",
    responseTime: "2-3 hours",
    image: "👨‍🧹",
    verified: true,
    completedJobs: 1350,
    bio: "Reliable cleaning expert for residential and commercial spaces",
  },
  {
    id: 8,
    name: "Emily Rodriguez",
    specialization: "Smart Home",
    rating: 4.8,
    reviews: 267,
    hourlyRate: "$80-110",
    experience: "6 years",
    certifications: ["Smart Home Specialist", "Network Technician"],
    availability: "Mon-Fri",
    responseTime: "3-4 hours",
    image: "👩‍💻",
    verified: true,
    completedJobs: 580,
    bio: "Tech expert for smart home installation and setup",
  },
  {
    id: 9,
    name: "Michael Lee",
    specialization: "Appliances",
    rating: 4.7,
    reviews: 289,
    hourlyRate: "$65-85",
    experience: "9 years",
    certifications: ["Appliance Repair Expert", "Safety Certified"],
    availability: "Mon-Sat",
    responseTime: "2-4 hours",
    image: "👨‍🔧",
    verified: true,
    completedJobs: 1050,
    bio: "Skilled appliance technician for all major brands",
  },
  {
    id: 10,
    name: "Sarah Bennett",
    specialization: "Roofing",
    rating: 4.9,
    reviews: 312,
    hourlyRate: "$70-95",
    experience: "13 years",
    certifications: ["Roofing Specialist", "OSHA Certified"],
    availability: "Tue-Sun",
    responseTime: "Same-day",
    image: "👩‍🔧",
    verified: true,
    completedJobs: 1100,
    bio: "Experienced roofer for repairs and replacements",
  },
  {
    id: 11,
    name: "Christopher Davis",
    specialization: "Flooring",
    rating: 4.8,
    reviews: 245,
    hourlyRate: "$55-75",
    experience: "10 years",
    certifications: ["Floor Installation Expert", "Wood Specialist"],
    availability: "Mon-Sat",
    responseTime: "2-3 hours",
    image: "👨‍🏭",
    verified: true,
    completedJobs: 830,
    bio: "Professional flooring installation and maintenance",
  },
  {
    id: 12,
    name: "Jessica White",
    specialization: "Interior Design",
    rating: 4.9,
    reviews: 198,
    hourlyRate: "$75-100",
    experience: "8 years",
    certifications: ["Interior Designer", "Color Specialist"],
    availability: "Mon-Fri",
    responseTime: "24 hours",
    image: "👩‍🎨",
    verified: true,
    completedJobs: 450,
    bio: "Creative interior designer for home transformations",
  },
];

export default function TechniciansPage() {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");

  // Get unique specializations
  const specializations: string[] = [
    "all",
    ...Array.from(
      new Set(ALL_TECHNICIANS.map((t: Technician) => t.specialization)),
    ),
  ];

  // Filter and sort technicians
  const filteredTechnicians = useMemo(() => {
    let filtered = ALL_TECHNICIANS.filter((technician: Technician) => {
      const matchSpec =
        selectedSpecialization === "all" ||
        technician.specialization === selectedSpecialization;
      const matchSearch =
        technician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        technician.specialization
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        technician.bio.toLowerCase().includes(searchTerm.toLowerCase());
      return matchSpec && matchSearch;
    });

    // Sort
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.hourlyRate.split("-")[0].replace("$", ""));
        const priceB = parseInt(b.hourlyRate.split("-")[0].replace("$", ""));
        return priceA - priceB;
      });
    }

    return filtered;
  }, [selectedSpecialization, searchTerm, sortBy]);

  return (
    <div className="technicians-page">
      <style jsx>{`
        .technicians-page {
          min-height: 100vh;
          background: #0a0a1e;
          color: #fff;
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .tech-hero {
          min-height: 60vh;
          background: linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 20px 60px;
        }

        .tech-hero::before {
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
          width: 100%;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* ============================================
           FILTERS & SEARCH
           ============================================ */
        .filters-section {
          max-width: 1200px;
          margin: -40px auto 0;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        .search-box {
          position: relative;
          margin-bottom: 2rem;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1.5rem 1rem 3.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(99, 102, 241, 0.8);
          background: rgba(99, 102, 241, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.3rem;
          color: #6366f1;
        }

        .filter-controls {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-group {
          flex: 1;
          min-width: 200px;
        }

        .filter-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-select {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 8px;
          color: #fff;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:hover,
        .filter-select:focus {
          border-color: rgba(99, 102, 241, 0.8);
          background: rgba(99, 102, 241, 0.1);
          outline: none;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          padding: 0;
          list-style: none;
        }

        .filter-tab {
          padding: 0.7rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          color: #cbd5e1;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          border-color: rgba(99, 102, 241, 0.6);
          color: #a78bfa;
        }

        .filter-tab--active {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        /* ============================================
           TECHNICIANS GRID
           ============================================ */
        .technicians-section {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 20px;
        }

        .results-count {
          color: #cbd5e1;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .technicians-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tech-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .tech-card:hover {
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-8px);
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .tech-header {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.15)
          );
          padding: 2rem;
          text-align: center;
        }

        .tech-avatar {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .tech-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .tech-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.25rem 0;
        }

        .tech-spec {
          color: #6366f1;
          font-weight: 600;
          font-size: 0.95rem;
          margin: 0;
        }

        .tech-body {
          padding: 1.5rem;
          flex-grow: 1;
        }

        .tech-info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
        }

        .tech-info-row:last-of-type {
          border-bottom: none;
        }

        .info-label {
          color: #cbd5e1;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          color: #fff;
          font-weight: 600;
          text-align: right;
        }

        .tech-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .rating-stars {
          color: #fbbf24;
          font-size: 0.9rem;
        }

        .rating-count {
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        .tech-certifications {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
        }

        .cert-label {
          color: #cbd5e1;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cert-tag {
          background: rgba(99, 102, 241, 0.2);
          color: #a78bfa;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .tech-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
          display: flex;
          gap: 1rem;
        }

        .tech-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
          font-size: 0.95rem;
        }

        .tech-btn--primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .tech-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .tech-btn--secondary {
          background: transparent;
          border: 2px solid rgba(99, 102, 241, 0.3);
          color: #a78bfa;
        }

        .tech-btn--secondary:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        /* ============================================
           EMPTY STATE
           ============================================ */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #cbd5e1;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        /* ============================================
           RESPONSIVE DESIGN
           ============================================ */
        @media (max-width: 768px) {
          .tech-hero {
            padding: 80px 20px 40px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .filter-controls {
            gap: 1rem;
            flex-direction: column;
          }

          .filter-group {
            min-width: auto;
          }

          .technicians-grid {
            grid-template-columns: 1fr;
          }

          .tech-footer {
            flex-direction: column;
          }

          .tech-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.5rem;
          }

          .hero-content p {
            font-size: 0.95rem;
          }

          .tech-header {
            padding: 1.5rem;
          }

          .tech-avatar {
            font-size: 2.5rem;
          }

          .tech-name {
            font-size: 1.1rem;
          }

          .filter-tabs {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .filter-tab {
            white-space: nowrap;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="tech-hero">
        <div className="hero-content">
          <h1>Browse Technicians</h1>
          <p>
            Find and hire top-rated professionals for all your home service
            needs
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="filters-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search technicians by name, skill, or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label className="filter-label">Specialization</label>
            <select
              className="filter-select"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec === "all" ? "All Specializations" : spec}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Highest Rating</option>
              <option value="reviews">Most Reviews</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>

        <ul className="filter-tabs">
          {specializations.map((spec) => (
            <li
              key={spec}
              className={`filter-tab ${selectedSpecialization === spec ? "filter-tab--active" : ""}`}
              onClick={() => setSelectedSpecialization(spec)}
            >
              {spec === "all" ? "All" : spec}
            </li>
          ))}
        </ul>
      </section>

      {/* Technicians Grid */}
      <section className="technicians-section">
        <div className="results-count">
          Showing {filteredTechnicians.length} technician
          {filteredTechnicians.length !== 1 ? "s" : ""}
        </div>

        {filteredTechnicians.length > 0 ? (
          <div className="technicians-grid">
            {filteredTechnicians.map((tech) => (
              <div key={tech.id} className="tech-card">
                <div className="tech-header">
                  <div className="tech-avatar">{tech.image}</div>
                  {tech.verified && (
                    <span className="tech-badge">✓ Verified</span>
                  )}
                  <h3 className="tech-name">{tech.name}</h3>
                  <p className="tech-spec">{tech.specialization}</p>
                </div>

                <div className="tech-body">
                  <div className="tech-info-row">
                    <span className="info-label">Rating</span>
                    <span className="info-value">
                      <span className="tech-rating">
                        <span className="rating-stars">★ {tech.rating}</span>
                        <span className="rating-count">({tech.reviews})</span>
                      </span>
                    </span>
                  </div>

                  <div className="tech-info-row">
                    <span className="info-label">Rate</span>
                    <span className="info-value">{tech.hourlyRate}/hr</span>
                  </div>

                  <div className="tech-info-row">
                    <span className="info-label">Experience</span>
                    <span className="info-value">{tech.experience}</span>
                  </div>

                  <div className="tech-info-row">
                    <span className="info-label">Response</span>
                    <span className="info-value">{tech.responseTime}</span>
                  </div>

                  <div className="tech-info-row">
                    <span className="info-label">Completed</span>
                    <span className="info-value">
                      {tech.completedJobs} jobs
                    </span>
                  </div>

                  <div className="tech-certifications">
                    <span className="cert-label">Certifications</span>
                    <div className="cert-tags">
                      {tech.certifications.map((cert, idx) => (
                        <span key={idx} className="cert-tag">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="tech-footer">
                  <Link
                    href={`/technicians/${tech.id}`}
                    className="tech-btn tech-btn--primary"
                  >
                    View Profile
                  </Link>
                  <button className="tech-btn tech-btn--secondary">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No Technicians Found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  );
}
