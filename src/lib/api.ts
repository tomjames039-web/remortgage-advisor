// Supabase Lead Submission API

const SUPABASE_ENDPOINT = "https://xpxdfkjaqzkovmerfhbq.supabase.co/functions/v1/submit-lead";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweGRma2phcXprb3ZtZXJmaGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNzA0MTIsImV4cCI6MjA4OTg0NjQxMn0.VbVUMZFB61jl3K2CP29w_gMephbbyapMjeks_ipRmJA";

// Lead data interface matching exact API requirements
export interface LeadData {
  fullName: string;
  email: string;
  contactNumber: string;
  postcode: string;
  mortgageAmount: number;
  propertyValue: number;
  currentLender: string;
  mortgagePurpose: string;
  agreedToTerms: boolean;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  gadSource: string;
  gadCampaignid: string;
  gbraid: string;
  wbraid: string;
  landingPage: string;
  leadSource: string;
  submissionType: string;
}

// Form input from the landing page
export interface LPFormInput {
  fullName: string;
  email: string;
  contactNumber: string;
  postcode: string;
  mortgageAmount: string;
  propertyValue: string;
  currentLender: string;
  mortgagePurpose: string;
  agreedToTerms: boolean;
}

// Get all tracking parameters from URL
function getTrackingParams(): {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  gadSource: string;
  gadCampaignid: string;
  gbraid: string;
  wbraid: string;
  landingPage: string;
} {
  if (typeof window === "undefined") {
    return {
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
      gclid: "",
      gadSource: "",
      gadCampaignid: "",
      gbraid: "",
      wbraid: "",
      landingPage: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    gadSource: params.get("gad_source") || "",
    gadCampaignid: params.get("gad_campaignid") || "",
    gbraid: params.get("gbraid") || "",
    wbraid: params.get("wbraid") || "",
    landingPage: window.location.href,
  };
}

// Parse numeric string to integer (removes £, commas, spaces)
function parseToInt(value: string): number {
  if (!value) return 0;
  const cleaned = value.replace(/[£,\s]/g, "").replace(/[^0-9.-]/g, "");
  const parsed = Number.parseInt(cleaned, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

// Transform form input to API format
export function transformLPFormToLeadData(formInput: LPFormInput): LeadData {
  const tracking = getTrackingParams();

  return {
    fullName: formInput.fullName,
    email: formInput.email,
    contactNumber: formInput.contactNumber,
    postcode: formInput.postcode,
    mortgageAmount: parseToInt(formInput.mortgageAmount),
    propertyValue: parseToInt(formInput.propertyValue),
    currentLender: formInput.currentLender,
    mortgagePurpose: formInput.mortgagePurpose,
    agreedToTerms: formInput.agreedToTerms,
    utmSource: tracking.utmSource,
    utmMedium: tracking.utmMedium,
    utmCampaign: tracking.utmCampaign,
    utmTerm: tracking.utmTerm,
    utmContent: tracking.utmContent,
    gclid: tracking.gclid,
    gadSource: tracking.gadSource,
    gadCampaignid: tracking.gadCampaignid,
    gbraid: tracking.gbraid,
    wbraid: tracking.wbraid,
    landingPage: tracking.landingPage,
    leadSource: "remortgageadvisor.co.uk",
    submissionType: "ppc-google",
  };
}

// Submit lead to Supabase (for /lp landing page)
export async function submitLPLeadToSupabase(formInput: LPFormInput): Promise<{ success: boolean; error?: string }> {
  const leadData = transformLPFormToLeadData(formInput);

  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_API_KEY,
      },
      body: JSON.stringify(leadData),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        return { success: true };
      }
      return { success: false, error: "Submission failed. Please try again." };
    }

    const errorText = await response.text();
    console.error("Supabase submission failed:", response.status, errorText);
    return { success: false, error: "Something went wrong. Please try again or call us directly." };
  } catch (error) {
    console.error("Supabase submission error:", error);
    return { success: false, error: "Connection error. Please check your internet and try again." };
  }
}

// Legacy function for other forms (homepage, lender pages, etc.)
export interface FormInput {
  fullName: string;
  email: string;
  contactNumber: string;
  postcode: string;
  mortgageAmount?: string;
  propertyValue?: string;
  combinedIncome?: string;
  currentLender?: string;
  mortgagePurpose?: string;
  mortgageLength?: string;
}

export async function submitLeadToSupabase(formInput: FormInput): Promise<{ success: boolean; error?: string }> {
  const tracking = getTrackingParams();

  const leadData = {
    fullName: formInput.fullName,
    email: formInput.email,
    contactNumber: formInput.contactNumber,
    postcode: formInput.postcode,
    mortgageAmount: parseToInt(formInput.mortgageAmount || "0"),
    propertyValue: parseToInt(formInput.propertyValue || "0"),
    currentLender: formInput.currentLender || "",
    mortgagePurpose: formInput.mortgagePurpose || "",
    agreedToTerms: true,
    utmSource: tracking.utmSource,
    utmMedium: tracking.utmMedium,
    utmCampaign: tracking.utmCampaign,
    utmTerm: tracking.utmTerm,
    utmContent: tracking.utmContent,
    gclid: tracking.gclid,
    gadSource: tracking.gadSource,
    gadCampaignid: tracking.gadCampaignid,
    gbraid: tracking.gbraid,
    wbraid: tracking.wbraid,
    landingPage: tracking.landingPage,
    leadSource: "remortgageadvisor.co.uk",
    submissionType: "ppc-google",
  };

  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_API_KEY,
      },
      body: JSON.stringify(leadData),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        return { success: true };
      }
      return { success: false, error: "Submission failed. Please try again." };
    }

    const errorText = await response.text();
    console.error("Supabase submission failed:", response.status, errorText);
    return { success: false, error: "Something went wrong. Please try again or call us directly." };
  } catch (error) {
    console.error("Supabase submission error:", error);
    return { success: false, error: "Connection error. Please check your internet and try again." };
  }
}
