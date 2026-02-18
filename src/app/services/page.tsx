"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Service {
  id: number;
  name: string;
  category: string;
  icon: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  duration: string;
}

// All services organized by category
const ALL_SERVICES: Service[] = [
  // Plumbing
  {
    id: 1,
    name: "Pipe Repair & Installation",
    category: "Plumbing",
    icon: "🔧",
    price: "$150-$400",
    description: "Professional pipe repair, replacement, and new installations",
    rating: 4.8,
    reviews: 340,
    duration: "1-3 hours",
  },
  {
    id: 2,
    name: "Faucet & Sink Repair",
    category: "Plumbing",
    icon: "🚰",
    price: "$80-$200",
    description:
      "Fix leaky faucets, install new sinks, and handle drain issues",
    rating: 4.9,
    reviews: 520,
    duration: "30-60 mins",
  },
  {
    id: 3,
    name: "Water Heater Service",
    category: "Plumbing",
    icon: "🔥",
    price: "$300-$800",
    description: "Water heater repair, maintenance, and replacement",
    rating: 4.7,
    reviews: 280,
    duration: "1-3 hours",
  },
  {
    id: 4,
    name: "Toilet Repair",
    category: "Plumbing",
    icon: "🚽",
    price: "$100-$300",
    description: "Toilet repair, replacement, and maintenance services",
    rating: 4.8,
    reviews: 410,
    duration: "30-90 mins",
  },
  {
    id: 5,
    name: "Drain Cleaning",
    category: "Plumbing",
    icon: "💧",
    price: "$120-$350",
    description: "Clogged drain removal and pipe cleaning services",
    rating: 4.9,
    reviews: 610,
    duration: "1-2 hours",
  },

  // Electrical
  {
    id: 6,
    name: "Outlet & Switch Installation",
    category: "Electrical",
    icon: "💡",
    price: "$100-$250",
    description: "Install new outlets, switches, and light fixtures",
    rating: 4.8,
    reviews: 390,
    duration: "1-2 hours",
  },
  {
    id: 7,
    name: "Circuit Breaker Service",
    category: "Electrical",
    icon: "⚡",
    price: "$200-$500",
    description: "Circuit breaker repair, replacement, and panel upgrades",
    rating: 4.7,
    reviews: 210,
    duration: "1-3 hours",
  },
  {
    id: 8,
    name: "Lighting Installation",
    category: "Electrical",
    icon: "💡",
    price: "$150-$400",
    description: "Install ceiling fans, chandeliers, and custom lighting",
    rating: 4.9,
    reviews: 480,
    duration: "1-2 hours",
  },
  {
    id: 9,
    name: "Electrical Wiring",
    category: "Electrical",
    icon: "🔌",
    price: "$300-$1000",
    description: "New wiring installation and home rewiring services",
    rating: 4.8,
    reviews: 160,
    duration: "2-4 hours",
  },
  {
    id: 10,
    name: "Generator Installation",
    category: "Electrical",
    icon: "⚙️",
    price: "$2000-$5000",
    description: "Install and maintain backup generators",
    rating: 4.9,
    reviews: 85,
    duration: "4-8 hours",
  },

  // HVAC
  {
    id: 11,
    name: "AC Installation & Repair",
    category: "HVAC",
    icon: "❄️",
    price: "$500-$3000",
    description: "Air conditioning installation, repair, and maintenance",
    rating: 4.8,
    reviews: 610,
    duration: "2-4 hours",
  },
  {
    id: 12,
    name: "Heating System Service",
    category: "HVAC",
    icon: "🔥",
    price: "$400-$2500",
    description: "Furnace repair, installation, and seasonal maintenance",
    rating: 4.7,
    reviews: 450,
    duration: "1-3 hours",
  },
  {
    id: 13,
    name: "Air Duct Cleaning",
    category: "HVAC",
    icon: "💨",
    price: "$200-$600",
    description: "Professional duct cleaning and HVAC system maintenance",
    rating: 4.9,
    reviews: 520,
    duration: "2-3 hours",
  },
  {
    id: 14,
    name: "Thermostat Installation",
    category: "HVAC",
    icon: "🌡️",
    price: "$150-$400",
    description: "Install smart and traditional thermostats",
    rating: 4.8,
    reviews: 380,
    duration: "1-2 hours",
  },
  {
    id: 15,
    name: "Vent & Damper Repair",
    category: "HVAC",
    icon: "📩",
    price: "$100-$300",
    description: "Repair dryer vents, dampers, and exhaust systems",
    rating: 4.8,
    reviews: 290,
    duration: "30-90 mins",
  },

  // Carpentry
  {
    id: 16,
    name: "Cabinet Installation",
    category: "Carpentry",
    icon: "🗄️",
    price: "$400-$2000",
    description: "Install kitchen and bathroom cabinets",
    rating: 4.9,
    reviews: 380,
    duration: "2-4 hours",
  },
  {
    id: 17,
    name: "Door Installation",
    category: "Carpentry",
    icon: "🚪",
    price: "$300-$800",
    description: "Interior and exterior door installation",
    rating: 4.8,
    reviews: 520,
    duration: "1-3 hours",
  },
  {
    id: 18,
    name: "Deck Building",
    category: "Carpentry",
    icon: "🏗️",
    price: "$2000-$10000",
    description: "Build and repair wooden decks and patios",
    rating: 4.8,
    reviews: 210,
    duration: "1-5 days",
  },
  {
    id: 19,
    name: "Shelving & Storage",
    category: "Carpentry",
    icon: "📚",
    price: "$200-$800",
    description: "Install shelves, closet systems, and storage solutions",
    rating: 4.9,
    reviews: 450,
    duration: "2-3 hours",
  },
  {
    id: 20,
    name: "Furniture Assembly",
    category: "Carpentry",
    icon: "🪑",
    price: "$50-$300",
    description: "Assemble and install furniture pieces",
    rating: 4.7,
    reviews: 680,
    duration: "30-120 mins",
  },

  // Painting
  {
    id: 21,
    name: "Interior Painting",
    category: "Painting",
    icon: "🎨",
    price: "$400-$2000",
    description: "Professional interior wall and ceiling painting",
    rating: 4.9,
    reviews: 820,
    duration: "1-3 days",
  },
  {
    id: 22,
    name: "Exterior Painting",
    category: "Painting",
    icon: "🏠",
    price: "$800-$5000",
    description: "Exterior house painting and trim work",
    rating: 4.8,
    reviews: 540,
    duration: "2-5 days",
  },
  {
    id: 23,
    name: "Cabinet Painting",
    category: "Painting",
    icon: "🎨",
    price: "$300-$1200",
    description: "Cabinet refinishing and custom painting",
    rating: 4.8,
    reviews: 380,
    duration: "1-3 days",
  },
  {
    id: 24,
    name: "Wallpaper Installation",
    category: "Painting",
    icon: "🖼️",
    price: "$200-$800",
    description: "Wallpaper hanging, removal, and installation",
    rating: 4.9,
    reviews: 310,
    duration: "4-8 hours",
  },
  {
    id: 25,
    name: "Drywall Repair",
    category: "Painting",
    icon: "🧱",
    price: "$150-$600",
    description: "Drywall patching, mudding, and finishing",
    rating: 4.8,
    reviews: 420,
    duration: "1-2 hours",
  },

  // Landscaping
  {
    id: 26,
    name: "Lawn Maintenance",
    category: "Landscaping",
    icon: "🌱",
    price: "$50-$200",
    description: "Regular mowing, trimming, and yard maintenance",
    rating: 4.9,
    reviews: 1200,
    duration: "1-2 hours",
  },
  {
    id: 27,
    name: "Garden Design",
    category: "Landscaping",
    icon: "🌻",
    price: "$500-$3000",
    description: "Garden planning, planting, and landscape design",
    rating: 4.8,
    reviews: 280,
    duration: "Varies",
  },
  {
    id: 28,
    name: "Tree Trimming & Removal",
    category: "Landscaping",
    icon: "🌳",
    price: "$300-$1500",
    description: "Tree pruning, trimming, and removal services",
    rating: 4.8,
    reviews: 410,
    duration: "2-4 hours",
  },
  {
    id: 29,
    name: "Hardscape Installation",
    category: "Landscaping",
    icon: "🪨",
    price: "$800-$5000",
    description: "Patio, walkway, and retaining wall installation",
    rating: 4.9,
    reviews: 220,
    duration: "1-3 days",
  },
  {
    id: 30,
    name: "Gutter Cleaning",
    category: "Landscaping",
    icon: "💧",
    price: "$100-$300",
    description: "Gutter cleaning, repair, and installation",
    rating: 4.9,
    reviews: 890,
    duration: "1-2 hours",
  },

  // Home Cleaning
  {
    id: 31,
    name: "General House Cleaning",
    category: "Cleaning",
    icon: "🧹",
    price: "$100-$400",
    description: "Comprehensive home cleaning and organization",
    rating: 4.9,
    reviews: 2100,
    duration: "2-4 hours",
  },
  {
    id: 32,
    name: "Carpet Cleaning",
    category: "Cleaning",
    icon: "🧯",
    price: "$150-$500",
    description: "Professional carpet and upholstery cleaning",
    rating: 4.9,
    reviews: 890,
    duration: "1-3 hours",
  },
  {
    id: 33,
    name: "Window Cleaning",
    category: "Cleaning",
    icon: "🪟",
    price: "$80-$300",
    description: "Interior and exterior window cleaning",
    rating: 4.8,
    reviews: 650,
    duration: "1-2 hours",
  },
  {
    id: 34,
    name: "Deep Cleaning",
    category: "Cleaning",
    icon: "✨",
    price: "$200-$800",
    description: "Thorough deep cleaning of entire home",
    rating: 4.9,
    reviews: 1100,
    duration: "4-8 hours",
  },
  {
    id: 35,
    name: "Move-In/Out Cleaning",
    category: "Cleaning",
    icon: "🚚",
    price: "$300-$1000",
    description: "Full cleaning service for moving transitions",
    rating: 4.9,
    reviews: 540,
    duration: "4-8 hours",
  },

  // Smart Home & Security
  {
    id: 36,
    name: "Security System Installation",
    category: "Smart Home",
    icon: "📹",
    price: "$500-$2000",
    description: "Install and configure security systems and cameras",
    rating: 4.9,
    reviews: 410,
    duration: "2-4 hours",
  },
  {
    id: 37,
    name: "Smart Home Setup",
    category: "Smart Home",
    icon: "🏠",
    price: "$300-$1500",
    description: "Install smart lighting, locks, and automation",
    rating: 4.8,
    reviews: 280,
    duration: "2-3 hours",
  },
  {
    id: 38,
    name: "WiFi & Network Setup",
    category: "Smart Home",
    icon: "📡",
    price: "$100-$400",
    description: "Install WiFi routers, extend range, and optimize networks",
    rating: 4.8,
    reviews: 620,
    duration: "1-2 hours",
  },
  {
    id: 39,
    name: "Doorbell & Camera Install",
    category: "Smart Home",
    icon: "🔔",
    price: "$150-$500",
    description: "Install smart doorbells and security cameras",
    rating: 4.9,
    reviews: 380,
    duration: "1-2 hours",
  },
  {
    id: 40,
    name: "Home Audio Setup",
    category: "Smart Home",
    icon: "🔊",
    price: "$400-$2000",
    description: "Install home theater and whole-home audio systems",
    rating: 4.8,
    reviews: 190,
    duration: "2-4 hours",
  },

  // Appliance Repair
  {
    id: 41,
    name: "Refrigerator Repair",
    category: "Appliances",
    icon: "🧊",
    price: "$150-$500",
    description: "Repair cooling, ice maker, and other issues",
    rating: 4.8,
    reviews: 520,
    duration: "1-2 hours",
  },
  {
    id: 42,
    name: "Washer & Dryer Service",
    category: "Appliances",
    icon: "🧺",
    price: "$120-$400",
    description: "Repair and maintenance of washing machines and dryers",
    rating: 4.9,
    reviews: 890,
    duration: "1-2 hours",
  },
  {
    id: 43,
    name: "Dishwasher Repair",
    category: "Appliances",
    icon: "🍽️",
    price: "$140-$450",
    description: "Fix leaks, drainage, and performance issues",
    rating: 4.8,
    reviews: 410,
    duration: "1-2 hours",
  },
  {
    id: 44,
    name: "Oven & Stove Repair",
    category: "Appliances",
    icon: "🍳",
    price: "$150-$500",
    description: "Repair gas and electric stoves and ovens",
    rating: 4.8,
    reviews: 310,
    duration: "1-2 hours",
  },
  {
    id: 45,
    name: "Microwave Installation",
    category: "Appliances",
    icon: "🌡️",
    price: "$100-$300",
    description: "Install and repair microwave ovens",
    rating: 4.7,
    reviews: 240,
    duration: "30-90 mins",
  },

  // Roofing
  {
    id: 46,
    name: "Roof Repair",
    category: "Roofing",
    icon: "🏠",
    price: "$300-$1500",
    description: "Fix leaks, damaged shingles, and roof issues",
    rating: 4.8,
    reviews: 380,
    duration: "2-4 hours",
  },
  {
    id: 47,
    name: "Roof Inspection",
    category: "Roofing",
    icon: "🔍",
    price: "$150-$300",
    description: "Professional roof inspection and assessment",
    rating: 4.9,
    reviews: 290,
    duration: "1-2 hours",
  },
  {
    id: 48,
    name: "Gutter Installation",
    category: "Roofing",
    icon: "📩",
    price: "$400-$1500",
    description: "Install new gutters and downspouts",
    rating: 4.8,
    reviews: 410,
    duration: "4-8 hours",
  },
  {
    id: 49,
    name: "Roof Replacement",
    category: "Roofing",
    icon: "🏗️",
    price: "$3000-$15000",
    description: "Complete roof replacement and installation",
    rating: 4.8,
    reviews: 220,
    duration: "2-5 days",
  },
  {
    id: 50,
    name: "Gutter Repair",
    category: "Roofing",
    icon: "🔧",
    price: "$100-$400",
    description: "Repair and maintain gutters and downspouts",
    rating: 4.9,
    reviews: 680,
    duration: "1-2 hours",
  },

  // Flooring
  {
    id: 51,
    name: "Tile Installation",
    category: "Flooring",
    icon: "🧩",
    price: "$500-$2500",
    description: "Install ceramic, porcelain, and natural stone tiles",
    rating: 4.9,
    reviews: 420,
    duration: "2-4 days",
  },
  {
    id: 52,
    name: "Hardwood Floor Installation",
    category: "Flooring",
    icon: "🪵",
    price: "$800-$4000",
    description: "Install hardwood floors and refinishing",
    rating: 4.8,
    reviews: 280,
    duration: "2-5 days",
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Get unique categories
  const categories: string[] = [
    "all",
    ...Array.from(new Set(ALL_SERVICES.map((s: Service) => s.category))),
  ];

  // Filter services
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service: Service) => {
      const matchCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const matchSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="services-page">
      <style jsx>{`
        .services-page {
          min-height: 100vh;
          background: #0a0a1e;
          color: #fff;
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .services-hero {
          min-height: 60vh;
          background: linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 20px 60px;
        }

        .services-hero::before {
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
           SEARCH & FILTER SECTION
           ============================================ */
        .search-filter-section {
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

        .filter-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          padding: 0;
          list-style: none;
          align-items: center;
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
           SERVICES GRID
           ============================================ */
        .services-section {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 20px;
        }

        .services-count {
          color: #cbd5e1;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
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

        .service-card:hover {
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-8px);
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .service-icon {
          font-size: 2.5rem;
        }

        .service-badge {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #fff;
          line-height: 1.4;
        }

        .service-description {
          color: #cbd5e1;
          font-size: 0.95rem;
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
          flex-grow: 1;
        }

        .service-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1rem;
        }

        .service-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .service-stars {
          color: #fbbf24;
          font-size: 0.9rem;
        }

        .service-reviews {
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        .service-duration {
          color: #cbd5e1;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .service-price {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-btn {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .service-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        /* ============================================
           EMPTY STATE
           ============================================ */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #cbd5e1;
        }

        .empty-state-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        /* ============================================
           FOOTER CTA
           ============================================ */
        .footer-cta {
          max-width: 1200px;
          margin: 6rem auto 4rem;
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
        @media (max-width: 768px) {
          .services-hero {
            padding: 80px 20px 40px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .filter-tabs {
            gap: 0.75rem;
          }

          .filter-tab {
            font-size: 0.85rem;
            padding: 0.6rem 1.2rem;
          }

          .search-input {
            font-size: 1rem;
          }

          .footer-cta {
            padding: 2rem;
          }

          .footer-cta h2 {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
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

          .services-grid {
            gap: 1rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon {
            font-size: 2rem;
          }

          .service-card h3 {
            font-size: 1.1rem;
          }

          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .filter-tab {
            white-space: nowrap;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>All Services</h1>
          <p>Browse our complete catalog of 50+ professional services</p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="search-filter-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search services... (e.g., plumbing, painting, electrical)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="filter-tabs">
          {categories.map((category: string) => (
            <li
              key={category}
              className={`filter-tab ${selectedCategory === category ? "filter-tab--active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all" ? "All Services" : category}
            </li>
          ))}
        </ul>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-count">
          Showing {filteredServices.length} service
          {filteredServices.length !== 1 ? "s" : ""}
        </div>

        {filteredServices.length > 0 ? (
          <div className="services-grid">
            {filteredServices.map((service: Service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-badge">{service.category}</span>
                </div>

                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-info">
                  <div className="service-rating">
                    <span className="service-stars">★ {service.rating}</span>
                    <span className="service-reviews">({service.reviews})</span>
                  </div>
                  <div className="service-duration">
                    <span>⏱️</span>
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <Link href={`/services/${service.id}`}>
                    <button className="service-btn">Book Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3>No Services Found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <h2>Can&apos;t Find What You&apos;re Looking For?</h2>
        <p>Our team can help. Contact us for custom service requests.</p>
        <div className="cta-buttons">
          <Link href="/contact">
            <button className="cta-btn cta-btn--primary">
              Contact Support
            </button>
          </Link>
          <Link href="/bookings/new">
            <button className="cta-btn cta-btn--secondary">
              Request Service
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
