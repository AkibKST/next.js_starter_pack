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
    <div className="topic-preferences">
      <div className="topic-preferences__header">
        <h3 className="topic-preferences__title">{title}</h3>
        <p className="topic-preferences__subtitle">{subtitle}</p>
        {maxSelections && (
          <p className="topic-preferences__counter">
            {selectedTopics.length} of {maxSelections} selected
            {remainingSelections > 0 && (
              <span className="topic-preferences__remaining">
                ({remainingSelections} remaining)
              </span>
            )}
          </p>
        )}
      </div>

      <div className="topic-preferences__categories">
        {categories.map((category: string) => (
          <div key={category} className="topic-preferences__category">
            <h4 className="topic-preferences__category-title">{category}</h4>

            <div className="topic-preferences__grid">
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
                    className={`topic-card ${
                      isSelected ? "topic-card--selected" : ""
                    } ${isDisabled ? "topic-card--disabled" : ""}`}
                  >
                    <div className="topic-card__icon">{topic.icon}</div>
                    <h5 className="topic-card__name">{topic.name}</h5>
                    {hoveredTopic === topic.name && !isDisabled && (
                      <p className="topic-card__description">
                        {topic.description}
                      </p>
                    )}
                    {isSelected && (
                      <div className="topic-card__checkmark">
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

      <style jsx>{`
        .topic-preferences {
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 12px;
          margin: 2rem 0;
        }

        .topic-preferences__header {
          margin-bottom: 2rem;
        }

        .topic-preferences__title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }

        .topic-preferences__subtitle {
          font-size: 0.95rem;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }

        .topic-preferences__counter {
          font-size: 0.875rem;
          color: #2d3748;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .topic-preferences__remaining {
          color: #718096;
          font-size: 0.8rem;
          margin-left: 0.25rem;
        }

        .topic-preferences__categories {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .topic-preferences__category {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .topic-preferences__category-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .topic-preferences__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
        }

        .topic-card {
          position: relative;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          min-height: 140px;
          justify-content: center;
        }

        .topic-card:hover:not(.topic-card--disabled) {
          border-color: #4299e1;
          background: #ebf8ff;
          box-shadow: 0 4px 12px rgba(66, 153, 225, 0.1);
          transform: translateY(-2px);
        }

        .topic-card--selected {
          border-color: #22863a;
          background: #f0fdf4;
          box-shadow: 0 0 0 3px rgba(34, 134, 58, 0.1);
        }

        .topic-card--disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #f7fafc;
        }

        .topic-card__icon {
          font-size: 2rem;
          line-height: 1;
        }

        .topic-card__name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
        }

        .topic-card__description {
          font-size: 0.75rem;
          color: #718096;
          margin: 0;
          line-height: 1.3;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 95%;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .topic-card:hover .topic-card__description {
          opacity: 1;
        }

        .topic-card--selected .topic-card__description {
          display: none;
        }

        .topic-card__checkmark {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 24px;
          height: 24px;
          background: #22863a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: scaleIn 0.2s ease;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .topic-preferences {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }

          .topic-preferences__grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 0.75rem;
          }

          .topic-card {
            min-height: 120px;
            padding: 0.75rem;
          }

          .topic-card__icon {
            font-size: 1.5rem;
          }

          .topic-card__name {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TopicPreferences;
