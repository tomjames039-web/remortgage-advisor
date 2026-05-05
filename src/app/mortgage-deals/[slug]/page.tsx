import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getMortgageDealBySlug, getAllMortgageDealSlugs, mortgageDeals } from "@/data/mortgage-deals";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMortgageDealSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const deal = getMortgageDealBySlug(slug);

  if (!deal) {
    return {
      title: "Deal Not Found | Remortgage Advisor",
    };
  }

  return {
    title: deal.metaTitle,
    description: deal.metaDescription,
    alternates: {
      canonical: `/mortgage-deals/${slug}`,
    },
  };
}

export default async function MortgageDealPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = getMortgageDealBySlug(slug);

  if (!deal) {
    notFound();
  }

  const relatedDeals = deal.relatedDeals
    .map((relatedSlug) => mortgageDeals.find((d) => d.slug === relatedSlug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.remortgageadvisor.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mortgage Deals",
        item: "https://www.remortgageadvisor.co.uk/mortgage-deals",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: deal.title,
        item: `https://www.remortgageadvisor.co.uk/mortgage-deals/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mortgage-deals" className="hover:text-white">Mortgage Deals</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{deal.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {deal.heroTitle}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {deal.heroDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {deal.content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1c4953] mb-4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </article>

              {/* Rate Comparison Table */}
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#1c4953] mb-4">
                  See How Your Rate Affects Monthly Payments
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#1c4953] text-white">
                        <th className="py-3 px-4 text-left font-semibold">Loan Amount</th>
                        <th className="py-3 px-4 text-center font-semibold">4.0%</th>
                        <th className="py-3 px-4 text-center font-semibold">4.5%</th>
                        <th className="py-3 px-4 text-center font-semibold">5.0%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="py-4 px-4 font-medium">£100,000</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£528</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£556</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£585</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="py-4 px-4 font-medium">£200,000</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,056</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,111</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,170</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="py-4 px-4 font-medium">£300,000</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,584</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,667</td>
                        <td className="py-4 px-4 text-center text-[#1c4953] font-semibold">£1,755</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Based on a 25-year repayment mortgage. Rates shown are for illustration only.
                </p>
              </div>

              {/* Related Deals */}
              {relatedDeals.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#1c4953] mb-6">Related Mortgage Deals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedDeals.map((related) => (
                      related && (
                        <Link
                          key={related.slug}
                          href={`/mortgage-deals/${related.slug}`}
                          className="block p-4 bg-gray-50 rounded-lg hover:bg-[#f0f7f5] transition-colors"
                        >
                          <h4 className="font-semibold text-[#1c4953] mb-1">{related.title}</h4>
                          <span className="text-sm text-[#5da593]">Learn more →</span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadCaptureForm title="Get Your Free Quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">FCA Regulated</h3>
              <p className="text-gray-600 text-sm">Trusted, regulated advice from qualified mortgage professionals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">100+ Lenders</h3>
              <p className="text-gray-600 text-sm">Access deals from across the whole mortgage market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">Free Service</h3>
              <p className="text-gray-600 text-sm">No fees for our comparison and advice service.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
