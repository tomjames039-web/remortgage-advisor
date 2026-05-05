"use client";

import { useEffect } from "react";
import Link from "next/link";

const PHONE_NUMBER = "01992 535 555";

export default function BlogPage() {
  useEffect(() => {
    // Load Soro blog script
    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/98dffcc7-567b-45d7-babc-c19a55dab98b";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://app.trysoro.com/api/embed/98dffcc7-567b-45d7-babc-c19a55dab98b"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/mortgage-lenders" className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm">
                Mortgage Lenders
              </Link>
              <Link href="/mortgage-deals" className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm">
                Mortgage Deals
              </Link>
              <Link href="/mortgages-for" className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm">
                Mortgages For
              </Link>
              <Link href="/mortgage-types" className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm">
                Mortgage Types
              </Link>
              <Link href="/blog" className="px-3 py-2 text-[#1c4953] font-medium transition-colors text-sm">
                Blog
              </Link>
              <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm">
                About
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

            {/* Mobile Phone Button */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#1c4953] text-white rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1c4953] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mortgage Advice & Insights
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Expert articles, guides, and news to help you make informed decisions about your mortgage.
          </p>
        </div>
      </section>

      {/* Soro Blog Widget */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Soro Blog Container */}
          <div id="soro-blog" className="min-h-[600px]"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] mb-4">
            Ready to Get Your Free Quote?
          </h2>
          <p className="text-gray-600 mb-8">
            Compare remortgage rates from 100+ lenders and see how much you could save.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#5da593] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#162f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593] text-center">RemortgageAdvisor.co.uk</h4>
              <p className="text-white/70 text-sm leading-relaxed text-center">
                RemortgageAdvisor.co.uk is an independent marketing website that connects you with FCA regulated mortgage advisers.
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
                  <Link href="/blog" className="text-white/70 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Blog
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
    </main>
  );
}
