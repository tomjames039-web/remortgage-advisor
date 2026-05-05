import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
      </header>

      {/* Hero */}
      <section className="bg-[#1c4953] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Remortgage Advisor</h1>
          <p className="text-xl text-white/80">
            Helping UK homeowners find better mortgage deals since day one
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              RemortgageAdvisor.co.uk is operated by Apply Wise Financial Limited, a UK-based company dedicated to connecting homeowners with qualified mortgage advisors. We understand that finding the right remortgage deal can be overwhelming, which is why we have created a simple, straightforward service to help you navigate the market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to help UK homeowners save money on their mortgage repayments by connecting them with expert advisors who can search the entire market on their behalf. Whether you are looking to switch from an expensive standard variable rate, release equity from your home, or simply find a better deal, we are here to help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#f0f7f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Independent Service</h3>
                  <p className="text-gray-600 text-sm">We are not tied to any lender, ensuring unbiased recommendations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#f0f7f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Whole of Market</h3>
                  <p className="text-gray-600 text-sm">Access to deals from over 196 UK lenders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#f0f7f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">FCA Regulated</h3>
                  <p className="text-gray-600 text-sm">All advisors we work with are fully authorised and regulated.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#f0f7f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5da593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">No Obligation</h3>
                  <p className="text-gray-600 text-sm">Get a free quote with absolutely no commitment.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Our Company</h2>
            <p className="text-gray-700 leading-relaxed">
              Apply Wise Financial Limited is a registered UK company. We take pride in providing a transparent, efficient service that puts homeowners first. Our team is dedicated to ensuring that every customer receives the best possible advice and support throughout their remortgage journey.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center space-x-4">
          <Link
            href="/"
            className="inline-block bg-[#5da593] hover:bg-[#4d9583] text-white font-semibold py-3 px-8 rounded transition-all duration-200"
          >
            Get Your Free Quote
          </Link>
          <Link href="/contact" className="text-[#5da593] hover:underline font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
