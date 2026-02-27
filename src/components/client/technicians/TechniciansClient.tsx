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

interface TechniciansClientProps {
  technicians: Technician[];
}

export function TechniciansClient({ technicians }: TechniciansClientProps) {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");

  // Get unique specializations
  const specializations: string[] = [
    "all",
    ...Array.from(
      new Set(technicians.map((t: Technician) => t.specialization)),
    ),
  ];

  // Filter and sort technicians
  const filteredTechnicians = useMemo(() => {
    const filtered = technicians.filter((technician: Technician) => {
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
  }, [selectedSpecialization, searchTerm, sortBy, technicians]);

  return (
    <>
      {/* Filters & Search */}
      <section className="max-w-300 mx-auto -mt-10 px-5 relative z-20">
        <div className="relative mb-8">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-indigo-500">
            🔍
          </span>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
            placeholder="Search technicians..."
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
                <div className="bg-gradient-to-b from-indigo-500/15 to-purple-600/15 p-8 text-center">
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

                  <div className="flex justify-between items-center py-3 px-0">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      Response
                    </span>
                    <span className="text-white font-semibold text-right">
                      {tech.responseTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 border-t border-indigo-500/20">
                  <Link
                    href={`/technicians/${tech.id}`}
                    className="w-full px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded font-semibold cursor-pointer transition-all duration-300 text-center text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 inline-block"
                  >
                    View Profile
                  </Link>
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
    </>
  );
}
