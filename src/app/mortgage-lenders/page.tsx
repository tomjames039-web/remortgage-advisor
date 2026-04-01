"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { lenders, groupLendersByLetter, getAvailableLetters } from "@/data/lenders";

function LenderLogo({ logo, name, color }: { logo: string; name: string; color: string }) {
  if (!logo || logo === "") {
    const initials = name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
    return (
      <div
        className="w-full h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: color || "#1c4953" }}
      >
        {initials}
      </div>
    );
  }
  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={120}
      height={48}
      className="max-h-12 w-auto object-contain"
    />
  );
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function MortgageLendersPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const groupedLenders = groupLendersByLetter(lenders);
  const availableLetters = getAvailableLetters(lenders);

  const scrollToLetter = (letter: string) => {
    setActiveFilter(letter);
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen">
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

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.85), rgba(28, 73, 83, 0.9)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Remortgage Mortgage Lenders
          </h1>
          <p className="text-xl text-white/90">
            Choose a Provider & Compare Rates
          </p>
        </div>
      </section>

      {/* A-Z Filter */}
      <section className="bg-white border-b sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {alphabet.map((letter) => {
              const isAvailable = availableLetters.includes(letter);
              const isActive = activeFilter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => isAvailable && scrollToLetter(letter)}
                  disabled={!isAvailable}
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base transition-all
                    ${isAvailable
                      ? isActive
                        ? "bg-[#1c4953] text-white"
                        : "bg-[#f0f7f5] text-[#1c4953] hover:bg-[#1c4953] hover:text-white"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lenders Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {availableLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-40">
              {/* Letter Header */}
              <div className="border-b-2 border-[#1c4953] pb-2 mb-6">
                <h2 className="text-2xl font-bold text-[#1c4953]">{letter}</h2>
              </div>

              {/* Lenders Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {groupedLenders[letter]?.map((lender) => (
                  <Link
                    key={lender.slug}
                    href={`/mortgage-lenders/${lender.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#5da593] transition-all duration-200 flex flex-col items-center text-center"
                  >
                    <div className="w-full h-16 mb-3 flex items-center justify-center">
                      <LenderLogo logo={lender.logo} name={lender.name} color={lender.color} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#1c4953] transition-colors">
                      {lender.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Info */}
          <div className="text-center mt-12 p-8 bg-[#f0f7f5] rounded-xl">
            <h3 className="text-xl font-bold text-[#1c4953] mb-4">
              Whole of Market Access
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you can't find your lender, don't worry - we have access to all UK mortgage lenders.
              Fill out our enquiry form and our advisors will search the whole market to find the best rates for you.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 bg-[#1c4953] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#2d5f6b] transition-colors"
            >
              Get a Free Quote
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
      <footer className="bg-[#162f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">RemortgageAdvisor.co.uk</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                RemortgageAdvisor.co.uk is an independent marketing website that connects you with FCA regulated mortgage advisors. All guidance provided is subject to UK regulatory standards and intended for UK residents.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">Quick Links</h4>
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
