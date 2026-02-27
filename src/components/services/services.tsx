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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section
        className="min-h-[60vh] bg-linear-to-br from-slate-950 to-slate-900 relative overflow-hidden flex items-center px-5 py-25 md:py-15
        before:absolute before:top-[-50%] before:right-[-50%] before:w-full before:h-full before:bg-radial-indigo-blue before:pointer-events-none"
      >
        <div className="relative z-10 max-w-300 mx-auto text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
            All Services
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-150 mx-auto leading-relaxed">
            Browse our complete catalog of 50+ professional services
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="max-w-300 mx-auto -mt-10 px-5 relative z-20">
        <div className="relative mb-8">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-indigo-500">
            🔍
          </span>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
            placeholder="Search services... (e.g., plumbing, painting, electrical)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="flex gap-4 mb-12 flex-wrap list-none p-0 items-center">
          {categories.map((category: string) => (
            <li
              key={category}
              className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 border-0 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/5 border-2 border-indigo-500/20 text-slate-400 hover:border-indigo-500/60 hover:text-purple-400"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all" ? "All Services" : category}
            </li>
          ))}
        </ul>
      </section>

      {/* Services Grid */}
      <section className="max-w-300 mx-auto my-16 px-5">
        <div className="text-slate-400 mb-8">
          Showing {filteredServices.length} service
          {filteredServices.length !== 1 ? "s" : ""}
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service: Service) => (
              <div
                key={service.id}
                className="bg-white/5 border border-indigo-500/20 rounded-lg p-8 transition-all duration-300 flex flex-col relative overflow-hidden cursor-pointer hover:border-indigo-500/60 hover:-translate-y-2 hover:bg-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/15"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
                  {service.description}
                </p>

                <div className="flex justify-between items-center py-4 px-0 border-t border-b border-indigo-500/20 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">
                      ★ {service.rating}
                    </span>
                    <span className="text-slate-400 text-xs">
                      ({service.reviews})
                    </span>
                  </div>
                  <div className="text-slate-400 text-sm flex items-center gap-2">
                    <span>⏱️</span>
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <Link href={`/services/${service.id}`}>
                    <button className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 border-0 rounded text-white font-semibold cursor-pointer transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-3xl mb-2 text-white">No Services Found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="max-w-300 mx-auto mb-16 mt-24 px-5 py-16 bg-linear-to-b from-indigo-500/15 to-purple-600/15 border border-indigo-500/30 rounded-2xl text-center">
        <h2 className="text-4xl mb-4 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
          Can&apos;t Find What You&apos;re Looking For?
        </h2>
        <p className="text-slate-400 mb-8">
          Our team can help. Contact us for custom service requests.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <button className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 border-0 rounded-lg text-white font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30">
              Contact Support
            </button>
          </Link>
          <Link href="/bookings/new">
            <button className="px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-indigo-500/10 hover:-translate-y-1">
              Request Service
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
