import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Disclaimer Section */}
      <section className="py-8 bg-[#1c4953] text-white/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm leading-relaxed">
          <p className="mb-4 font-semibold">
            THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR HOME. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
          </p>
          <p>
            IF YOU ARE THINKING OF CONSOLIDATING EXISTING BORROWING YOU SHOULD BE AWARE THAT YOU MAY BE EXTENDING THE TERMS OF THE DEBT AND INCREASING THE TOTAL AMOUNT YOU REPAY.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#162f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5da593]">RemortgageAdvisor.co.uk</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                RemortgageAdvisor.co.uk is an independent marketing website that connects you with FCA regulated mortgage advisers.
              </p>
              <p className="text-white/70 text-sm mt-2 font-medium">
                Your home may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#5da593]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/mortgage-lenders" className="text-white/70 hover:text-white transition-colors">
                    Mortgage Lenders
                  </Link>
                </li>
                <li>
                  <Link href="/mortgage-deals" className="text-white/70 hover:text-white transition-colors">
                    Mortgage Deals
                  </Link>
                </li>
                <li>
                  <Link href="/mortgages-for" className="text-white/70 hover:text-white transition-colors">
                    Mortgages For
                  </Link>
                </li>
                <li>
                  <Link href="/mortgage-types" className="text-white/70 hover:text-white transition-colors">
                    Mortgage Types
                  </Link>
                </li>
                <li>
                  <Link href="/mortgage-advice" className="text-white/70 hover:text-white transition-colors">
                    Mortgage Advice
                  </Link>
                </li>
                <li>
                  <Link href="/government-schemes" className="text-white/70 hover:text-white transition-colors">
                    Government Schemes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#5da593]">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#5da593]">Contact Us</h4>
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
          <div className="border-t border-white/10 mt-6 pt-6 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} RemortgageAdvisor.co.uk - All Rights Reserved | Apply Wise Financial Limited</p>
          </div>
        </div>
      </footer>
    </>
  );
}
