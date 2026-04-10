import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getMortgageTypeBySlug, getAllMortgageTypeSlugs, mortgageTypes } from "@/data/mortgage-types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMortgageTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const type = getMortgageTypeBySlug(slug);
  if (!type) return { title: "Not Found | Remortgage Advisor" };
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    alternates: { canonical: `/mortgage-types/${slug}` },
  };
}

export default async function MortgageTypeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const type = getMortgageTypeBySlug(slug);
  if (!type) notFound();

  const relatedTypes = type.relatedTypes
    .map((relatedSlug) => mortgageTypes.find((t) => t.slug === relatedSlug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
      { "@type": "ListItem", position: 2, name: "Mortgage Types", item: "https://www.remortgageadvisor.co.uk/mortgage-types" },
      { "@type": "ListItem", position: 3, name: type.title, item: `https://www.remortgageadvisor.co.uk/mortgage-types/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mortgage-types" className="hover:text-white">Mortgage Types</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{type.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{type.heroTitle}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{type.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {type.content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1c4953] mb-4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </article>

              {/* Pros and Cons */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {type.prosAndCons.pros.map((pro, index) => (
                      <li key={index} className="text-green-700 text-sm flex items-start">
                        <span className="mr-2">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {type.prosAndCons.cons.map((con, index) => (
                      <li key={index} className="text-red-700 text-sm flex items-start">
                        <span className="mr-2">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {relatedTypes.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#1c4953] mb-6">Related Mortgage Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedTypes.map((related) => (
                      related && (
                        <Link
                          key={related.slug}
                          href={`/mortgage-types/${related.slug}`}
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
                <LeadCaptureForm title="Compare Deals" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
