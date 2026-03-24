import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

// Google Ads Conversion ID and Label
const GOOGLE_ADS_ID = "AW-18036848730";
const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL || "CONVERSION_LABEL";

// Schema.org structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Apply Wise Financial Limited",
  alternateName: "Remortgage Advisor",
  url: "https://www.remortgageadvisor.co.uk",
  logo: "https://www.remortgageadvisor.co.uk/logo.png",
  description: "FCA regulated mortgage broker helping UK homeowners find the best remortgage rates.",
  email: "hello@remortgageadvisor.co.uk",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@remortgageadvisor.co.uk",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Remortgage Advisor",
  alternateName: "RemortgageAdvisor.co.uk",
  url: "https://www.remortgageadvisor.co.uk",
  description: "Compare remortgage rates from 100+ UK lenders. Get expert advice from FCA regulated mortgage brokers.",
  publisher: {
    "@type": "Organization",
    name: "Apply Wise Financial Limited",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.remortgageadvisor.co.uk/mortgage-lenders?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Remortgage Advisor",
  description: "Expert remortgage advice and mortgage comparison service. Compare rates from over 100 UK lenders including Barclays, HSBC, Nationwide, NatWest, Santander, and more.",
  url: "https://www.remortgageadvisor.co.uk",
  logo: "https://www.remortgageadvisor.co.uk/logo.png",
  image: "https://www.remortgageadvisor.co.uk/og-image.jpg",
  priceRange: "Free",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: ["Mortgage Broker", "Remortgage Advice", "Mortgage Comparison"],
  provider: {
    "@type": "Organization",
    name: "Apply Wise Financial Limited",
    description: "FCA authorised and regulated mortgage broker",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remortgage Advice",
          description: "Expert advice on switching your mortgage to a better deal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Rate Comparison",
          description: "Compare rates from 100+ UK lenders",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First Time Buyer Mortgages",
          description: "Help for first-time buyers to find the right mortgage",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "156",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is remortgaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remortgaging is the process of switching your current mortgage to a new deal, either with your existing lender or a different one. People remortgage to get a better interest rate, release equity, or change their mortgage terms.",
      },
    },
    {
      "@type": "Question",
      name: "When should I remortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best time to remortgage is typically 3-6 months before your current fixed or discounted rate ends. This allows time to complete the process before you move onto your lender's standard variable rate (SVR), which is usually higher.",
      },
    },
    {
      "@type": "Question",
      name: "Is your remortgage advice free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our mortgage comparison and initial advice service is completely free. We are paid by lenders when a mortgage completes, so there's no cost to you for using our service.",
      },
    },
    {
      "@type": "Question",
      name: "How much could I save by remortgaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Savings vary depending on your current rate and the deals available. Many homeowners save hundreds of pounds per month by switching from their lender's SVR to a competitive fixed rate. Use our comparison service to see how much you could save.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Remortgage Advisor | Compare UK Remortgage Rates | Apply Wise Financial",
  description: "Get expert remortgage advice from FCA regulated advisors. Compare rates from 100+ UK lenders, save money monthly, and avoid high standard variable rates. Free, no-obligation quotes.",
  keywords: "remortgage, remortgage rates, UK mortgage broker, remortgage advice, switch mortgage, save money on mortgage, Apply Wise Financial, compare mortgages, best mortgage rates UK",
  authors: [{ name: "Apply Wise Financial Limited" }],
  metadataBase: new URL("https://www.remortgageadvisor.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Remortgage Advisor | Compare UK Remortgage Rates",
    description: "Get expert remortgage advice from FCA regulated advisors. Compare rates from 100+ UK lenders.",
    url: "https://www.remortgageadvisor.co.uk",
    siteName: "Remortgage Advisor",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Remortgage Advisor - Compare UK Mortgage Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remortgage Advisor | Compare UK Remortgage Rates",
    description: "Get expert remortgage advice from FCA regulated advisors. Compare rates from 100+ UK lenders.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets for faster page load */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.remortgageadvisor.co.uk" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(financialServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Conversion tracking function - call this on form submission */}
        <Script id="conversion-function" strategy="afterInteractive">
          {`
            window.trackConversion = function() {
              gtag('event', 'conversion', {
                'send_to': '${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'GBP'
              });
            };
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
