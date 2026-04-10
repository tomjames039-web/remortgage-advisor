import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { mortgagesFor } from "@/data/mortgages-for";

export const metadata: Metadata = {
  title: "Mortgages For Every Situation | Self Employed, Bad Credit & More | Remortgage Advisor",
  description: "Find mortgage solutions for your specific situation. Advice for self employed, first time buyers, over 60s, bad credit, landlords, contractors and more.",
  alternates: {
    canonical: "/mortgages-for",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
    { "@type": "ListItem", position: 2, name: "Mortgages For", item: "https://www.remortgageadvisor.co.uk/mortgages-for" },
  ],
};

export default function MortgagesForPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mortgages For Every Situation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your circumstances don't have to limit your mortgage options. We help self employed, first time buyers, those with bad credit, and many more find the right deal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] text-center mb-12">
            Find Mortgage Solutions For Your Situation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgagesFor.map((item) => (
              <Link
                key={item.slug}
                href={`/mortgages-for/${item.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#5da593] transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-[#1c4953] mb-3 group-hover:text-[#5da593] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.heroDescription}</p>
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
                Expert Advice For Your Circumstances
              </h2>
              <p className="text-gray-600 mb-6">
                Every borrower's situation is different. Whether you're self employed with complex income, have credit issues, or simply need specialist guidance, our FCA-regulated brokers can help navigate the mortgage market and find appropriate solutions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5da593] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Specialist lender knowledge
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#5da593] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tailored solutions for complex cases
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
            <Link href="/mortgage-types" className="text-[#5da593] hover:underline">Mortgage Types</Link>
            <Link href="/mortgage-advice" className="text-[#5da593] hover:underline">Mortgage Advice</Link>
            <Link href="/mortgage-lenders" className="text-[#5da593] hover:underline">Mortgage Lenders</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
