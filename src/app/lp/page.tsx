"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { storeUTMParams, getStoredUTMParams } from "@/lib/tracking";
import SocialProofNotification from "@/components/SocialProofNotification";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UrgencyBanner from "@/components/UrgencyBanner";
import StatsCounter from "@/components/StatsCounter";

const PHONE_NUMBER = "01992 535 555";

const currentLenders = [
  "Select your lender",
  "Barclays", "HSBC", "Lloyds", "Nationwide", "NatWest",
  "Santander", "TSB", "Halifax", "Virgin Money", "Other",
];

const mortgagePurposes = [
  "Select purpose",
  "Remortgage",
  "Remortgage & Borrow More",
  "First Time Buyer",
  "Moving Home",
  "Buy to Let",
  "Other",
];

export default function PPCLandingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    postcode: "",
    mortgageAmount: "",
    propertyValue: "",
    currentLender: "",
    mortgagePurpose: "",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Store UTM params on page load
  useEffect(() => {
    storeUTMParams();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utmParams = getStoredUTMParams();

    // Build form data manually to ensure all fields are captured
    const formBody = new URLSearchParams();
    formBody.append("form-name", "ppc-landing-enquiry");
    formBody.append("fullName", formData.fullName);
    formBody.append("email", formData.email);
    formBody.append("contactNumber", formData.contactNumber);
    formBody.append("postcode", formData.postcode);
    formBody.append("mortgageAmount", formData.mortgageAmount);
    formBody.append("propertyValue", formData.propertyValue);
    formBody.append("currentLender", formData.currentLender);
    formBody.append("mortgagePurpose", formData.mortgagePurpose);

    // Add UTM params
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) formBody.append(key, value);
    });
    formBody.append("landing_page", window.location.href);
    formBody.append("submission_time", new Date().toISOString());

    try {
      // Submit to Netlify Forms endpoint
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });

      // Track Google Ads conversion regardless of response
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18036888328/0F27CIDX2Y4cEIim1JhD',
          value: 1.0,
          currency: 'GBP'
        });
      }

      if (response.ok) {
        router.push("/thank-you");
      } else {
        console.error("Form submission failed:", response.status);
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Fire conversion even on error since we're redirecting
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18036888328/0F27CIDX2Y4cEIim1JhD',
          value: 1.0,
          currency: 'GBP'
        });
      }
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* Minimal Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
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

            {/* Phone Number - Desktop */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="hidden md:flex items-center gap-2 bg-[#1c4953] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2d5f6b] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>

            {/* Phone Icon - Mobile */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-[#1c4953] text-white rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section
        id="form"
        className="relative bg-cover bg-center py-10 md:py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.82), rgba(28, 73, 83, 0.88)), url('https://images.unsplash.com/photo-1578782785154-30ee3b8a3f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Compare Remortgage Rates & Save
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Get a free, no-obligation quote in 60 seconds
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
            {["FCA Regulated", "100+ Lenders", "No Fees", "Free Quote"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
              onSubmit={handleSubmit}
              name="ppc-landing-enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="max-w-2xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-2xl"
            >
              <input type="hidden" name="form-name" value="ppc-landing-enquiry" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                    placeholder="07123 456789"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Postcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                    placeholder="SW1A 1AA"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Mortgage Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                    <input
                      type="text"
                      name="mortgageAmount"
                      value={formData.mortgageAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                      placeholder="200,000"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Property Value <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                    <input
                      type="text"
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent"
                      placeholder="300,000"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Current Lender
                  </label>
                  <select
                    name="currentLender"
                    value={formData.currentLender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent bg-white"
                  >
                    {currentLenders.map((lender) => (
                      <option key={lender} value={lender === "Select your lender" ? "" : lender}>
                        {lender}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Mortgage Purpose
                  </label>
                  <select
                    name="mortgagePurpose"
                    value={formData.mortgagePurpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5da593] focus:border-transparent bg-white"
                  >
                    {mortgagePurposes.map((purpose) => (
                      <option key={purpose} value={purpose === "Select purpose" ? "" : purpose}>
                        {purpose}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#5da593] focus:ring-[#5da593]"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to be contacted by an FCA authorised mortgage advisor and accept the{" "}
                    <Link href="/terms" className="text-[#5da593] underline">terms</Link> and{" "}
                    <Link href="/privacy" className="text-[#5da593] underline">privacy policy</Link>.
                    <span className="text-red-500"> *</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5da593] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                No fees. No obligation. Compare rates in 60 seconds.
              </p>
            </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <StatsCounter />
        </div>
      </section>

      {/* Simple Trust Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#5da593]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c4953] mb-2">FCA Regulated</h3>
              <p className="text-gray-600">Fully authorised & regulated mortgage broker</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#5da593]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c4953] mb-2">No Fees to Pay</h3>
              <p className="text-gray-600">Our service is completely free to you</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#5da593]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c4953] mb-2">Quick & Easy</h3>
              <p className="text-gray-600">Get your personalised quote in 60 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#1c4953] text-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-white/70 mb-4">
            YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
          </p>
          <p className="text-sm text-white/60 mb-4">
            Apply Wise Financial Limited is authorised and regulated by the Financial Conduct Authority (FCA).
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-white/70 hover:text-white">Terms & Conditions</Link>
          </div>
          <p className="text-sm text-white/50 mt-4">
            © {new Date().getFullYear()} RemortgageAdvisor.co.uk - Apply Wise Financial Limited
          </p>
        </div>
      </footer>

      {/* Social Proof Notification */}
      <SocialProofNotification />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA phoneNumber={PHONE_NUMBER} />
    </main>
  );
}
