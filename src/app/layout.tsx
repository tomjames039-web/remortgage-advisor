import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Google Tag Manager
const GTM_ID = "GTM-5DNCNXGB";

// Google Ads Conversion Tracking
const GOOGLE_ADS_ID = "AW-18036888328";

// Google Analytics 4 - Replace with your actual GA4 Measurement ID
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // TODO: Replace with your GA4 ID

// Facebook Pixel - Replace with your actual Pixel ID
const FB_PIXEL_ID = "XXXXXXXXXXXXXXX"; // TODO: Replace with your Facebook Pixel ID

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
        {/* Google Tag Manager - must be as high as possible */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

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

        {/* Google Analytics 4 + Google Ads Tracking */}
        <Script
          id="gtag-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());

              // Google Ads
              gtag('config', '${GOOGLE_ADS_ID}');

              // Google Analytics 4 (uncomment when you have your GA4 ID)
              // gtag('config', '${GA4_MEASUREMENT_ID}');
            `,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="beforeInteractive"
        />

        {/* Facebook Pixel - Uncomment when you have your Pixel ID */}
        {/* <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: \`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            \`,
          }}
        /> */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) - immediately after opening body tag */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
