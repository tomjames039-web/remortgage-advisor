import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mortgageAdvice } from "@/data/mortgage-advice";

export const metadata: Metadata = {
  title: "Mortgage Advice & Guides | Expert Remortgage Help | Remortgage Advisor",
  description: "Expert mortgage advice and guides. Learn how to remortgage, when to switch, how much you can borrow, and more from FCA regulated advisors.",
  alternates: { canonical: "/mortgage-advice" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
    { "@type": "ListItem", position: 2, name: "Mortgage Advice", item: "https://www.remortgageadvisor.co.uk/mortgage-advice" },
  ],
};

export default function MortgageAdvicePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Mortgage Advice & Guides</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert guidance on remortgaging, borrowing, and making the most of your mortgage. Written by our team of FCA-regulated advisors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c4953] text-center mb-12">
            Mortgage Guides & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgageAdvice.map((article) => (
              <Link
                key={article.slug}
                href={`/mortgage-advice/${article.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#5da593] transition-all duration-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1c4953] mb-3 group-hover:text-[#5da593] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.heroDescription}</p>
                  <span className="text-[#5da593] font-medium text-sm flex items-center">
                    Read Guide
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1c4953]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Need Personalised Advice?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Our guides provide general information, but every situation is different. For personalised advice tailored to your circumstances, speak to one of our FCA-regulated mortgage advisors.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#5da593] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors"
          >
            Get Free Advice
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-[#1c4953] mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/mortgage-deals" className="text-[#5da593] hover:underline">Mortgage Deals</Link>
            <Link href="/mortgages-for" className="text-[#5da593] hover:underline">Mortgages For</Link>
            <Link href="/mortgage-types" className="text-[#5da593] hover:underline">Mortgage Types</Link>
            <Link href="/government-schemes" className="text-[#5da593] hover:underline">Government Schemes</Link>
            <Link href="/mortgage-lenders" className="text-[#5da593] hover:underline">Mortgage Lenders</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
