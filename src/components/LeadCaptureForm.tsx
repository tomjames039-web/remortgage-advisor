"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { submitLeadToSupabase } from "@/lib/api";

const mortgagePurposes = [
  "Select purpose",
  "Remortgage",
  "Remortgage & Borrow More",
  "First Time Buyer",
  "Moving Home",
  "Buy to Let",
  "Other",
];

interface LeadCaptureFormProps {
  variant?: "simple" | "full";
  title?: string;
  className?: string;
}

export default function LeadCaptureForm({
  variant = "simple",
  title = "Get Your Free Remortgage Quote",
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    postcode: "",
    mortgagePurpose: "",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null);
  const router = useRouter();

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
    setSubmitResult(null);

    try {
      // Submit to Supabase
      const result = await submitLeadToSupabase({
        fullName: formData.fullName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        postcode: formData.postcode,
        mortgagePurpose: formData.mortgagePurpose,
      });

      // Track Google Ads conversion regardless of response
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18036888328/0F27CIDX2Y4cEIim1JhD",
          value: 1.0,
          currency: "GBP",
        });
      }

      if (result.success) {
        router.push("/thank-you");
      } else {
        setSubmitResult({ success: false, error: result.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitResult({ success: false, error: "Something went wrong. Please try again or call us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-[#1c4953] rounded-xl p-6 md:p-8 ${className}`}>
      <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">{title}</h3>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Postcode <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Mortgage Purpose <span className="text-red-400">*</span>
            </label>
            <select
              name="mortgagePurpose"
              value={formData.mortgagePurpose}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593] bg-white"
              required
            >
              {mortgagePurposes.map((purpose) => (
                <option key={purpose} value={purpose === "Select purpose" ? "" : purpose}>
                  {purpose}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={handleCheckboxChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#5da593] focus:ring-[#5da593]"
                required
              />
              <span className="text-sm text-white/90">
                By requesting this service you agree to be contacted by email, SMS or telephone by an FCA
                authorised mortgage provider and agree to our{" "}
                <Link href="/terms" className="underline hover:text-white">
                  terms of use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-white">
                  privacy policy
                </Link>
                .<span className="text-red-400"> *</span>
              </span>
            </label>
          </div>

          {submitResult && !submitResult.success && (
            <div className="text-red-400 bg-red-900/30 border border-red-400/50 rounded p-3 text-center text-sm">
              {submitResult.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#5da593] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Get My Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="flex items-center gap-1 text-white/80 text-xs">
          <svg className="w-4 h-4 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          FCA Regulated
        </div>
        <div className="flex items-center gap-1 text-white/80 text-xs">
          <svg className="w-4 h-4 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No Fees
        </div>
        <div className="flex items-center gap-1 text-white/80 text-xs">
          <svg className="w-4 h-4 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          100+ Lenders
        </div>
      </div>
    </div>
  );
}
