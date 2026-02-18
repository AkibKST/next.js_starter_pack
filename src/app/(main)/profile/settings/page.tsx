"use client";

import { useState, useEffect } from "react";
import TopicPreferences from "@/src/components/bookings/TopicPreferences";
import { usePreferences } from "@/src/hooks/usePreferences";
import { ServiceTopic } from "@/src/types";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "account" | "preferences" | "notifications"
  >("account");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const { preferences, toggleTopic, updateNotifications, savePreferences } =
    usePreferences();

  // Mock user data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    setSaveMessage("");
    // Simulate API call
    setTimeout(() => {
      setSaveMessage("Profile updated successfully!");
      setIsSaving(false);
      setTimeout(() => setSaveMessage(""), 3000);
    }, 1000);
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
    <div className="profile-settings">
      <div className="profile-settings__container">
        {/* Header */}
        <div className="profile-settings__header">
          <h1 className="profile-settings__title">Account Settings</h1>
          <p className="profile-settings__subtitle">
            Manage your profile information, preferences, and notification
            settings
          </p>
        </div>

        {/* Tabs */}
        <div className="profile-settings__tabs">
          <button
            className={`tab ${activeTab === "account" ? "tab--active" : ""}`}
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
            className={`tab ${activeTab === "preferences" ? "tab--active" : ""}`}
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
            className={`tab ${activeTab === "notifications" ? "tab--active" : ""}`}
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
            className={`save-message ${saveMessage.includes("success") ? "save-message--success" : "save-message--error"}`}
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
          <div className="settings-section">
            <h2 className="settings-section__title">Personal Information</h2>
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="City, State"
                />
              </div>

              <div className="settings-actions">
                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="btn btn--primary"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
                <button className="btn btn--secondary">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === "preferences" && (
          <div className="settings-section">
            <h2 className="settings-section__title">
              Your Service Preferences
            </h2>
            <p className="settings-section__description">
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

            <div className="preferences-info">
              <div className="info-card">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <div>
                  <h4>Personalized Experience</h4>
                  <p>
                    Your preferences help us show you the most relevant
                    technicians and services.
                  </p>
                </div>
              </div>
              <div className="info-card">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <h4>Set Anytime</h4>
                  <p>
                    You can update your preferences at any time from this
                    settings page.
                  </p>
                </div>
              </div>
            </div>

            <div className="settings-actions">
              <button
                onClick={handleSavePreferences}
                disabled={isSaving}
                className="btn btn--primary"
              >
                {isSaving ? "Saving..." : "Save Preferences"}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="settings-section">
            <h2 className="settings-section__title">
              Notification Preferences
            </h2>

            <div className="notification-group">
              <div className="notification-item">
                <div className="notification-content">
                  <h4 className="notification-title">Email Notifications</h4>
                  <p className="notification-desc">
                    Receive booking updates, technician recommendations, and
                    special offers via email
                  </p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.notificationEmail}
                    onChange={(e) =>
                      updateNotifications(e.target.checked, undefined)
                    }
                  />
                  <span className="toggle-slider" />
                </label>
              </div>

              <div className="notification-item">
                <div className="notification-content">
                  <h4 className="notification-title">SMS Notifications</h4>
                  <p className="notification-desc">
                    Get important booking updates and technician status via SMS
                  </p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.notificationSMS}
                    onChange={(e) =>
                      updateNotifications(undefined, e.target.checked)
                    }
                  />
                  <span className="toggle-slider" />
                </label>
              </div>

              <div className="notification-item">
                <div className="notification-content">
                  <h4 className="notification-title">Public Profile</h4>
                  <p className="notification-desc">
                    Make your profile visible to technicians and allow them to
                    review your booking history
                  </p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={preferences.publicProfile}
                    onChange={(e) => {
                      // Handle public profile toggle
                    }}
                  />
                  <span className="toggle-slider" />
                </label>
              </div>
            </div>

            <div className="settings-actions">
              <button
                onClick={handleSavePreferences}
                disabled={isSaving}
                className="btn btn--primary"
              >
                {isSaving ? "Saving..." : "Save Notification Settings"}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .profile-settings {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem;
        }

        .profile-settings__container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .profile-settings__header {
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .profile-settings__title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .profile-settings__subtitle {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        .profile-settings__tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          background: #f7fafc;
          overflow-x: auto;
        }

        .tab {
          flex: 1;
          min-width: 150px;
          padding: 1.5rem 1rem;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          color: #718096;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }

        .tab:hover:not(.tab--active) {
          color: #4a5568;
          background: #edf2f7;
        }

        .tab--active {
          color: #667eea;
          border-bottom-color: #667eea;
        }

        .save-message {
          margin: 1.5rem;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
        }

        .save-message--success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #86efac;
        }

        .save-message--error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        .settings-section {
          padding: 2rem;
        }

        .settings-section__title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .settings-section__description {
          color: #718096;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-weight: 600;
          color: #2d3748;
          font-size: 0.95rem;
        }

        .form-input {
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .settings-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .btn--primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn--primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }

        .btn--primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn--secondary {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn--secondary:hover {
          background: #cbd5e0;
        }

        .preferences-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .info-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .info-card svg {
          color: #667eea;
          flex-shrink: 0;
        }

        .info-card h4 {
          margin: 0 0 0.25rem 0;
          color: #2d3748;
          font-size: 0.95rem;
        }

        .info-card p {
          margin: 0;
          color: #718096;
          font-size: 0.85rem;
        }

        .notification-group {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .notification-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: #f7fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .notification-content h4 {
          margin: 0 0 0.25rem 0;
          color: #2d3748;
          font-size: 0.95rem;
        }

        .notification-title {
          margin: 0;
          font-weight: 600;
          color: #2d3748;
        }

        .notification-desc {
          margin: 0.25rem 0 0 0;
          color: #718096;
          font-size: 0.85rem;
        }

        .toggle {
          position: relative;
          display: inline-flex;
          width: 50px;
          height: 28px;
          background: #cbd5e0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle input {
          display: none;
        }

        .toggle input:checked + .toggle-slider {
          background: #667eea;
          transform: translateX(22px);
        }

        .toggle-slider {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .profile-settings {
            padding: 1rem;
          }

          .profile-settings__header {
            padding: 1.5rem;
          }

          .profile-settings__title {
            font-size: 1.5rem;
          }

          .settings-section {
            padding: 1.5rem;
          }

          .profile-settings__tabs {
            gap: 0;
          }

          .tab {
            min-width: auto;
            font-size: 0.85rem;
          }

          .notification-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
