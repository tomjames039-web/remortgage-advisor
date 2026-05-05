// Comprehensive Analytics Tracking Library
// Supports: Google Ads, Google Analytics 4, Facebook Pixel

// Configuration
const GOOGLE_ADS_ID = "AW-18036888328";
const CONVERSION_LABEL = "0F27CIDX2Y4cEIim1JhD";

// Type declarations
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

// ============================================
// Google Analytics / Google Ads Events
// ============================================

/**
 * Track phone call clicks
 */
export function trackPhoneClick(phoneNumber: string) {
  if (typeof window === "undefined") return;

  // Google Ads conversion
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 0.5, // Lower value than form submission
      currency: "GBP",
    });

    // GA4 event
    window.gtag("event", "phone_click", {
      event_category: "engagement",
      event_label: phoneNumber,
      value: 1,
    });
  }

  // Facebook Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: "Phone Call",
      content_category: "Lead",
    });
  }

  console.log("Phone click tracked:", phoneNumber);
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, formData?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Google Ads conversion
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: "GBP",
    });

    // GA4 event
    window.gtag("event", "generate_lead", {
      event_category: "conversion",
      event_label: formName,
      value: 1,
      ...formData,
    });
  }

  // Facebook Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: formName,
      content_category: "Form Submission",
    });
  }

  console.log("Form submission tracked:", formName);
}

/**
 * Track page views (for SPAs)
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === "undefined") return;

  // GA4 page view
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      page_location: window.location.href,
    });
  }

  // Facebook Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }

  console.log("Page view tracked:", pagePath);
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, ctaLocation: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "engagement",
      event_label: ctaName,
      cta_location: ctaLocation,
    });
  }

  // Facebook Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "CTAClick", {
      cta_name: ctaName,
      cta_location: ctaLocation,
    });
  }

  console.log("CTA click tracked:", ctaName);
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "scroll", {
      event_category: "engagement",
      event_label: `${percentage}%`,
      value: percentage,
    });
  }

  console.log("Scroll depth tracked:", percentage);
}

/**
 * Track time on page
 */
export function trackTimeOnPage(seconds: number) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "time_on_page", {
      event_category: "engagement",
      event_label: `${seconds} seconds`,
      value: seconds,
    });
  }

  console.log("Time on page tracked:", seconds);
}

/**
 * Track lender page views
 */
export function trackLenderView(lenderName: string, lenderSlug: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "view_item", {
      event_category: "lender",
      event_label: lenderName,
      items: [
        {
          item_id: lenderSlug,
          item_name: lenderName,
          item_category: "Mortgage Lender",
        },
      ],
    });
  }

  // Facebook Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "ViewContent", {
      content_name: lenderName,
      content_type: "lender",
      content_ids: [lenderSlug],
    });
  }

  console.log("Lender view tracked:", lenderName);
}

// ============================================
// React Hook for Phone Click Tracking
// ============================================

/**
 * Creates a phone click handler with tracking
 */
export function createPhoneClickHandler(phoneNumber: string) {
  return (e: React.MouseEvent) => {
    trackPhoneClick(phoneNumber);
    // Allow default behavior (tel: link)
  };
}
