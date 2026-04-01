"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function ThankYouPage() {
  // Track conversion when page loads
  useEffect(() => {
    // Fire the conversion event when page loads
    if (typeof window !== "undefined" && typeof (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag("event", "conversion", {
        send_to: "AW-18036888328/0F27CIDX2Y4cEIim1JhD",
        value: 1.0,
        currency: "GBP",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1c4953] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-[#1c4953]">REMORTGAGE</span>
                <span className="text-xl font-bold text-[#5da593]"> ADVISOR</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Thank You Content */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-[#5da593] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-[#1c4953] mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your enquiry has been submitted successfully. A qualified mortgage advisor will contact you shortly.
          </p>

          {/* What happens next */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 text-left">
            <h2 className="text-xl font-semibold text-[#1c4953] mb-4">What happens next?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#5da593]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#5da593] font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">We'll review your details</p>
                  <p className="text-gray-600 text-sm">Our team will look at your requirements and match you with the best advisor.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#5da593]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#5da593] font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">An advisor will call you</p>
                  <p className="text-gray-600 text-sm">Expect a call within the next few hours during business hours.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#5da593]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#5da593] font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Get your personalised quote</p>
                  <p className="text-gray-600 text-sm">Your advisor will search the market and provide you with the best options.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-[#1c4953] rounded-xl p-6 text-white mb-8">
            <p className="mb-2">Need to speak to someone urgently?</p>
            <a
              href="tel:01992535555"
              className="text-2xl font-bold text-[#5da593] hover:underline"
            >
              01992 535 555
            </a>
          </div>

          <Link
            href="/"
            className="inline-block text-[#5da593] font-medium hover:underline"
          >
            ← Return to homepage
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#162f36] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} RemortgageAdvisor.co.uk - Apply Wise Financial Limited
          </p>
        </div>
      </footer>
    </main>
  );
}
