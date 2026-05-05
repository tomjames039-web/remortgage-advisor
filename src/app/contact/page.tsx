import Link from "next/link";

export default function Contact() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1c4953] mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Telephone</h3>
                <a
                  href="tel:01992535555"
                  className="text-[#5da593] hover:underline flex items-center text-lg font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01992 535 555
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <a
                  href="mailto:hello@remortgageadvisor.co.uk"
                  className="text-[#5da593] hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@remortgageadvisor.co.uk
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Website</h3>
                <p className="text-gray-600">www.remortgageadvisor.co.uk</p>
              </div>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="bg-[#1c4953] rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Enquiry</h2>
            <p className="text-white/80 mb-6">
              Need remortgage advice? Fill out the form on our homepage or send us an email and we will connect you with a qualified advisor.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#5da593] hover:bg-[#4d9583] text-white font-semibold py-3 px-8 rounded transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#5da593] hover:underline font-medium">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
