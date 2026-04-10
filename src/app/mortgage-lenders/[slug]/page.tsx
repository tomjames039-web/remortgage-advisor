"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import { getLenderBySlug, lenders } from "@/data/lenders";
import { getLenderContentBySlug, hasDetailedContent } from "@/data/lender-content";

// Generate lender-specific schema
const generateLenderSchema = (lender: { name: string; slug: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: `${lender.name} Remortgage`,
  description: `Compare ${lender.name} remortgage rates and get expert advice. Find the best mortgage deals from ${lender.name} through our FCA regulated broker service.`,
  provider: {
    "@type": "FinancialService",
    name: lender.name,
  },
  broker: {
    "@type": "Organization",
    name: "Apply Wise Financial Limited",
    url: "https://www.remortgageadvisor.co.uk",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
});

const generateBreadcrumbSchema = (lenderName: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.remortgageadvisor.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mortgage Lenders",
      item: "https://www.remortgageadvisor.co.uk/mortgage-lenders",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: lenderName,
      item: `https://www.remortgageadvisor.co.uk/mortgage-lenders/${slug}`,
    },
  ],
});

const mortgagePurposes = [
  "Select purpose",
  "Remortgage",
  "Remortgage & Borrow More",
  "First Time Buyer",
  "Moving Home",
  "Buy to Let",
  "Other",
];

const mortgageLengths = [
  "Select",
  "5 years",
  "10 years",
  "15 years",
  "20 years",
  "25 years",
  "30 years",
  "35 years",
];

export default function LenderDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lender = getLenderBySlug(slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    additionalNumber: "",
    postcode: "",
    mortgageAmount: "",
    propertyValue: "",
    currentLender: lender?.name || "",
    mortgagePurpose: "",
    mortgageLength: "",
    combinedIncome: "",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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

    // Build form data manually to ensure all fields are captured
    const formBody = new URLSearchParams();
    formBody.append("form-name", "lender-enquiry");
    formBody.append("lenderName", lender?.name || "");
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

  if (!lender) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lender Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the lender you're looking for.</p>
          <Link
            href="/mortgage-lenders"
            className="inline-block bg-[#1c4953] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2d5f6b] transition-colors"
          >
            View All Lenders
          </Link>
        </div>
      </main>
    );
  }

  // Generate schema for this lender
  const lenderSchema = generateLenderSchema(lender);
  const breadcrumbSchema = generateBreadcrumbSchema(lender.name, lender.slug);

  return (
    <main className="min-h-screen">
      {/* Schema.org Structured Data for this lender */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lenderSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/mortgage-lenders" className="text-[#1c4953] font-medium transition-colors">
                Mortgage Lenders
              </Link>
              <Link href="/#how-it-works" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#1c4953] font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Lender Info and Rates */}
      <section
        className="relative bg-cover bg-center py-12 md:py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.82), rgba(28, 73, 83, 0.88)), url('https://images.unsplash.com/photo-1578782785154-30ee3b8a3f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Lender Info - No Logo Box */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                GET {lender.name.toUpperCase()} MORTGAGE QUOTES AND START COMPARING RATES NOW!
              </h1>
              <p className="text-white/90 mb-4 text-lg">
                Use our free mortgage service to compare rates from the UK's leading lenders.
              </p>
              <p className="text-white/90">
                Compare <strong>{lender.name}</strong> mortgage rates against the mortgage market to see how much you could save?
              </p>
            </div>

            {/* Interest Rate Comparison Table */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-2xl font-bold text-[#1c4953] mb-2">
                  See how your rate affects your monthly payment
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Even small changes in interest rates can make a big difference
                </p>
              </div>

              {/* Rate Comparison Table - Mobile Responsive */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px]">
                  <thead>
                    <tr className="bg-[#1c4953] text-white">
                      <th className="py-2 md:py-3 px-2 md:px-4 text-left font-semibold text-xs md:text-sm">Loan Amount</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center font-semibold text-xs md:text-sm">4.0%</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center font-semibold text-xs md:text-sm">4.5%</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center font-semibold text-xs md:text-sm">5.0%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 hover:bg-[#e8f4f1] transition-colors cursor-pointer">
                      <td className="py-3 md:py-4 px-2 md:px-4 text-gray-700 font-medium text-sm md:text-base">£100,000</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£528</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£556</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£585</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#e8f4f1] transition-colors cursor-pointer">
                      <td className="py-3 md:py-4 px-2 md:px-4 text-gray-700 font-medium text-sm md:text-base">£200,000</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,056</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,111</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,170</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-[#e8f4f1] transition-colors cursor-pointer">
                      <td className="py-3 md:py-4 px-2 md:px-4 text-gray-700 font-medium text-sm md:text-base">£300,000</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,584</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,667</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-center text-[#1c4953] font-semibold text-sm md:text-base">£1,755</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA Button */}
              <div className="p-4 md:p-6 bg-white">
                <a
                  href="#form"
                  className="block w-full bg-[#5da593] text-white font-bold text-center py-3 md:py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors text-sm md:text-lg"
                >
                  Get Your Free Quote
                </a>
              </div>

              {/* Disclaimers */}
              <div className="bg-gray-100 p-3 md:p-4 text-xs text-gray-600 leading-relaxed">
                <p className="mb-2">Based on a 25-year repayment mortgage. Rates and payments will vary.</p>
                <p>Rates from around 4% may be available in limited circumstances. Most customers will receive higher rates based on their situation.</p>
              </div>

              {/* Warning */}
              <div className="bg-[#1c4953] text-white/90 p-3 md:p-4 text-xs leading-relaxed">
                THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR HOME. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section
        id="form"
        className="py-12 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.92), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1578782785154-30ee3b8a3f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Enter your details so an advisor can contact you
          </h2>

          <form
            onSubmit={handleSubmit}
            name="lender-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value="lender-enquiry" />
            <input type="hidden" name="lenderName" value={lender.name} />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                  Contact Number <span className="text-red-400">*</span>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Additional Number
                </label>
                <input
                  type="tel"
                  name="additionalNumber"
                  value={formData.additionalNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
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
                  Current Lender <span className="text-red-400">*</span>
                </label>
                <select
                  name="currentLender"
                  value={formData.currentLender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593] bg-white"
                  required
                >
                  <option value="">Select your lender</option>
                  {lenders.map((l) => (
                    <option key={l.slug} value={l.name}>
                      {l.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Mortgage Amount <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="mortgageAmount"
                    value={formData.mortgageAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-8 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <span className="text-xs text-white/70">Please only enter numbers</span>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Property Value <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-8 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
                    placeholder="Enter value"
                    required
                  />
                </div>
                <span className="text-xs text-white/70">Please only enter numbers</span>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Mortgage Length <span className="text-red-400">*</span>
                </label>
                <select
                  name="mortgageLength"
                  value={formData.mortgageLength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593] bg-white"
                  required
                >
                  {mortgageLengths.map((length) => (
                    <option key={length} value={length === "Select" ? "" : length}>
                      {length}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Combined Income in £ <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    name="combinedIncome"
                    value={formData.combinedIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-8 rounded-lg border-0 focus:ring-2 focus:ring-[#5da593]"
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
              className="bg-[#5da593] text-white font-bold text-lg px-12 py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </section>

      {/* Lender Description Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] mb-6">
            Compare {lender.name} Remortgage Rates & Deals
          </h2>
          <div className="prose prose-lg max-w-none">
            {hasDetailedContent(lender.slug) ? (
              <>
                {getLenderContentBySlug(lender.slug)?.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </>
            ) : (
              <>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {lender.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you're a first-time buyer, planning to move to a new home, or looking to refinance your existing mortgage, {lender.name} provides personalised assistance tailored to your unique circumstances. Their professional guidance ensures that you make informed decisions throughout the process.
                </p>
              </>
            )}
            <p className="text-gray-700 leading-relaxed">
              <Link href="#form" className="text-[#1c4953] font-semibold hover:underline">
                Fill in our form
              </Link>{" "}
              to get started finding the best {lender.name} remortgage rates.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use Us / How It Works / Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Why Use Us */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#f0f7f5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">Why Use Us?</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Unbiased & Impartial</strong> - We search every remortgage lender in the UK. We're an independent website with no affiliation to any remortgage lender.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Whole of Market</strong> - We search the whole of the remortgage market including <strong>exclusive</strong> quotes and rates.
              </p>
            </div>

            {/* How It Works */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#f0f7f5] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">How It Works</h3>
              <ol className="text-gray-600 text-left space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">1.</span>
                  Complete our simple form
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">2.</span>
                  We'll search for the latest rates from the remortgage market
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">3.</span>
                  You'll receive a no-obligation remortgage quote
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#5da593] mr-2">4.</span>
                  It's over to you - no obligation to proceed
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
              <h3 className="text-2xl font-bold text-[#1c4953] mb-4">What People Say</h3>
              <div className="space-y-4">
                {hasDetailedContent(lender.slug) && getLenderContentBySlug(lender.slug)?.testimonials ? (
                  getLenderContentBySlug(lender.slug)?.testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="text-gray-600 italic border-l-4 border-[#5da593] pl-4 text-left text-sm">
                      "{testimonial.quote}"
                      <footer className="text-gray-500 mt-1 not-italic text-xs">— {testimonial.author}</footer>
                    </blockquote>
                  ))
                ) : (
                  <>
                    <blockquote className="text-gray-600 italic border-l-4 border-[#5da593] pl-4 text-left text-sm">
                      "He has kept me posted every step of the way and explained everything fully. There were no hidden costs. I would definitely recommend and will not hesitate to use them in the future"
                    </blockquote>
                    <blockquote className="text-gray-600 italic border-l-4 border-[#5da593] pl-4 text-left text-sm">
                      "Very satisfied with the service received! The advisor was excellent handling our remortgage and was very helpful with all questions we had."
                    </blockquote>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-[#1c4953] text-white/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm leading-relaxed">
          <p className="mb-4 font-semibold">
            THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR HOME. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON A MORTGAGE OR ANY OTHER DEBT SECURED ON IT.
          </p>
          <p>
            IF YOU ARE THINKING OF CONSOLIDATING EXISTING BORROWING YOU SHOULD BE AWARE THAT YOU MAY BE EXTENDING THE TERMS OF THE DEBT AND INCREASING THE TOTAL AMOUNT YOU REPAY.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#162f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">RemortgageAdvisor.co.uk</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                RemortgageAdvisor.co.uk is an independent marketing website that acts as an introducer to FCA regulated companies. Example rate shown is a 5 year fixed rate mortgage with an initial rate of {lender.exampleRate}% for 5 years; then reverts to SVR after intro period. The rates shown are for illustrative purposes only.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors flex items-center">
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
                  <Link href="/mortgage-lenders" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    All Lenders
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

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} RemortgageAdvisor.co.uk - All Rights Reserved | Apply Wise Financial Limited</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
