import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { mortgageTypes } from "@/data/mortgage-types";

export const metadata: Metadata = {
  title: "Mortgage Types Explained | Fixed, Variable, Tracker & More | Remortgage Advisor",
  description: "Understand different mortgage types including fixed rate, variable, tracker, offset, interest only and repayment. Expert guidance on choosing the right type.",
  alternates: { canonical: "/mortgage-types" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
    { "@type": "ListItem", position: 2, name: "Mortgage Types", item: "https://www.remortgageadvisor.co.uk/mortgage-types" },
  ],
};

export default function MortgageTypesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Mortgage Types Explained</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Understanding the different mortgage types helps you choose the right one for your circumstances. Learn about fixed, variable, tracker, offset and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] text-center mb-12">
            Explore Mortgage Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgageTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/mortgage-types/${type.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5da593] transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-[#1c4953] mb-3 group-hover:text-[#5da593] transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{type.heroDescription}</p>
                <span className="text-[#5da593] font-medium text-sm flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] mb-6">
                Not Sure Which Type Is Right For You?
              </h2>
              <p className="text-gray-600 mb-6">
                Choosing between fixed and variable, or repayment and interest only, depends on your circumstances, risk tolerance, and plans. Our expert advisors can explain the options and recommend the most suitable mortgage type for your situation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5da593] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personalised recommendations
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5da593] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Clear explanation of pros and cons
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5da593] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free, no-obligation advice
                </li>
              </ul>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-[#1c4953] mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/mortgage-deals" className="text-[#5da593] hover:underline">Mortgage Deals</Link>
            <Link href="/mortgages-for" className="text-[#5da593] hover:underline">Mortgages For</Link>
            <Link href="/mortgage-advice" className="text-[#5da593] hover:underline">Mortgage Advice</Link>
            <Link href="/mortgage-lenders" className="text-[#5da593] hover:underline">Mortgage Lenders</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
