"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lenders as allLenders } from "@/data/lenders";
import { storeUTMParams, getStoredUTMParams } from "@/lib/tracking";
import SocialProofNotification from "@/components/SocialProofNotification";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UrgencyBanner from "@/components/UrgencyBanner";

const PHONE_NUMBER = "01992 535 555";

// UK High Street Lenders for homepage display with logos
const homepageLenders = [
  { name: "Barclays", slug: "barclays", logo: "https://logos-world.net/wp-content/uploads/2021/08/Barclays-Logo.png" },
  { name: "HSBC", slug: "hsbc", logo: "https://cnrywhrfn.s3.eu-west-2.amazonaws.com/HSBC-Symbol.png" },
  { name: "Nationwide", slug: "nationwide", logo: "https://cdn.prod.website-files.com/65660e09a00c2abd40e46958/67766fd6e1c0dd4b6682e551_Nationwide-Building-Society-Logo.png" },
  { name: "NatWest", slug: "natwest", logo: "https://logos-world.net/wp-content/uploads/2021/02/NatWest-Logo.png" },
  { name: "Santander", slug: "santander", logo: "https://i1.wp.com/www.invoiceberry.com/blog/wp-content/uploads/2020/07/Santander-Logo.png" },
  { name: "Lloyds Bank", slug: "lloyds-bank", logo: "https://logos-world.net/wp-content/uploads/2021/03/Lloyds-Bank-Logo-2013-present.png" },
  { name: "Halifax", slug: "halifax", logo: "https://logos-world.net/wp-content/uploads/2021/03/Halifax-Logo.png" },
  { name: "TSB", slug: "tsb", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/TSB_logo_2013.svg/960px-TSB_logo_2013.svg.png" },
  { name: "Virgin Money", slug: "virgin-money", logo: "https://download.logo.wine/logo/Virgin_Money_UK/Virgin_Money_UK-Logo.wine.png" },
  { name: "Skipton BS", slug: "skipton-building-society", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/skipton-building-society-logo.png" },
  { name: "Metro Bank", slug: "metro-bank", logo: "https://storage.googleapis.com/gweb-cloudblog-publish/images/metro-bank-logoano0.max-900x900.PNG" },
  { name: "Coventry BS", slug: "coventry-building-society", logo: "https://trustmarque.com/hs-fs/hubfs/coventry-building-society-logo-vector.png" },
];



const currentLenders = [
  "Select your lender",
  "Barclays",
  "HSBC",
  "Lloyds",
  "Nationwide",
  "NatWest",
  "Santander",
  "TSB",
  "Halifax",
  "Virgin Money",
  "Yorkshire Building Society",
  "Other",
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

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    additionalNumber: "",
    postcode: "",
    mortgageAmount: "",
    propertyValue: "",
    currentLender: "",
    mortgagePurpose: "",
    mortgageLength: "",
    combinedIncome: "",
    agreedToTerms: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    formBody.append("form-name", "homepage-enquiry");
    formBody.append("fullName", formData.fullName);
    formBody.append("email", formData.email);
    formBody.append("contactNumber", formData.contactNumber);
    formBody.append("additionalNumber", formData.additionalNumber);
    formBody.append("postcode", formData.postcode);
    formBody.append("currentLender", formData.currentLender);
    formBody.append("mortgageAmount", formData.mortgageAmount);
    formBody.append("propertyValue", formData.propertyValue);
    formBody.append("mortgagePurpose", formData.mortgagePurpose);
    formBody.append("mortgageLength", formData.mortgageLength);
    formBody.append("combinedIncome", formData.combinedIncome);

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
        // Still redirect but log the error
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

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/mortgage-lenders" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                Mortgage Lenders
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                Contact
              </Link>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-[#1c4953] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#2d5f6b] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Link href="/mortgage-lenders" className="block py-2 text-gray-600 hover:text-[#1c4953] font-medium">
                Mortgage Lenders
              </Link>
              <Link href="#how-it-works" className="block py-2 text-gray-600 hover:text-[#1c4953] font-medium">
                How It Works
              </Link>
              <Link href="#about" className="block py-2 text-gray-600 hover:text-[#1c4953] font-medium">
                About Us
              </Link>
              <Link href="#contact" className="block py-2 text-gray-600 hover:text-[#1c4953] font-medium">
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Form */}
      <section
        className="relative bg-cover bg-center py-12 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.82), rgba(28, 73, 83, 0.88)), url('https://images.unsplash.com/photo-1578782785154-30ee3b8a3f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Looking for Remortgage Advice?<br />We Can Help...
            </h1>
            <p className="text-xl text-white/90">
              Complete the form below and a qualified advisor will be in touch
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">FCA Regulated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">Whole of Market</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">No Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#5da593]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">Free Quote</span>
            </div>
          </div>

          {/* Lead Capture Form */}
          <form
            onSubmit={handleSubmit}
            name="homepage-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value="homepage-enquiry" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="form-label form-label-required">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="form-label form-label-required">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="form-label form-label-required">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="form-label">Additional Number</label>
                <input
                  type="tel"
                  name="additionalNumber"
                  value={formData.additionalNumber}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label form-label-required">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="form-label form-label-required">Current Lender</label>
                <select
                  name="currentLender"
                  value={formData.currentLender}
                  onChange={handleInputChange}
                  className="select-field"
                  required
                >
                  {currentLenders.map((lender) => (
                    <option key={lender} value={lender === "Select your lender" ? "" : lender}>
                      {lender}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="form-label form-label-required">Mortgage Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="mortgageAmount"
                    value={formData.mortgageAmount}
                    onChange={handleInputChange}
                    className="input-field pl-8"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <span className="text-xs text-white/70">Please only enter numbers</span>
              </div>
              <div>
                <label className="form-label form-label-required">Property Value</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    className="input-field pl-8"
                    placeholder="Enter value"
                    required
                  />
                </div>
                <span className="text-xs text-white/70">Please only enter numbers</span>
              </div>
              <div>
                <label className="form-label form-label-required">Mortgage Purpose</label>
                <select
                  name="mortgagePurpose"
                  value={formData.mortgagePurpose}
                  onChange={handleInputChange}
                  className="select-field"
                  required
                >
                  {mortgagePurposes.map((purpose) => (
                    <option key={purpose} value={purpose === "Select purpose" ? "" : purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="form-label form-label-required">Mortgage Length (years)</label>
                <input
                  type="number"
                  name="mortgageLength"
                  value={formData.mortgageLength}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g. 25"
                  required
                />
              </div>
              <div>
                <label className="form-label form-label-required">Combined Annual Income</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="combinedIncome"
                    value={formData.combinedIncome}
                    onChange={handleInputChange}
                    className="input-field pl-8"
                    placeholder="Enter income"
                    required
                  />
                </div>
                <span className="text-xs text-white/70">Please only enter numbers</span>
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
                <span className="text-sm text-white/90">
                  By requesting this service you agree to be contacted by email, SMS or telephone by an FCA authorised mortgage provider and agree to our{" "}
                  <Link href="/terms" className="underline hover:text-white">terms of use</Link> and{" "}
                  <Link href="/privacy" className="underline hover:text-white">privacy policy</Link>.
                  <span className="text-red-400"> *</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary text-lg px-12 py-4 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </section>

      {/* Trust Section - Why Use Us, How It Works, What People Say */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Why Choose Us */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#f0f7f5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Independent & Impartial</strong> - We compare remortgage options from lenders across the UK. As an independent service, we have no ties to any specific lender, ensuring you receive genuinely unbiased recommendations.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Comprehensive Market Access</strong> - We explore the entire remortgage marketplace, including <strong>exclusive</strong> rates that may only be available through specialist brokers.
              </p>
            </div>

            {/* How It Works */}
            <div id="how-it-works" className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#f0f7f5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">Our Simple Process</h3>
              <ol className="text-gray-600 text-left space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">1.</span>
                  Fill in our straightforward enquiry form
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">2.</span>
                  We search for current rates across the market (including online-only deals)
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">3.</span>
                  Receive a personalised, no-obligation remortgage quote
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">4.</span>
                  The decision is yours - proceed only if the offer suits your needs
                </li>
              </ol>
            </div>

            {/* What People Say */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#f0f7f5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">Client Feedback</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-600 italic border-l-4 border-[#5da593] pl-4 text-left">
                  "The advisor kept me informed throughout the entire process and explained everything clearly. No hidden fees whatsoever. I would happily recommend them and will use their services again."
                </blockquote>
                <blockquote className="text-gray-600 italic border-l-4 border-[#5da593] pl-4 text-left">
                  "Extremely pleased with the service! The advisor handled our remortgage expertly and answered all our questions. They even adjusted our term twice with no fuss. Highly recommended!"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1c4953]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            We Do The Hard Work For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#5da593] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">We Compare The Market</h3>
              <p className="text-white/80 text-sm">So you don't have to settle for your lender's first offer</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#5da593] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">We Check If You Can Save</h3>
              <p className="text-white/80 text-sm">Before you commit to a new deal</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#5da593] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">We Handle The Process</h3>
              <p className="text-white/80 text-sm">From enquiry through to completion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#5da593] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You Get Clear Advice</h3>
              <p className="text-white/80 text-sm">Not just a list of rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders Section */}
      <section id="lenders" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Some of the Lenders We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {homepageLenders.map((lender) => (
              <Link
                key={lender.name}
                href={`/mortgage-lenders/${lender.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#5da593] transition-all duration-200 flex flex-col items-center justify-center min-h-[100px]"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <Image
                    src={lender.logo}
                    alt={`${lender.name} logo`}
                    width={100}
                    height={40}
                    className="max-h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-xs text-gray-500 text-center group-hover:text-[#1c4953] transition-colors">
                  {lender.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">
              Plus access to 90+ additional UK mortgage lenders
            </p>
            <Link
              href="/mortgage-lenders"
              className="inline-block bg-[#1c4953] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2d5f6b] transition-colors"
            >
              View All 103 Lenders
            </Link>
          </div>
        </div>
      </section>



      {/* Disclaimer Section */}
      <section className="py-8 bg-[#1c4953] text-white/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm leading-relaxed">
          <p className="mb-4 font-semibold">
            PLEASE CONSIDER CAREFULLY BEFORE SECURING DEBTS AGAINST YOUR PROPERTY. YOUR HOME IS AT RISK IF YOU FAIL TO MAINTAIN PAYMENTS ON A MORTGAGE OR ANY SECURED LOAN.
          </p>
          <p>
            IF YOU ARE CONSIDERING DEBT CONSOLIDATION, BE AWARE THAT YOU COULD BE EXTENDING THE REPAYMENT PERIOD AND THEREFORE INCREASING THE TOTAL AMOUNT REPAID.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#162f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593] text-center">RemortgageAdvisor.co.uk</h4>
              <p className="text-white/70 text-sm leading-relaxed text-center">
                RemortgageAdvisor.co.uk is an independent marketing website that connects you with FCA regulated mortgage advisers.
              </p>
              <p className="text-white/70 text-sm mt-2 text-center">
                Your details may be shared with a suitable adviser or partner firm to assist with your enquiry.
              </p>
              <p className="text-white/70 text-sm mt-2 text-center font-medium">
                Your home may be repossessed if you do not keep up repayments on your mortgage.
              </p>
              <p className="text-white/70 text-sm mt-4 text-center">
                © {new Date().getFullYear()} Apply Wise Financial Limited
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593] text-center">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors flex items-center text-left">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">Contact Us</h4>
              <div className="text-white/70 text-sm space-y-3">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:01992535555" className="hover:text-white transition-colors text-white font-medium">
                    01992 535 555
                  </a>
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@remortgageadvisor.co.uk" className="hover:text-white transition-colors">
                    hello@remortgageadvisor.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* FCA Registration Details */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <p className="text-white/50 text-xs text-center max-w-4xl mx-auto leading-relaxed">
              Apply Wise Financial Limited is authorised and regulated by the Financial Conduct Authority (FCA).
              Our FCA registration number can be verified on the FCA Register at{" "}
              <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#5da593] hover:underline">
                register.fca.org.uk
              </a>.
              We are a credit broker, not a lender. We may receive commission from lenders for introducing customers to them.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} RemortgageAdvisor.co.uk - All Rights Reserved | Apply Wise Financial Limited</p>
          </div>
        </div>
      </footer>

      {/* Social Proof Notification */}
      <SocialProofNotification />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA phoneNumber={PHONE_NUMBER} />
    </main>
  );
}
