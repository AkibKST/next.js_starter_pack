/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TopicPreferences from "@/components/bookings/TopicPreferences";
import { usePreferences } from "@/hooks/usePreferences";
import { ServiceTopic } from "@/types";

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "account" | "preferences" | "notifications"
  >("account");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const { preferences, toggleTopic, updateNotifications, savePreferences } =
    usePreferences();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
    },
  });

  const onSubmitProfile = async (data: ProfileFormData) => {
    setIsSaving(true);
    setSaveMessage("");
    // Simulate API call
    try {
      setTimeout(() => {
        setSaveMessage("Profile updated successfully!");
        setIsSaving(false);
        setTimeout(() => setSaveMessage(""), 3000);
      }, 1000);
    } catch (err) {
      setSaveMessage("Failed to save profile");
      setIsSaving(false);
    }
  };

  const handleSavePreferences = async () => {
    setIsSaving(true);
    setSaveMessage("");
    const success = await savePreferences("user-123");
    if (success) {
      setSaveMessage("Preferences saved successfully!");
    } else {
      setSaveMessage("Failed to save preferences");
    }
    setIsSaving(false);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-8 bg-linear-to-r from-indigo-600 to-purple-700 text-white">
          <h1 className="text-4xl font-bold mb-2 m-0">Account Settings</h1>
          <p className="text-lg opacity-90 m-0">
            Manage your profile information, preferences, and notification
            settings
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-slate-200 bg-slate-50 overflow-x-auto">
          <button
            className={`flex-1 min-w-37.5 px-4 py-6 border-none bg-none cursor-pointer text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 border-b-4 border-b-transparent -mb-0.5 ${
              activeTab === "account"
                ? "text-indigo-600 border-b-indigo-600 bg-transparent"
                : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTab("account")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Account Info
          </button>
          <button
            className={`flex-1 min-w-37.5 px-4 py-6 border-none bg-none cursor-pointer text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 border-b-4 border-b-transparent -mb-0.5 ${
              activeTab === "preferences"
                ? "text-indigo-600 border-b-indigo-600 bg-transparent"
                : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTab("preferences")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3v18M3 12h18" />
            </svg>
            Service Preferences
          </button>
          <button
            className={`flex-1 min-w-37.5 px-4 py-6 border-none bg-none cursor-pointer text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 border-b-4 border-b-transparent -mb-0.5 ${
              activeTab === "notifications"
                ? "text-indigo-600 border-b-indigo-600 bg-transparent"
                : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Notifications
          </button>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div
            className={`mx-6 my-6 p-4 rounded-lg flex items-center gap-3 font-medium ${
              saveMessage.includes("success")
                ? "bg-green-50 text-green-700 border border-green-300"
                : "bg-red-50 text-red-700 border border-red-300"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {saveMessage}
          </div>
        )}

        {/* Account Info Tab */}
        {activeTab === "account" && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Personal Information
            </h2>
            <form
              onSubmit={handleSubmit(onSubmitProfile)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-slate-900 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-slate-200 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-slate-900 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  className="px-4 py-3 border-2 border-slate-200 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  placeholder="your.email@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-slate-900 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="px-4 py-3 border-2 border-slate-200 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone", {
                    pattern: {
                      value:
                        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-600 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-slate-900 text-sm">
                  Location
                </label>
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-slate-200 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  placeholder="City, State"
                  {...register("location", {
                    minLength: {
                      value: 3,
                      message: "Location must be at least 3 characters",
                    },
                  })}
                />
                {errors.location && (
                  <span className="text-red-600 text-xs">
                    {errors.location.message}
                  </span>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-3 border-none rounded-md font-semibold transition-all duration-300 text-sm cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  className="px-6 py-3 border-none rounded-md font-semibold bg-slate-200 text-slate-900 cursor-pointer hover:bg-slate-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === "preferences" && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Your Service Preferences
            </h2>
            <p className="text-slate-600 mb-8 text-sm">
              Select the services you're most interested in. We'll show you
              relevant technicians and special offers based on your selections.
            </p>

            <TopicPreferences
              selectedTopics={preferences.selectedTopics as ServiceTopic[]}
              onToggleTopic={toggleTopic}
              title="Choose the services you're interested in"
              subtitle="Select multiple topics to get personalized recommendations and offers"
              maxSelections={10}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <div>
                  <h4 className="m-0 mb-1 text-slate-900 text-sm font-semibold">
                    Personalized Experience
                  </h4>
                  <p className="m-0 text-slate-600 text-xs">
                    Your preferences help us show you the most relevant
                    technicians and services.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-600 shrink-0"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <h4 className="m-0 mb-1 text-slate-900 text-sm font-semibold">
                    Set Anytime
                  </h4>
                  <p className="m-0 text-slate-600 text-xs">
                    You can update your preferences at any time from this
                    settings page.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSavePreferences}
                disabled={isSaving}
                className="px-6 py-3 border-none rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-purple-700 text-white cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 text-sm"
              >
                {isSaving ? "Saving..." : "Save Preferences"}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Notification Preferences
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <h4 className="m-0 mb-1 font-semibold text-slate-900">
                    Email Notifications
                  </h4>
                  <p className="m-0 text-slate-600 text-xs">
                    Receive booking updates, technician recommendations, and
                    special offers via email
                  </p>
                </div>
                <label className="relative inline-flex w-12 h-7 bg-slate-300 rounded-full cursor-pointer transition-all duration-300">
                  <input
                    type="checkbox"
                    hidden
                    checked={preferences.notificationEmail}
                    onChange={(e) =>
                      updateNotifications(e.target.checked, undefined)
                    }
                  />
                  <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 has-[input:checked]:bg-indigo-600 has-[input:checked]:translate-x-5 shadow-sm" />
                </label>
              </div>

              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <h4 className="m-0 mb-1 font-semibold text-slate-900">
                    SMS Notifications
                  </h4>
                  <p className="m-0 text-slate-600 text-xs">
                    Get important booking updates and technician status via SMS
                  </p>
                </div>
                <label className="relative inline-flex w-12 h-7 bg-slate-300 rounded-full cursor-pointer transition-all duration-300">
                  <input
                    type="checkbox"
                    hidden
                    checked={preferences.notificationSMS}
                    onChange={(e) =>
                      updateNotifications(undefined, e.target.checked)
                    }
                  />
                  <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 has-[input:checked]:bg-indigo-600 has-[input:checked]:translate-x-5 shadow-sm" />
                </label>
              </div>

              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <h4 className="m-0 mb-1 font-semibold text-slate-900">
                    Public Profile
                  </h4>
                  <p className="m-0 text-slate-600 text-xs">
                    Make your profile visible to technicians and allow them to
                    review your booking history
                  </p>
                </div>
                <label className="relative inline-flex w-12 h-7 bg-slate-300 rounded-full cursor-pointer transition-all duration-300">
                  <input
                    type="checkbox"
                    hidden
                    checked={preferences.publicProfile}
                    onChange={(e) => {
                      // Handle public profile toggle
                    }}
                  />
                  <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 has-[input:checked]:bg-indigo-600 has-[input:checked]:translate-x-5 shadow-sm" />
                </label>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSavePreferences}
                disabled={isSaving}
                className="px-6 py-3 border-none rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-purple-700 text-white cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 text-sm"
              >
                {isSaving ? "Saving..." : "Save Notification Settings"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
