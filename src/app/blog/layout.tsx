import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Blog | Expert Advice & Insights | Remortgage Advisor",
  description: "Read expert mortgage advice, remortgage guides, and UK property market insights. Learn about interest rates, mortgage types, and how to save on your home loan from FCA regulated advisors.",
  keywords: "mortgage blog, remortgage advice, mortgage tips UK, interest rates news, property market UK, mortgage guides, FCA mortgage advice, home loan tips, buy to let advice, first time buyer guide",
  openGraph: {
    title: "Mortgage Blog | Expert Advice & Insights",
    description: "Expert mortgage advice, remortgage guides, and UK property market insights from FCA regulated advisors.",
    url: "https://www.remortgageadvisor.co.uk/blog",
    siteName: "Remortgage Advisor",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Blog | Expert Advice & Insights",
    description: "Expert mortgage advice, remortgage guides, and UK property market insights.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
