import Link from "next/link";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-[#1c4953] mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Apply Wise Financial Limited ("we", "us", "our") operates RemortgageAdvisor.co.uk. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-3">When you submit an enquiry through our website, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name and contact details (email, phone number, postcode)</li>
              <li>Information about your mortgage requirements (property value, mortgage amount, current lender)</li>
              <li>Your income information for affordability assessments</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connect you with FCA authorised mortgage advisors</li>
              <li>Provide you with relevant remortgage quotes and information</li>
              <li>Contact you regarding your enquiry via email, SMS, or telephone</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Data Sharing</h2>
            <p className="leading-relaxed">
              We may share your information with FCA regulated mortgage brokers and advisors to provide you with quotes and services. We will not sell your data to third parties for marketing purposes without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-3">Under data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy or wish to exercise your rights, please contact us at:{" "}
              <a href="mailto:hello@remortgageadvisor.co.uk" className="text-[#5da593] hover:underline">
                hello@remortgageadvisor.co.uk
              </a>
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              This policy was last updated in March 2026. Apply Wise Financial Limited is registered in England and Wales.
            </p>
          </section>
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
