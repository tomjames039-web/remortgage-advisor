import type { MetadataRoute } from "next";
import { lenders } from "@/data/lenders";
import { mortgageDeals } from "@/data/mortgage-deals";
import { mortgagesFor } from "@/data/mortgages-for";
import { mortgageTypes } from "@/data/mortgage-types";
import { mortgageAdvice } from "@/data/mortgage-advice";
import { governmentSchemes } from "@/data/government-schemes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.remortgageadvisor.co.uk";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgage-lenders`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgage-deals`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgages-for`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgage-types`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgage-advice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/government-schemes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Dynamic lender pages
  const lenderPages: MetadataRoute.Sitemap = lenders.map((lender) => ({
    url: `${baseUrl}/mortgage-lenders/${lender.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Mortgage deals pages
  const mortgageDealPages: MetadataRoute.Sitemap = mortgageDeals.map((deal) => ({
    url: `${baseUrl}/mortgage-deals/${deal.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Mortgages for pages
  const mortgagesForPages: MetadataRoute.Sitemap = mortgagesFor.map((item) => ({
    url: `${baseUrl}/mortgages-for/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Mortgage types pages
  const mortgageTypePages: MetadataRoute.Sitemap = mortgageTypes.map((type) => ({
    url: `${baseUrl}/mortgage-types/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Mortgage advice pages
  const mortgageAdvicePages: MetadataRoute.Sitemap = mortgageAdvice.map((article) => ({
    url: `${baseUrl}/mortgage-advice/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Government schemes pages
  const governmentSchemePages: MetadataRoute.Sitemap = governmentSchemes.map((scheme) => ({
    url: `${baseUrl}/government-schemes/${scheme.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...lenderPages,
    ...mortgageDealPages,
    ...mortgagesForPages,
    ...mortgageTypePages,
    ...mortgageAdvicePages,
    ...governmentSchemePages,
  ];
}
