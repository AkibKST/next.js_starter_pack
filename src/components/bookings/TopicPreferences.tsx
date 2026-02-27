"use client";

import React, { useState } from "react";
import { ServiceTopic } from "../../types/index";
import { AVAILABLE_TOPICS } from "../../hooks/usePreferences";

interface TopicPreferencesProps {
  selectedTopics: ServiceTopic[];
  onToggleTopic: (topic: ServiceTopic) => void;
  title?: string;
  subtitle?: string;
  maxSelections?: number;
}

/**
 * TopicPreferences Component
 * Allows users to select their preferred service categories
 */
export const TopicPreferences: React.FC<TopicPreferencesProps> = ({
  selectedTopics,
  onToggleTopic,
  title = "Select Your Preferred Services",
  subtitle = "Choose the services you're most interested in to get personalized recommendations",
  maxSelections = 10,
}) => {
  const [hoveredTopic, setHoveredTopic] = useState<ServiceTopic | null>(null);

  const remainingSelections = maxSelections - selectedTopics.length;

  // Get unique categories
  const categories = Array.from(
    new Set(
      AVAILABLE_TOPICS.map((t: (typeof AVAILABLE_TOPICS)[0]) => t.category),
    ),
  );

  return (
    <div className="p-8 bg-linear-to-br from-slate-100 to-slate-300 rounded-lg my-8">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-base text-slate-700 mb-2">{subtitle}</p>
        {maxSelections && (
          <p className="text-sm text-slate-800 font-medium mt-2">
            {selectedTopics.length} of {maxSelections} selected
            {remainingSelections > 0 && (
              <span className="text-slate-600 text-xs ml-1">
                ({remainingSelections} remaining)
              </span>
            )}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-8">
        {categories.map((category: string) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b-2 border-slate-200">
              {category}
            </h4>

            <div
              className="grid grid-cols-auto-fill gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              }}
            >
              {AVAILABLE_TOPICS.filter(
                (t: (typeof AVAILABLE_TOPICS)[0]) => t.category === category,
              ).map((topic: (typeof AVAILABLE_TOPICS)[0]) => {
                const isSelected = selectedTopics.includes(topic.name);
                const isDisabled =
                  !isSelected && selectedTopics.length >= maxSelections;

                return (
                  <button
                    key={topic.name}
                    onClick={() => {
                      if (!isDisabled) {
                        onToggleTopic(topic.name);
                      }
                    }}
                    disabled={isDisabled}
                    onMouseEnter={() => setHoveredTopic(topic.name)}
                    onMouseLeave={() => setHoveredTopic(null)}
                    className={`relative p-4 border-2 rounded-lg text-center flex flex-col items-center justify-center gap-2 min-h-[140px] transition-all duration-300 ${
                      isSelected
                        ? "border-green-600 bg-green-50 shadow-md"
                        : isDisabled
                          ? "opacity-50 cursor-not-allowed bg-slate-100 border-slate-200"
                          : "border-slate-200 bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="text-3xl leading-none">{topic.icon}</div>
                    <h5 className="text-sm font-semibold text-slate-900">
                      {topic.name}
                    </h5>
                    {hoveredTopic === topic.name && !isDisabled && (
                      <p className="text-xs text-slate-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 opacity-100 transition-opacity duration-200 leading-snug">
                        {topic.description}
                      </p>
                    )}
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white animate-in scale-in-95 duration-200">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicPreferences;
