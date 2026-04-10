import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMortgageAdviceBySlug, getAllMortgageAdviceSlugs, mortgageAdvice } from "@/data/mortgage-advice";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMortgageAdviceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getMortgageAdviceBySlug(slug);
  if (!article) return { title: "Not Found | Remortgage Advisor" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/mortgage-advice/${slug}` },
  };
}

export default async function MortgageAdviceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getMortgageAdviceBySlug(slug);
  if (!article) notFound();

  const relatedArticles = article.relatedArticles
    .map((relatedSlug) => mortgageAdvice.find((a) => a.slug === relatedSlug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.remortgageadvisor.co.uk" },
      { "@type": "ListItem", position: 2, name: "Mortgage Advice", item: "https://www.remortgageadvisor.co.uk/mortgage-advice" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://www.remortgageadvisor.co.uk/mortgage-advice/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section
        className="relative bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 73, 83, 0.88), rgba(28, 73, 83, 0.92)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mortgage-advice" className="hover:text-white">Mortgage Advice</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{article.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.heroTitle}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{article.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1c4953] mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            ))}
          </article>

          {/* CTA Box */}
          <div className="mt-12 bg-[#1c4953] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Personalised Advice?</h3>
            <p className="text-white/90 mb-6">
              This guide provides general information. For advice tailored to your specific circumstances, speak to one of our FCA-regulated mortgage advisors.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5da593] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#4a8a7a] transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#1c4953] mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((related) => (
                  related && (
                    <Link
                      key={related.slug}
                      href={`/mortgage-advice/${related.slug}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-[#f0f7f5] transition-colors"
                    >
                      <h4 className="font-semibold text-[#1c4953] mb-1 line-clamp-2">{related.title}</h4>
                      <span className="text-sm text-[#5da593]">Read guide →</span>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
