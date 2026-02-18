import { useState, useCallback } from "react";
import { IUserPreferences, ServiceTopic } from "../types";

// Mock service topics with descriptions and icons
export const AVAILABLE_TOPICS: Array<{
  name: ServiceTopic;
  description: string;
  icon: string;
  category: string;
}> = [
  {
    name: "Plumbing",
    description: "Leaks, installations, pipe repairs and renovations",
    icon: "🚰",
    category: "Home Repair",
  },
  {
    name: "Electrical",
    description: "Wiring, panel upgrades, lighting and inspections",
    icon: "⚡",
    category: "Home Repair",
  },
  {
    name: "HVAC",
    description: "AC repair, furnace service and duct cleaning",
    icon: "🌡️",
    category: "Climate Control",
  },
  {
    name: "Carpentry",
    description: "Furniture, cabinets, doors and custom woodwork",
    icon: "🔨",
    category: "Woodwork",
  },
  {
    name: "Painting",
    description: "Interior, exterior and decorative wall finishes",
    icon: "🎨",
    category: "Aesthetics",
  },
  {
    name: "Appliance Repair",
    description: "Washers, dryers, refrigerators, ovens and more",
    icon: "🔧",
    category: "Appliances",
  },
  {
    name: "General Maintenance",
    description: "Regular home maintenance and inspections",
    icon: "🔍",
    category: "Maintenance",
  },
  {
    name: "Pest Control",
    description: "Pest removal and prevention services",
    icon: "🦟",
    category: "Pest Management",
  },
  {
    name: "Window Repair",
    description: "Window replacement and repair services",
    icon: "🪟",
    category: "Windows & Glass",
  },
  {
    name: "Door Installation",
    description: "Door installation and hardware upgrades",
    icon: "🚪",
    category: "Doors & Hardware",
  },
];

/**
 * Custom hook for managing user preferences
 */
export const usePreferences = () => {
  const [preferences, setPreferences] = useState<IUserPreferences>({
    userId: "",
    selectedTopics: [],
    notificationEmail: true,
    notificationSMS: false,
    publicProfile: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load preferences from localStorage or API
   */
  const loadPreferences = useCallback(async (userId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      const stored = localStorage.getItem(`preferences_${userId}`);
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch (err) {
      setError("Failed to load preferences");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Toggle a topic in selected topics
   */
  const toggleTopic = useCallback((topic: ServiceTopic) => {
    setPreferences((prev: IUserPreferences) => {
      const isSelected = prev.selectedTopics.includes(topic);
      return {
        ...prev,
        selectedTopics: isSelected
          ? prev.selectedTopics.filter((t: ServiceTopic) => t !== topic)
          : [...prev.selectedTopics, topic],
      };
    });
  }, []);

  /**
   * Set multiple topics at once
   */
  const setTopics = useCallback((topics: ServiceTopic[]) => {
    setPreferences((prev: IUserPreferences) => ({
      ...prev,
      selectedTopics: topics,
    }));
  }, []);

  /**
   * Update notification preferences
   */
  const updateNotifications = useCallback((email?: boolean, sms?: boolean) => {
    setPreferences((prev: IUserPreferences) => ({
      ...prev,
      notificationEmail: email !== undefined ? email : prev.notificationEmail,
      notificationSMS: sms !== undefined ? sms : prev.notificationSMS,
    }));
  }, []);

  /**
   * Save preferences to localStorage or API
   */
  const savePreferences = useCallback(
    async (userId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        // TODO: Replace with actual API call
        localStorage.setItem(
          `preferences_${userId}`,
          JSON.stringify(preferences),
        );
        return true;
      } catch (err) {
        setError("Failed to save preferences");
        console.error(err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [preferences],
  );

  /**
   * Clear all preferences
   */
  const clearPreferences = useCallback(() => {
    setPreferences({
      userId: "",
      selectedTopics: [],
      notificationEmail: true,
      notificationSMS: false,
      publicProfile: true,
    });
  }, []);

  return {
    preferences,
    isLoading,
    error,
    loadPreferences,
    toggleTopic,
    setTopics,
    updateNotifications,
    savePreferences,
    clearPreferences,
  };
};

export default usePreferences;
