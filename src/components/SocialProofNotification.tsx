"use client";

import { useState, useEffect, useCallback } from "react";
import { generateRecentActivity } from "@/lib/tracking";

export default function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [activity, setActivity] = useState({ name: "", city: "", timeAgo: "" });

  const showNotification = useCallback(() => {
    setActivity(generateRecentActivity());
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);

      // Show next notification after 20-40 seconds
      const nextDelay = Math.floor(Math.random() * 20000) + 20000;
      setTimeout(() => {
        setActivity(generateRecentActivity());
        setIsVisible(true);
      }, nextDelay);
    }, 4000);
  }, []);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, [showNotification]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-50 animate-slide-up"
      style={{
        animation: isVisible ? "slideUp 0.3s ease-out" : "slideDown 0.3s ease-out",
      }}
    >
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#5da593] rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">{activity.name}</span> from{" "}
              <span className="font-semibold">{activity.city}</span> just requested a quote
            </p>
            <p className="text-xs text-gray-500 mt-1">{activity.timeAgo}</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 -mt-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
