"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE_NUMBER = "01992 535 555";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigationItems: NavItem[] = [
  {
    label: "Mortgage Lenders",
    href: "/mortgage-lenders",
  },
  {
    label: "Mortgage Deals",
    href: "/mortgage-deals",
    children: [
      { label: "Fixed Rate", href: "/mortgage-deals/fixed-rate" },
      { label: "Tracker", href: "/mortgage-deals/tracker" },
      { label: "Variable Rate", href: "/mortgage-deals/variable" },
      { label: "Bad Credit", href: "/mortgage-deals/bad-credit" },
      { label: "Buy to Let", href: "/mortgage-deals/buy-to-let" },
      { label: "Interest Only", href: "/mortgage-deals/interest-only" },
      { label: "Self Employed", href: "/mortgage-deals/self-employed" },
      { label: "First Time Buyer", href: "/mortgage-deals/first-time-buyer" },
      { label: "Right to Buy", href: "/mortgage-deals/right-to-buy" },
      { label: "Offset", href: "/mortgage-deals/offset" },
      { label: "Remortgage", href: "/mortgage-deals/remortgage" },
      { label: "Home Mover", href: "/mortgage-deals/home-mover" },
      { label: "Limited Company BTL", href: "/mortgage-deals/limited-company-buy-to-let" },
    ],
  },
  {
    label: "Mortgages For",
    href: "/mortgages-for",
    children: [
      { label: "Self Employed", href: "/mortgages-for/self-employed" },
      { label: "First Time Buyers", href: "/mortgages-for/first-time-buyers" },
      { label: "Over 60s", href: "/mortgages-for/over-60s" },
      { label: "Bad Credit", href: "/mortgages-for/bad-credit" },
      { label: "Landlords", href: "/mortgages-for/landlords" },
      { label: "Home Movers", href: "/mortgages-for/home-movers" },
      { label: "Remortgaging", href: "/mortgages-for/remortgaging" },
      { label: "Key Workers", href: "/mortgages-for/key-workers" },
      { label: "Contractors", href: "/mortgages-for/contractors" },
    ],
  },
  {
    label: "Mortgage Types",
    href: "/mortgage-types",
    children: [
      { label: "Fixed Rate", href: "/mortgage-types/fixed-rate" },
      { label: "Variable Rate", href: "/mortgage-types/variable-rate" },
      { label: "Tracker", href: "/mortgage-types/tracker" },
      { label: "Offset", href: "/mortgage-types/offset" },
      { label: "Interest Only", href: "/mortgage-types/interest-only" },
      { label: "Repayment", href: "/mortgage-types/repayment" },
      { label: "Part and Part", href: "/mortgage-types/part-and-part" },
    ],
  },
  {
    label: "Mortgage Advice",
    href: "/mortgage-advice",
  },
  {
    label: "Government Schemes",
    href: "/government-schemes",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
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
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-gray-600 hover:text-[#1c4953] font-medium transition-colors text-sm flex items-center"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#f0f7f5] hover:text-[#1c4953] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-[#1c4953] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#2d5f6b] transition-colors ml-2 text-sm"
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
            className="lg:hidden p-2 text-gray-600"
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
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-[#1c4953] font-medium"
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="p-2"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && openDropdown === item.label && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-gray-500 hover:text-[#1c4953]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-[#1c4953] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[#2d5f6b] transition-colors mt-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE_NUMBER}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
