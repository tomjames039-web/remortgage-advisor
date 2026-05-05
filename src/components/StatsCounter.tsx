"use client";

import { useState, useEffect } from "react";

export default function StatsCounter() {
  const [customersHelped, setCustomersHelped] = useState(2847);
  const [quotesToday, setQuotesToday] = useState(47);

  useEffect(() => {
    // Simulate live updates every 30-60 seconds
    const interval = setInterval(() => {
      // Randomly increment customers (simulating real activity)
      if (Math.random() > 0.7) {
        setCustomersHelped(prev => prev + 1);
      }
      if (Math.random() > 0.5) {
        setQuotesToday(prev => prev + 1);
      }
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#5da593]/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#1c4953]">{customersHelped.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Homeowners helped in 2026</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#5da593]/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#1c4953]">{quotesToday}</p>
          <p className="text-sm text-gray-600">Quotes requested today</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#5da593]/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#1c4953]">4.8/5</p>
          <p className="text-sm text-gray-600">Customer rating</p>
        </div>
      </div>
    </div>
  );
}
