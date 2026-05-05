import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getMortgagesForBySlug, getAllMortgagesForSlugs, mortgagesFor } from "@/data/mortgages-for";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMortgagesForSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMortgagesForBySlug(slug);
  if (!item) return { title: "Not Found | Remortgage Advisor" };
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: { canonical: `/mortgages-for/${slug}` },
  };
}

export default async function MortgagesForDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getMortgagesForBySlug(slug);
  if (!item) notFound();

  const relatedPages = item.relatedPages
    .map((relatedSlug) => mortgagesFor.find((m) => m.slug === relatedSlug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
      { "@type": "ListItem", position: 2, name: "Mortgages For", item: "https://www.remortgageadvisor.co.uk/mortgages-for" },
      { "@type": "ListItem", position: 3, name: item.title, item: `https://www.remortgageadvisor.co.uk/mortgages-for/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mortgages-for" className="hover:text-white">Mortgages For</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{item.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.heroTitle}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{item.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {item.content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1c4953] mb-4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </article>

              {relatedPages.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#1c4953] mb-6">Related Pages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedPages.map((related) => (
                      related && (
                        <Link
                          key={related.slug}
                          href={`/mortgages-for/${related.slug}`}
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
                <LeadCaptureForm title="Get Expert Advice" />
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
              <h3 className="text-lg font-bold text-[#1c4953] mb-2">FCA Regulated</h3>
              <p className="text-gray-600 text-sm">Trusted, regulated advice from qualified professionals.</p>
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
