"use client";

import { useForm } from "react-hook-form";
import { useCreateBookingMutation } from "@/store/api/bookingsApi";
import { useState } from "react";

interface BookingFormData {
  technicianId: string;
  serviceId: string;
  date: string;
  time: string;
  notes: string;
  preferredLocation: string;
}

export default function BookingForm() {
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
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
      setError("");
      await createBooking(data).unwrap();
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.data?.message || "Failed to create booking");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
      {error && <div className="form-error-message">{error}</div>}
      {success && (
        <div className="form-success-message">
          Booking created successfully!
        </div>
      )}

      <div className="form-group">
        <label htmlFor="serviceId">Select Service *</label>
        <select
          id="serviceId"
          {...register("serviceId", {
            required: "Service is required",
          })}
        >
          <option value="">Choose a service</option>
          <option value="service1">Plumbing</option>
          <option value="service2">Electrical</option>
          <option value="service3">HVAC</option>
        </select>
        {errors.serviceId && (
          <span className="form-error">{errors.serviceId.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="technicianId">Select Technician *</label>
        <select
          id="technicianId"
          {...register("technicianId", {
            required: "Technician is required",
          })}
        >
          <option value="">Choose a technician</option>
          <option value="tech1">John Doe</option>
          <option value="tech2">Jane Smith</option>
        </select>
        {errors.technicianId && (
          <span className="form-error">{errors.technicianId.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="date">Preferred Date *</label>
        <input
          id="date"
          type="date"
          {...register("date", {
            required: "Date is required",
          })}
        />
        {errors.date && (
          <span className="form-error">{errors.date.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Preferred Time *</label>
        <input
          id="time"
          type="time"
          {...register("time", {
            required: "Time is required",
          })}
        />
        {errors.time && (
          <span className="form-error">{errors.time.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="preferredLocation">Location *</label>
        <input
          id="preferredLocation"
          type="text"
          placeholder="Enter location"
          {...register("preferredLocation", {
            required: "Location is required",
            minLength: {
              value: 5,
              message: "Location must be at least 5 characters",
            },
          })}
        />
        {errors.preferredLocation && (
          <span className="form-error">{errors.preferredLocation.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes"
          placeholder="Tell us more about your booking needs..."
          {...register("notes", {
            minLength: {
              value: 10,
              message: "Notes must be at least 10 characters",
            },
          })}
        />
        {errors.notes && (
          <span className="form-error">{errors.notes.message}</span>
        )}
      </div>

      <button type="submit" className="booking-form-btn" disabled={isLoading}>
        {isLoading ? "Creating booking..." : "Create Booking"}
      </button>
    </form>
  );
}
