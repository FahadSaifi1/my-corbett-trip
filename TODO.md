# My Corbett Trip — Owner Input Checklist (TODO.md)

This document itemizes every real business detail and asset that requires input from the business owner prior to full production launch.

---

## 1. Business Credentials & Contact Details (`content/config.ts`)
*These fields currently have clean placeholders or auto-hide until filled:*

- [ ] **Phone Number (`phone`, `phoneDisplay`):** Real business calling number (e.g. `+91 98765 XXXXX`).
- [ ] **WhatsApp Number (`whatsapp`, `whatsappDisplay`):** Real WhatsApp Business number (in international format without `+` for link generation, e.g. `9198765XXXXX`).
- [ ] **Email Address (`email`):** Dedicated operational email address (e.g. `concierge@mycorbetttrip.com` or `bookings@mycorbetttrip.com`).
- [ ] **Office Address (`address`):** Exact physical office address in Ramnagar / Uttarakhand.
- [ ] **UTDB Registration Number (`utdbRegistrationNo`):** Official Uttarakhand Tourism Development Board registration license number. *(The trust badge in header and footer auto-hides until this is entered).*
- [ ] **GST Identification Number (`gstin`):** 15-digit GST number. *(Auto-hides until filled).*
- [ ] **Google Business Profile URL (`googleBusinessProfileUrl`):** Direct link to verified Google Maps listing.
- [ ] **Instagram Handle (`instagramUrl`):** Official Instagram profile link.
- [ ] **Years in Business (`yearsInBusiness`):** e.g. "8 Years" or "Established 2018". *(Auto-hides until filled).*
- [ ] **Callback Promise Window (`callbackPromise`):** e.g. "We reply within 15 minutes, 8:00 AM – 10:00 PM IST".

---

## 2. Package Pricing Finalization (`content/packages.ts`)
*Currently set as `TODO: Owner to insert package price` so no false figures are displayed:*

- [ ] **Corbett Weekend Escape (2N/3D):** Enter starting price (e.g. `₹14,500 per person`).
- [ ] **Dhikala Forest Lodge Experience:** Enter starting price / seasonal quote formula.
- [ ] **Riverside Luxury Retreat:** Enter boutique luxury price per couple / night.
- [ ] **Family Safari Holiday:** Enter family package tariff.
- [ ] **Photographer's Deep Corbett:** Enter 6-safari photography intensive price.
- [ ] **Birding in Corbett:** Enter specialized birding guide price.
- [ ] **Honeymoon in the Jungle:** Enter romantic villa package tariff.
- [ ] **Corbett + Nainital Circuit:** Enter 4N/5D combined hill & safari tariff.
- [ ] **Groups & Corporate Offsites:** Enter per-delegate tiering.
- [ ] **Safari Only:** Confirm concierge markup over official CTR statutory fees.

---

## 3. Team Member Bios & Photos (`content/team.ts`)
*Starts empty `[]` to comply with non-negotiable honesty rules:*

- [ ] Add real founder name, bio, local roots, and portrait photo path.
- [ ] Add key senior naturalists and tracking guides (name, native village, birding / tracking specialization).
- [ ] Once entries are added, the **Meet the Naturalists** section automatically renders on the homepage and about page.

---

## 4. Real Customer Reviews (`content/reviews.ts`)
*Starts empty `[]` so no fake testimonials are ever displayed:*

- [ ] Import real, verified reviews from your Google Business Profile or direct guest feedback.
- [ ] Fields: `id`, `author`, `city`, `rating` (1–5), `date`, `comment`, `zoneVisited`, `verifiedSource`.
- [ ] Once reviews are added, the **Guest Field Logbook** section automatically renders.

---

## 5. Partner Hotels & Lodges (`content/stays.ts`)
*Starts empty `[]` to avoid uncontracted hotel promises:*

- [ ] Add contracted partner lodges in Dhikuli, Marchula, and Ramnagar.
- [ ] Fields: `name`, `location`, `type` (Luxury Lodge / Riverside Resort / Eco Cottage), `features`, `distanceToGates`, `imageUrls`, `startingPricePerNight`.
- [ ] Once added, `/stays` and the homepage stays ribbon display real verified accommodations.

---

## 6. Environment Variables for Lead Engine (`.env.local`)
Configure the following API keys in `.env.local` or Vercel Project Settings:

```bash
# Meta Pixel & Conversions API (CAPI)
META_PIXEL_ID=your_pixel_id
META_CAPI_TOKEN=your_capi_access_token

# Google Analytics 4 & Clarity
GA4_ID=G-XXXXXXXXXX
CLARITY_ID=your_clarity_project_id

# Resend Email Notification
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_NOTIFY_EMAIL=bookings@mycorbetttrip.com

# Telegram Bot (Instant smartphone alerts for team)
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=-100xxxxxxxxxx

# Google Sheets Lead Logger
GOOGLE_SHEETS_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}

# Cloudflare Turnstile (Anti-Bot)
TURNSTILE_SITE_KEY=0x4AAAAAAxxxxxxxx
TURNSTILE_SECRET=0x4AAAAAAxxxxxxxx

# Domain & Phone
NEXT_PUBLIC_DOMAIN=mycorbetttrip.com
NEXT_PUBLIC_PHONE=+919876543210
NEXT_PUBLIC_WHATSAPP=919876543210
```

