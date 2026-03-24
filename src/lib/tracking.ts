// UTM Parameter Tracking Utilities

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string; // Google Click ID
}

// Get UTM parameters from URL
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined,
    gclid: params.get("gclid") || undefined,
  };
}

// Store UTM params in sessionStorage (persists across page navigation)
export function storeUTMParams(): void {
  if (typeof window === "undefined") return;

  const params = getUTMParams();

  // Only store if we have UTM params (don't overwrite existing)
  if (Object.values(params).some(v => v)) {
    sessionStorage.setItem("utm_params", JSON.stringify(params));
  }
}

// Get stored UTM params
export function getStoredUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem("utm_params");
    return stored ? JSON.parse(stored) : getUTMParams();
  } catch {
    return getUTMParams();
  }
}

// Track conversion in Google Ads
export function trackGoogleAdsConversion(): void {
  if (typeof window !== "undefined") {
    const win = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (typeof win.gtag === "function") {
      win.gtag("event", "conversion", {
        send_to: "AW-18036888328/Of27CIDX2Y4cEIim1JhD",
        value: 1.0,
        currency: "GBP",
      });
    }
  }
}

// Get landing page URL
export function getLandingPage(): string {
  if (typeof window === "undefined") return "";
  return window.location.href;
}

// Generate random activity for social proof
const UK_CITIES = [
  "London", "Manchester", "Birmingham", "Leeds", "Liverpool",
  "Sheffield", "Bristol", "Newcastle", "Nottingham", "Southampton",
  "Leicester", "Coventry", "Bradford", "Cardiff", "Belfast",
  "Edinburgh", "Glasgow", "Brighton", "Reading", "Derby"
];

const FIRST_NAMES = [
  "James", "Emma", "Oliver", "Sophia", "William", "Isabella",
  "Henry", "Charlotte", "Thomas", "Amelia", "George", "Mia",
  "Alexander", "Emily", "Daniel", "Grace", "Matthew", "Lily",
  "David", "Sarah", "Michael", "Hannah", "Robert", "Jessica"
];

export function generateRecentActivity(): { name: string; city: string; timeAgo: string } {
  const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const city = UK_CITIES[Math.floor(Math.random() * UK_CITIES.length)];
  const minutes = Math.floor(Math.random() * 15) + 1;
  const timeAgo = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;

  return { name, city, timeAgo };
}
