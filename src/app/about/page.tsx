"use client";

import Link from "next/link";

export default function AboutPage() {
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
      desc: "Launched iOS and Android apps for on-the-go service booking",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900 relative overflow-hidden flex items-center py-20 px-4">
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent leading-tight">
            About FixItPro
          </h1>
          <p className="text-lg text-slate-400 mx-auto leading-relaxed max-w-2xl">
            We&apos;re on a mission to revolutionize the home services industry
            by connecting customers with trusted, vetted professionals who
            deliver exceptional quality and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto my-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center my-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              FixItPro was founded with a simple idea: finding a reliable home
              service provider shouldn&apos;t be complicated. Our founder spent
              years struggling to find trustworthy professionals, which inspired
              us to create a platform that solves this problem.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Today, we&apos;ve become the go-to platform for thousands of
              customers and professionals who believe in quality, transparency,
              and community.
            </p>
            <ul className="list-none p-0 m-0 space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-indigo-500 font-bold text-xl shrink-0">
                  ✓
                </span>
                15,000+ satisfied customers
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-indigo-500 font-bold text-xl shrink-0">
                  ✓
                </span>
                2,000+ verified professionals
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-indigo-500 font-bold text-xl shrink-0">
                  ✓
                </span>
                50+ service categories covered
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-indigo-500 font-bold text-xl shrink-0">
                  ✓
                </span>
                4.9★ average rating
              </li>
            </ul>
          </div>
          <div className="text-8xl text-center opacity-80">🏠</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
              2020
            </div>
            <div className="text-slate-400 text-sm">Founded</div>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-slate-400 text-sm">Cities Served</div>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
              15K+
            </div>
            <div className="text-slate-400 text-sm">Happy Customers</div>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
              2K+
            </div>
            <div className="text-slate-400 text-sm">Professionals</div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto my-24 px-4">
        <h2 className="text-5xl font-bold text-center mb-2 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white/5 border border-indigo-500/20 rounded-lg p-8 text-center hover:border-indigo-500/60 hover:-translate-y-2 hover:bg-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed m-0">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto my-32 px-4">
        <h2 className="text-5xl font-bold text-center mb-2 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
          Our Journey
        </h2>
        <div className="relative py-8 mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-indigo-500 to-purple-400"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`mb-12 relative ${index % 2 === 0 ? "mr-auto w-1/2 pr-12" : "ml-auto w-1/2 pl-12"}`}
              style={{
                textAlign: index % 2 === 0 ? "right" : "left",
              }}
            >
              <div className="absolute w-4 h-4 bg-linear-to-r from-indigo-600 to-purple-600 border-4 border-slate-950 rounded-full left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
              <div className="bg-white/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-all duration-300">
                <div className="text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
                  {milestone.year}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {milestone.title}
                </div>
                <p className="text-slate-400 leading-relaxed m-0">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto my-32 px-4 py-16 bg-linear-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 rounded-2xl text-center">
        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
          Join the FixItPro Community
        </h2>
        <p className="text-slate-400 mb-8">
          Whether you&apos;re looking for a trusted professional or want to grow
          your business, we&apos;re here to help.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/services"
            className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold no-underline inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
          >
            Browse Services →
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold no-underline inline-flex items-center gap-2 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
