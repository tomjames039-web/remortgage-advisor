import Link from "next/link";

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold text-[#1c4953] mb-8">Terms and Conditions</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">About This Website</h2>
            <p className="leading-relaxed">
              RemortgageAdvisor.co.uk is operated by Apply Wise Financial Limited. This website acts as an introducer to FCA regulated mortgage advisors and brokers. We are not a lender and do not provide mortgage advice directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Use of Service</h2>
            <p className="leading-relaxed mb-3">By submitting an enquiry through our website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Be contacted by email, SMS, or telephone by FCA authorised advisors</li>
              <li>Receive information about mortgage products relevant to your enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Important Information</h2>
            <p className="leading-relaxed mb-4 font-semibold">
              Your home may be repossessed if you do not keep up repayments on a mortgage or any other debt secured on it.
            </p>
            <p className="leading-relaxed">
              The information provided on this website is for general guidance only. Rates shown are illustrative and may change without notice. Actual mortgage quotes will depend on your individual circumstances including credit history, property value, and income.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">No Guarantee</h2>
            <p className="leading-relaxed">
              While we endeavour to connect you with suitable mortgage advisors, we cannot guarantee that you will be offered a mortgage or that any particular rate will be available to you. All mortgage applications are subject to assessment by the lender.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, graphics, and logos, is the property of Apply Wise Financial Limited unless otherwise stated. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              Apply Wise Financial Limited accepts no liability for any loss or damage arising from the use of this website or reliance on any information provided. We recommend seeking independent financial advice before making any mortgage decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1c4953] mb-4">Contact</h2>
            <p className="leading-relaxed">
              For any questions regarding these terms, please contact us at:{" "}
              <a href="mailto:hello@remortgageadvisor.co.uk" className="text-[#5da593] hover:underline">
                hello@remortgageadvisor.co.uk
              </a>
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              These terms were last updated in March 2026.
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
