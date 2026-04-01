# Remortgage Advisor - Project Todos

## Completed
- [x] Initial project setup with Next.js and Shadcn
- [x] Homepage with lead capture form
- [x] Mortgage lenders listing page
- [x] Individual lender detail pages (103 lenders)
- [x] About, Contact, Privacy, Terms pages
- [x] Site deployed to Netlify
- [x] Updated lender page hero section with rate comparison table
- [x] Added urgency banner at top of pages
- [x] Added social proof notifications (popup showing recent activity)
- [x] Added sticky mobile CTA bar
- [x] Added stats counter component
- [x] PPC landing page at /lp with simplified form
- [x] UTM tracking for Google Ads campaigns
- [x] Netlify form configuration for lead capture
- [x] Sitemap and robots.txt for SEO
- [x] Schema.org structured data for SEO
- [x] Google Ads global site tag (AW-18036848730) on all pages
- [x] Thank you page at /thank-you with minimal design
- [x] Form redirects to /thank-you after submission
- [x] Google Ads conversion event fires on /thank-you page load

## In Progress / Awaiting User Action
- [ ] Add Conversion Label - User needs to provide the label (format: XXXX-XXXXXXX) to complete conversion tracking
- [ ] Connect custom domain (remortgageadvisor.co.uk) - User needs to claim deployment and configure DNS
- [ ] Add real Google Analytics ID (replace G-XXXXXXXXXX) - Waiting for user to provide ID
- [ ] Set up email notifications in Netlify dashboard - User action required

## How to Complete Remaining Steps

### 1. Google Ads Conversion Label
The global site tag is configured with ID `AW-18036848730`.
To complete conversion tracking, provide the Conversion Label from Google Ads:
1. In Google Ads, go to Tools → Conversions
2. Select/create your conversion action
3. Find the label in the tag (looks like: AW-18036848730/AbCdEfGhIjK)
4. Share the part after the slash (e.g., AbCdEfGhIjK)

### 2. Custom Domain Setup
1. Click "Deployed" panel → "Claim Deployment" to connect Netlify account
2. In Netlify: Site configuration → Domains → Add domain
3. Update DNS records at domain registrar

### 3. Google Analytics
- User provides GA4 Measurement ID (G-XXXXXXXXXX format)
- Update in layout.tsx or via Netlify environment variables

### 4. Email Notifications
- In Netlify dashboard → Forms → Select form → Add email notification
- Repeat for each form: homepage-enquiry, lender-enquiry, ppc-landing-enquiry

## Current Configuration

### Google Ads Tracking
- **Global Site Tag ID**: AW-18036848730 (configured in layout.tsx)
- **Conversion Label**: CONVERSION_LABEL (placeholder - needs real value)
- **Conversion fires on**: /thank-you page load only
- **Currency**: GBP
- **Value**: 1.0

### Form Redirects
- Homepage form → /thank-you ✓
- Landing page (/lp) form → /thank-you ✓
- Lender page forms → /thank-you ✓

## Notes
- Forms submit to Netlify Forms
- UTM parameters are tracked and included in form submissions
- Social proof notifications appear after 5 seconds on page
- Sticky mobile CTA appears after scrolling 300px
- Conversion tracking fires on /thank-you page
