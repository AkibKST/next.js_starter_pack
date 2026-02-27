"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
      {/* Contact Info Cards */}
      <div className="flex flex-col gap-6">
        <div className="bg-white/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-bold mb-3 text-white">Email</h3>
          <a
            href="mailto:akibkst22@gmail.com"
            className="text-indigo-400 font-semibold hover:text-purple-300 transition-colors"
          >
            <p className="text-slate-400 leading-relaxed">
              akibkst22@gmail.com
            </p>
          </a>
          <p className="text-sm mt-2 text-slate-400">
            We&apos;ll respond within 24 hours
          </p>
        </div>

        <div className="bg-white/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-3 text-white">Phone</h3>
          <a
            href="tel:+8801500000025"
            className="text-indigo-400 font-semibold hover:text-purple-300 transition-colors"
          >
            <p className="text-slate-400 leading-relaxed">015 *** *** 25</p>
          </a>
          <p className="text-sm mt-2 text-slate-400">
            Monday to Saturday, 9 AM - 6 PM
          </p>
        </div>

        <div className="bg-white/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-bold mb-3 text-white">Address</h3>
          <p className="text-slate-400 leading-relaxed">Kushtia, Bangladesh</p>
          <p className="text-sm mt-2 text-slate-400">
            Visit our office or schedule an appointment
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/5 border border-indigo-500/20 rounded-lg p-8">
        <h2 className="text-2xl mb-6 text-white">Send us a Message</h2>

        {submitted && (
          <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4 text-center text-green-300 font-semibold mb-6 animate-in slide-in-from-top-2">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold text-sm">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
              placeholder="Your name"
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-400 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold text-sm">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
              placeholder="+880 1700 000000"
              {...register("phone", {
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-400 text-xs">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold text-sm">
              Subject *
            </label>
            <select
              className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
              {...register("subject", {
                required: "Subject is required",
              })}
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Service Request">Service Request</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <span className="text-red-400 text-xs">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold text-sm">
              Message *
            </label>
            <textarea
              className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300 resize-vertical min-h-40"
              placeholder="Tell us more about your inquiry..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <span className="text-red-400 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold text-base cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 active:translate-y-0 transition-all duration-300 mt-2"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}
