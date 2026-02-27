"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PlatformDetailsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Platform statistics
  const stats = [
    { number: "15K+", label: "Happy Customers", icon: "😊" },
    { number: "2K+", label: "Verified Technicians", icon: "👨‍🔧" },
    { number: "50+", label: "Service Categories", icon: "🛠️" },
    { number: "4.9★", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" },
    { number: "$500K+", label: "Monthly Transactions", icon: "💰" },
  ];

  // How it works steps
  const steps = [
    {
      number: "1",
      title: "Create Account",
      desc: "Sign up in just 2 minutes with your email or phone number",
      icon: "📝",
    },
    {
      number: "2",
      title: "Browse Services",
      desc: "Explore 50+ service categories with verified professionals",
      icon: "🔍",
    },
    {
      number: "3",
      title: "Select Technician",
      desc: "Choose from highly-rated experts matching your needs",
      icon: "👤",
    },
    {
      number: "4",
      title: "Book & Pay",
      desc: "Schedule your service and pay securely through our platform",
      icon: "📅",
    },
    {
      number: "5",
      title: "Get Service",
      desc: "Professional technician arrives on time at your location",
      icon: "🚗",
    },
    {
      number: "6",
      title: "Rate & Review",
      desc: "Share your feedback to help other customers decide",
      icon: "⭐",
    },
  ];

  // Core features
  const features = [
    {
      icon: "🔒",
      title: "100% Secure",
      desc: "All transactions protected by industry-standard encryption",
    },
    {
      icon: "✅",
      title: "Verified Professionals",
      desc: "Background checks and certifications for every technician",
    },
    {
      icon: "💯",
      title: "Satisfaction Guarantee",
      desc: "Money-back guarantee if you're not satisfied with service",
    },
    {
      icon: "⚡",
      title: "Same-Day Service",
      desc: "Get urgent issues resolved the same day for Pro members",
    },
    {
      icon: "📱",
      title: "Real-Time Tracking",
      desc: "Track technician arrival with live GPS notifications",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Round-the-clock customer support via chat, phone, or email",
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Basic",
      price: "$29",
      period: "/visit",
      description: "Perfect for one-time quick fixes",
      features: [
        "Single service visit",
        "Standard technician",
        "48-hour scheduling",
        "Email support",
        "Satisfaction guarantee",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Most popular for homeowners",
      features: [
        "Unlimited service requests",
        "Priority technicians",
        "Same-day scheduling",
        "24/7 phone support",
        "Price-lock guarantee",
        "10% parts discount",
      ],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Best for property managers",
      features: [
        "Multi-property support",
        "Dedicated account manager",
        "Instant dispatch",
        "Custom SLA",
        "Monthly reports",
        "20% parts discount",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do I know if a technician is qualified?",
      a: "All technicians on FixItPro undergo rigorous background checks, skill verification, and certification review. You can view their qualifications, experience, and customer ratings before booking.",
    },
    {
      q: "What if something goes wrong during service?",
      a: "We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll either send another technician at no cost or provide a full refund. Your satisfaction is guaranteed.",
    },
    {
      q: "How is pricing determined?",
      a: "Pricing is transparent and based on service type, complexity, and estimated duration. You'll always see the quote before confirming the booking with zero hidden fees.",
    },
    {
      q: "Can I reschedule or cancel?",
      a: "Yes! You can cancel or reschedule up to 2 hours before the appointment at no charge. Late cancellations may incur a small fee as per our policy.",
    },
    {
      q: "Is my payment information secure?",
      a: "Absolutely. We use bank-level encryption and never store full credit card details. All transactions are processed through secure, PCI-compliant payment gateways.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-950 to-slate-900 flex items-center px-5 py-25 overflow-hidden">
        <div className="relative z-20 max-w-5xl mx-auto text-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
            The Complete Home Service Platform
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how FixItPro is revolutionizing the way people find and
            hire trusted professionals for all their home service needs.
          </p>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Link
              href="/technicians"
              className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Browse Services →
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:bg-opacity-10 hover:-translate-y-1"
            >
              Join Our Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-5xl mx-auto px-5 my-24">
        <h2 className="text-center text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          By The Numbers
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust FixItPro for their
          home service needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900 bg-opacity-50 border border-indigo-500 border-opacity-20 rounded-lg p-8 text-center transition-all duration-300 hover:border-opacity-50 hover:-translate-y-1 hover:bg-opacity-100 relative overflow-hidden"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-5 my-24">
        <h2 className="text-center text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          How It Works
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          Booking a service is simple and straightforward
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900 bg-opacity-5 border border-indigo-500 border-opacity-15 rounded-lg p-8 relative transition-all duration-300 hover:-translate-y-2 hover:border-opacity-50 hover:bg-opacity-8"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div className="text-4xl my-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-5xl mx-auto px-5 my-24">
        <h2 className="text-center text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          Why Choose FixItPro
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          We prioritize your safety, satisfaction, and convenience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-indigo-600 from-opacity-10 to-purple-600 to-opacity-10 border border-indigo-500 border-opacity-20 rounded-lg p-8 transition-all duration-300 hover:border-opacity-50 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500 hover:shadow-opacity-20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-5 my-24">
        <h2 className="text-center text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          Flexible Pricing Plans
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          Choose the plan that works best for you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-slate-900 bg-opacity-50 border border-indigo-500 border-opacity-20 rounded-lg p-8 transition-all duration-300 relative flex flex-col ${
                tier.highlighted
                  ? "md:scale-105 border-opacity-60 bg-linear-to-br from-indigo-600 from-opacity-20 to-purple-600 to-opacity-10"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-4 right-8 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-slate-300 text-sm mb-4">{tier.description}</p>
              <div className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-1">
                {tier.price}
              </div>
              <div className="text-slate-300 text-sm mb-6">{tier.period}</div>
              <ul className="list-none mb-8 grow">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 mb-3 text-slate-300 text-sm"
                  >
                    <span className="text-indigo-600 font-bold text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 text-center ${
                  tier.highlighted
                    ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg"
                    : "bg-transparent border-2 border-indigo-500 border-opacity-30 text-indigo-600 hover:border-opacity-100 hover:bg-indigo-600 hover:bg-opacity-10"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 my-24">
        <h2 className="text-center text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          Common Questions
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          Everything you need to know about our platform
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-slate-900 bg-opacity-5 border border-indigo-500 rounded-lg overflow-hidden transition-all duration-300 ${
                expandedFaq === idx
                  ? "border-opacity-50 bg-opacity-10"
                  : "border-opacity-20"
              }`}
            >
              <button
                className="w-full px-6 py-4 bg-none border-none text-left text-white text-base font-semibold cursor-pointer flex justify-between items-center transition-all duration-300 hover:text-purple-400"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span
                  className={`text-lg text-indigo-600 transition-transform duration-300 ${
                    expandedFaq === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-5xl mx-auto px-5 my-24 py-16 bg-linear-to-br from-indigo-600 from-opacity-15 to-purple-600 to-opacity-15 border border-indigo-500 border-opacity-30 rounded-2xl text-center">
        <h2 className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-300 mb-8">
          Join FixItPro today and experience the easiest way to book home
          services
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/register"
            className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg"
          >
            Create Account Now →
          </Link>
          <a
            href="#"
            className="px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:bg-opacity-10 hover:-translate-y-1"
          >
            Browse Technicians
          </a>
        </div>
      </section>
    </div>
  );
}
