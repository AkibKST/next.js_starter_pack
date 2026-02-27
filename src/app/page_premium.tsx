/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { SERVICES, FEATURES, STATS } from "@/constants/home";
import { ArrowIcon } from "@/components/icons";

// Optimized Server Component - Enhanced Eye-Catching Design
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-indigo-950/30 to-slate-950 overflow-hidden flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-block mb-8 px-4 py-2 rounded-full border border-indigo-600/40 bg-indigo-600/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-indigo-300">
              ✨ Professional Home Services Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            Your Home,
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Our Expertise
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with{" "}
            <span className="text-indigo-300 font-semibold">
              verified technicians
            </span>{" "}
            for professional home repairs and maintenance. Available 24/7, rated
            by thousands of satisfied customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/services"
              className="group relative px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-indigo-600/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Browse Services
                <ArrowIcon />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/technicians"
              className="px-8 py-4 border-2 border-indigo-600/60 text-indigo-300 font-bold rounded-xl hover:bg-indigo-600/20 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
            >
              Find Expert Technicians
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-slate-800">
            <div>
              <p className="text-3xl font-bold text-indigo-400">100+</p>
              <p className="text-sm text-slate-400">Expert Technicians</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">5000+</p>
              <p className="text-sm text-slate-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">4.9★</p>
              <p className="text-sm text-slate-400">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section - Eye-Catching Cards */}
      <section className="relative py-24 px-4 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Complete Service Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From plumbing emergencies to landscaping makeovers—we've got
              expert professionals for every home need.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-slate-800/80 to-slate-900/50 border border-indigo-600/30 rounded-2xl p-8 hover:border-indigo-400/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600/30 backdrop-blur-sm overflow-hidden"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600/0 via-indigo-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 bg-linear-to-br from-indigo-600/40 to-purple-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-600/60 group-hover:to-purple-600/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-indigo-300 text-2xl">{service.icon}</div>
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-slate-400 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Arrow */}
                <div className="relative z-10 mt-6 flex items-center text-indigo-400 group-hover:text-indigo-300 transition-all opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2">
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Design */}
      <section className="relative py-24 px-4 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
            Why FixItPro?
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            We're not just a service platform—we're your trusted home care
            partner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/60 border border-slate-700/50 rounded-2xl p-10 hover:border-indigo-600/50 transition-all duration-500 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-indigo-600/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-indigo-600/30 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-indigo-600/50 group-hover:to-purple-600/40 transition-all">
                    <div className="text-indigo-400 text-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-center group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="relative py-20 px-4 bg-linear-to-r from-indigo-600/20 via-purple-600/15 to-cyan-600/10 border-y border-indigo-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.05)_25%,rgba(99,102,241,0.05)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.05)_75%,rgba(99,102,241,0.05))] bg-size-[40px_40px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl md:text-6xl font-black text-transparent bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text mb-3">
                  {stat.value}
                </p>
                <p className="text-slate-300 text-lg font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="relative py-24 px-4 bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Fix It?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book a service in minutes and have a professional at your door
            within hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bookings/new"
              className="px-10 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              Book Service Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
