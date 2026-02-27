/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface BookingFormData {
  technicianId: string;
  serviceId: string;
  date: string;
  time: string;
  notes: string;
  preferredLocation: string;
}

export function BookingFormClient() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    defaultValues: {
      technicianId: "",
      serviceId: "",
      date: "",
      time: "",
      notes: "",
      preferredLocation: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsLoading(true);
      setError("");
      // Add your API call here
      console.log("Booking data:", data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to create booking");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/5 border border-indigo-500/20 rounded-lg p-8"
    >
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-500/10 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
          ✓ Booking created successfully!
        </div>
      )}

      <div className="mb-6">
        <label className="block mb-2 text-white font-semibold text-sm">
          Select Service *
        </label>
        <select
          className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
          {...register("serviceId", {
            required: "Service is required",
          })}
        >
          <option value="">Choose a service</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="hvac">HVAC</option>
          <option value="carpentry">Carpentry</option>
          <option value="painting">Painting</option>
        </select>
        {errors.serviceId && (
          <span className="text-red-400 text-xs">
            {errors.serviceId.message}
          </span>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-white font-semibold text-sm">
          Select Technician *
        </label>
        <select
          className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
          {...register("technicianId", {
            required: "Technician is required",
          })}
        >
          <option value="">Choose a technician</option>
          <option value="tech1">John Doe</option>
          <option value="tech2">Jane Smith</option>
          <option value="tech3">Mike Johnson</option>
        </select>
        {errors.technicianId && (
          <span className="text-red-400 text-xs">
            {errors.technicianId.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2 text-white font-semibold text-sm">
            Preferred Date *
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && (
            <span className="text-red-400 text-xs">{errors.date.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2 text-white font-semibold text-sm">
            Preferred Time *
          </label>
          <input
            type="time"
            className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
            {...register("time", {
              required: "Time is required",
            })}
          />
          {errors.time && (
            <span className="text-red-400 text-xs">{errors.time.message}</span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-white font-semibold text-sm">
          Location *
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300"
          placeholder="Enter your location"
          {...register("preferredLocation", {
            required: "Location is required",
            minLength: {
              value: 5,
              message: "Location must be at least 5 characters",
            },
          })}
        />
        {errors.preferredLocation && (
          <span className="text-red-400 text-xs">
            {errors.preferredLocation.message}
          </span>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-white font-semibold text-sm">
          Additional Notes
        </label>
        <textarea
          className="w-full px-4 py-3 bg-white/8 border-2 border-indigo-500/30 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:bg-indigo-500/15 transition-all duration-300 resize-vertical min-h-24"
          placeholder="Tell us more about your booking needs..."
          {...register("notes", {
            minLength: {
              value: 10,
              message: "Notes must be at least 10 characters",
            },
          })}
        />
        {errors.notes && (
          <span className="text-red-400 text-xs">{errors.notes.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold text-base cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? "Creating booking..." : "Create Booking →"}
      </button>
    </form>
  );
}
