# Remortgage Advisor - Project Tasks

## Completed
- [x] Removed all Netlify Forms from /lp page
- [x] Form POSTs JSON directly to Supabase endpoint
- [x] Added apikey header as required
- [x] Using exact field names as specified
- [x] Capturing all UTM/tracking params from URL
- [x] Redirect to /thank-you on success
- [x] Show error message on failure
- [x] **Soro Blog Integration** - Added /blog page with Soro widget embed

## Soro Blog Integration

**Embed Code:**
```html
<div id="soro-blog"></div>
<script src="https://app.trysoro.com/api/embed/98dffcc7-567b-45d7-babc-c19a55dab98b" defer></script>
```

**Implementation:**
- Created `/src/app/blog/page.tsx` with Soro embed
- Added Blog link to desktop navigation
- Added Blog link to mobile navigation
- Added Blog link to footer Quick Links
- Added preconnect for `app.trysoro.com` for faster loading

**Next Steps:**
1. Go to Soro dashboard and click "I've Added the Code" to activate
2. Publish your first article in Soro
3. Enable auto-publish if desired

## API Details

**Endpoint:** `https://xpxdfkjaqzkovmerfhbq.supabase.co/functions/v1/submit-lead`

**Headers:**
```
Content-Type: application/json
apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**JSON Body:**
```json
{
  "fullName": "Mohammed Khan",
  "email": "user@example.com",
  "contactNumber": "07480300009",
  "postcode": "TW8 8NH",
  "mortgageAmount": 600000,
  "propertyValue": 650000,
  "currentLender": "Other",
  "mortgagePurpose": "First Time Buyer",
  "agreedToTerms": true,
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "23678918139",
  "utmTerm": "",
  "utmContent": "",
  "gclid": "EAIaIQobChMI...",
  "gadSource": "5",
  "gadCampaignid": "23678918139",
  "gbraid": "",
  "wbraid": "",
  "landingPage": "https://remortgageadvisor.co.uk/lp?...",
  "leadSource": "remortgageadvisor.co.uk",
  "submissionType": "ppc-google"
}
```

## Tracking Parameters Captured
- `utm_source` → `utmSource`
- `utm_medium` → `utmMedium`
- `utm_campaign` → `utmCampaign`
- `utm_term` → `utmTerm`
- `utm_content` → `utmContent`
- `gclid` → `gclid`
- `gad_source` → `gadSource`
- `gad_campaignid` → `gadCampaignid`
- `gbraid` → `gbraid`
- `wbraid` → `wbraid`
- Full URL → `landingPage`

## Hardcoded Values
- `leadSource`: "remortgageadvisor.co.uk"
- `submissionType`: "ppc-google"

## Deployed To
- Preview: https://same-xqhnvxtk4bn-latest.netlify.app
- Production: Connect to remortgageadvisor.co.uk via Netlify
