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

interface ServicesClientProps {
  services: Service[];
}

export function ServicesClient({ services }: ServicesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Get unique categories
  const categories: string[] = [
    "all",
    ...Array.from(new Set(services.map((s: Service) => s.category))),
  ];

  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter((service: Service) => {
      const matchCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const matchSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm, services]);

  return (
    <>
      {/* Search & Filter Section */}
      <section className="max-w-300 mx-auto -mt-10 px-5 relative z-20">
        <div className="relative mb-8">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-indigo-500">
            🔍
          </span>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/10 transition-all duration-300"
            placeholder="Search services..."
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
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white shadow-lg shadow-indigo-500/30"
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
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
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
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <Link href={`/services/${service.id}`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 border-0 rounded text-white font-semibold cursor-pointer transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
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
    </>
  );
}
