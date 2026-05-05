import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getGovernmentSchemeBySlug, getAllGovernmentSchemeSlugs, governmentSchemes } from "@/data/government-schemes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGovernmentSchemeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getGovernmentSchemeBySlug(slug);
  if (!scheme) return { title: "Not Found | Remortgage Advisor" };
  return {
    title: scheme.metaTitle,
    description: scheme.metaDescription,
    alternates: { canonical: `/government-schemes/${slug}` },
  };
}

export default async function GovernmentSchemeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const scheme = getGovernmentSchemeBySlug(slug);
  if (!scheme) notFound();

  const relatedSchemes = scheme.relatedSchemes
    .map((relatedSlug) => governmentSchemes.find((s) => s.slug === relatedSlug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
      { "@type": "ListItem", position: 2, name: "Government Schemes", item: "https://www.remortgageadvisor.co.uk/government-schemes" },
      { "@type": "ListItem", position: 3, name: scheme.title, item: `https://www.remortgageadvisor.co.uk/government-schemes/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/government-schemes" className="hover:text-white">Government Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{scheme.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{scheme.heroTitle}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{scheme.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {scheme.content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1c4953] mb-4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </article>

              {relatedSchemes.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#1c4953] mb-6">Related Schemes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedSchemes.map((related) => (
                      related && (
                        <Link
                          key={related.slug}
                          href={`/government-schemes/${related.slug}`}
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

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadCaptureForm title="Get Scheme Advice" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">Eligibility Check</h3>
              <p className="text-gray-600 text-sm">We'll help confirm if you qualify for this scheme.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">Lender Access</h3>
              <p className="text-gray-600 text-sm">Access to lenders who work with this scheme.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1c4953] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Guidance through the entire process.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
