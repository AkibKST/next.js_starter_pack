import Link from "next/link";
import { SERVICES, FEATURES, STATS } from "@/constants/home";

// Optimized Server Component - No "use client" directive
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Home Services <br />
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                At Your Fingertips
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with verified technicians for all your home repair and
              maintenance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-indigo-600/50 transition-all duration-300 hover:-translate-y-1"
              >
                Browse Services
              </Link>
              <Link
                href="/technicians"
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600/10 transition-all duration-300 hover:-translate-y-1"
              >
                Find Technicians
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            From plumbing to landscaping, we have expert professionals for every
            home service need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 border border-indigo-600/20 rounded-xl p-6 hover:border-indigo-600/60 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/20"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600/40 transition-colors">
                  <div className="text-indigo-400">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose FixItPro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-indigo-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-linear-to-r from-indigo-600/20 to-purple-600/20 border-y border-indigo-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-linear-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert help for your home projects today.
          </p>
          <Link
            href="/bookings/new"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:-translate-y-1"
          >
            Book a Service Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
