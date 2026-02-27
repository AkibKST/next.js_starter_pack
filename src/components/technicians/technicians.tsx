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
    const filtered = ALL_TECHNICIANS.filter((technician: Technician) => {
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section
        className="min-h-[60vh] bg-linear-to-br from-slate-950 to-slate-900 relative overflow-hidden flex items-center px-5 py-25 md:py-15
        before:absolute before:top-[-50%] before:right-[-50%] before:w-full before:h-full before:bg-radial-indigo-blue before:pointer-events-none"
      >
        <div className="relative z-10 max-w-225 mx-auto text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
            Browse Technicians
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-150 mx-auto leading-relaxed">
            Find and hire top-rated professionals for all your home service
            needs
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-300 mx-auto -mt-10 px-5 relative z-20">
        <div className="relative mb-8">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-indigo-500">
            🔍
          </span>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
            placeholder="Search technicians by name, skill, or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-8 mb-8 flex-wrap">
          <div className="flex-1 min-w-50">
            <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              Specialization
            </label>
            <select
              className="w-full px-3 py-2 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm cursor-pointer hover:border-indigo-500/80 hover:bg-indigo-500/10 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec} className="bg-slate-900">
                  {spec === "all" ? "All Specializations" : spec}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-50">
            <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              Sort By
            </label>
            <select
              className="w-full px-3 py-2 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm cursor-pointer hover:border-indigo-500/80 hover:bg-indigo-500/10 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating" className="bg-slate-900">
                Highest Rating
              </option>
              <option value="reviews" className="bg-slate-900">
                Most Reviews
              </option>
              <option value="price-low" className="bg-slate-900">
                Price: Low to High
              </option>
            </select>
          </div>
        </div>

        <ul className="flex gap-4 mb-8 flex-wrap list-none p-0">
          {specializations.map((spec) => (
            <li
              key={spec}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                selectedSpecialization === spec
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 border-0 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/5 border-2 border-indigo-500/20 text-slate-400 hover:border-indigo-500/60 hover:text-purple-400"
              }`}
              onClick={() => setSelectedSpecialization(spec)}
            >
              {spec === "all" ? "All" : spec}
            </li>
          ))}
        </ul>
      </section>

      {/* Technicians Grid */}
      <section className="max-w-300 mx-auto my-16 px-5">
        <div className="text-slate-400 mb-8">
          Showing {filteredTechnicians.length} technician
          {filteredTechnicians.length !== 1 ? "s" : ""}
        </div>

        {filteredTechnicians.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTechnicians.map((tech) => (
              <div
                key={tech.id}
                className="bg-white/5 border border-indigo-500/20 rounded-lg overflow-hidden transition-all duration-300 flex flex-col hover:border-indigo-500/60 hover:-translate-y-2 hover:bg-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/15"
              >
                <div className="bg-linear-to-b from-indigo-500/15 to-purple-600/15 p-8 text-center">
                  <div className="text-5xl mb-4">{tech.image}</div>
                  {tech.verified && (
                    <span className="inline-block bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold mb-2">
                      ✓ Verified
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-indigo-500 font-semibold text-sm m-0">
                    {tech.specialization}
                  </p>
                </div>

                <div className="p-6 grow">
                  <div className="flex justify-between items-center py-3 px-0 border-b border-indigo-500/20">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Rating
                    </span>
                    <span className="text-white font-semibold flex items-center gap-2">
                      <span className="text-amber-400 text-sm">
                        ★ {tech.rating}
                      </span>
                      <span className="text-slate-400 text-xs">
                        ({tech.reviews})
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 px-0 border-b border-indigo-500/20">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Rate
                    </span>
                    <span className="text-white font-semibold text-right">
                      {tech.hourlyRate}/hr
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 px-0 border-b border-indigo-500/20">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Experience
                    </span>
                    <span className="text-white font-semibold text-right">
                      {tech.experience}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 px-0 border-b border-indigo-500/20">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Response
                    </span>
                    <span className="text-white font-semibold text-right">
                      {tech.responseTime}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 px-0 border-b border-indigo-500/20">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Completed
                    </span>
                    <span className="text-white font-semibold text-right">
                      {tech.completedJobs} jobs
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-indigo-500/20">
                    <span className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Certifications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tech.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-500/20 text-purple-400 px-2 py-1 rounded text-xs font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-indigo-500/20 flex gap-4">
                  <Link
                    href={`/technicians/${tech.id}`}
                    className="flex-1 px-3 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded font-semibold cursor-pointer transition-all duration-300 text-center text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
                  >
                    View Profile
                  </Link>
                  <button className="flex-1 px-3 py-2 bg-transparent border-2 border-indigo-500/30 text-purple-400 rounded font-semibold cursor-pointer transition-all duration-300 text-sm hover:border-indigo-500 hover:bg-indigo-500/10">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-3xl mb-2 text-white">No Technicians Found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  );
}
