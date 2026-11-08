# My Corbett Trip — Production Platform

A high-performance, naturalist-crafted web platform for **My Corbett Trip** (`mycorbetttrip.com`), built with Next.js (App Router), TypeScript, and Tailwind CSS.

Designed with quiet editorial confidence in the spirit of world-class safari lodges (Aman, Singita, &Beyond, Taj Safaris). Built specifically to turn mobile Meta (Facebook/Instagram) ad traffic into qualified leads while dominating organic search for Jim Corbett travel queries.

---

## 1. Quick Start & Local Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd my-corbett-trip

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build & Verification
```bash
# Compile and statically generate all routes
npm run build

# Start production server
npm run start
```

---

## 2. Environment Variables (`.env.local`)

Create a `.env.local` file in the root directory with the following variables:

```bash
# Meta Pixel & Server-Side Conversions API (CAPI)
META_PIXEL_ID="your_meta_pixel_id"
META_CAPI_TOKEN="your_meta_system_user_capi_token"

# Analytics
GA4_ID="G-XXXXXXXXXX"
CLARITY_ID="your_microsoft_clarity_project_id"

# Notification Endpoints
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"
LEAD_NOTIFY_EMAIL="bookings@mycorbetttrip.com"

# Telegram Real-time Lead Bot
TELEGRAM_BOT_TOKEN="123456789:ABCDefghIJKLmnOPQRstuvWXYZ"
TELEGRAM_CHAT_ID="-100xxxxxxxxxx"

# Google Sheets Synchronization (Service Account)
GOOGLE_SHEETS_ID="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}'

# Cloudflare Turnstile Bot Protection
TURNSTILE_SITE_KEY="0x4AAAAAAxxxxxxxxxxxxxxx"
TURNSTILE_SECRET="0x4AAAAAAxxxxxxxxxxxxxxx"

# Brand & Telephone
NEXT_PUBLIC_DOMAIN="mycorbetttrip.com"
NEXT_PUBLIC_PHONE="+919876543210"
NEXT_PUBLIC_WHATSAPP="919876543210"
```

---

## 3. How to Manage Content & Pricing (Non-Developer Guide)

All prices, packages, rules, fees, reviews, and team members are isolated into strictly typed files inside the `/content` folder. Non-developers can safely edit these files without touching any React code.

| File | Purpose | What You Can Edit |
| :--- | :--- | :--- |
| `content/config.ts` | Brand & Contact Details | Real phone number, WhatsApp number, email, office address, UTDB registration number, GSTIN, callback promise line. |
| `content/fees.ts` | Statutory CTR Fees | Official CTR permit fees, vehicle rates per zone, guide fee, concessions, and the "last verified" audit date. |
| `content/packages.ts` | The 10 Signature Packages | Package descriptions, itineraries, inclusions, exclusions, and starting prices (`startingPrice`). |
| `content/zones.ts` | The 8 Tourism Zones | Gate names, opening seasons, quotas, wildlife highlights, practical tips, and zone FAQs. |
| `content/rules.ts` | 2026 CTR Visitor Rules | Mobile phone ban details, dual ID checks, same-day online booking cut-offs, zero-plastic rules. |
| `content/reviews.ts` | Real Guest Reviews | Add real customer reviews. *(Empty by default; auto-hides reviews UI until entries are added).* |
| `content/team.ts` | Naturalist Bios & Photos | Add founder and naturalist bios. *(Auto-hides team section until real data is added).* |
| `content/stays.ts` | Partner Resorts & Lodges | Add partner hotel details in Dhikuli and Ramnagar. *(Auto-hides until contracted).* |
| `content/journal.ts` | Naturalist Field Journal | Add or update educational field guides and articles. |

---

## 4. Architectural Highlights & Lead Engine

- **High-Converting 2-Step Lead Form (`components/modules/LeadForm.tsx`):**
  - **Step 1:** Travel dates/month, adult and child counts, expedition interest.
  - **Step 2:** Full name, mobile number (with intelligent +91, 0, and space formatting), city, budget range, and DPDP Act 2023 compliance consent.
  - Submits in under 30 seconds on mobile screens.
- **Dedicated Meta Ad Landing Pages (`/go/[slug]`):**
  - Distraction-free header (no outbound nav leaks; only wordmark + direct WhatsApp CTA).
  - Matches exact ad creative scent: `/go/corbett-weekend`, `/go/dhikala-night-stay`, `/go/family-safari`, `/go/luxury-stays`.
  - Form placed strictly above the fold on mobile screens.
  - Excluded from search indexation (`noindex, nofollow`).
- **Resilient API Dispatch (`/api/lead`):**
  - Zod validation and input sanitization.
  - Bot filtering via honeypot and Turnstile.
  - Generates human-readable lead IDs: `MCT-2611-XXXX`.
  - Dispatches parallel webhooks to Google Sheets, Resend email alerts, Telegram alerts, and Meta CAPI (with SHA-256 phone/email hashing).
  - If a downstream webhook fails, the lead is preserved, and the user still receives an instant confirmation with a prefilled WhatsApp link.

---

## 5. Non-Negotiable Honesty & Regulatory Adherence

1. **Private Company Notice:** Prominently displayed across the global footer, ad landing pages, and every safari/night-stay page:
   > *"My Corbett Trip is a private travel company and is not affiliated with Corbett Tiger Reserve. Safari and night-stay permits are issued by CTR in the traveller's name via its official portal (corbettgov.org) and are subject to CTR rules and availability."*
2. **Zero Fake Testimonials:** Reviews, team bios, and partner stays start empty in `/content/` and automatically collapse via the `SafeSection` wrapper until real, verified assets are provided.
3. **Official Fee Accountability:** Every fee table displays: *"Official fees last verified: 06 November 2026. CTR may revise fees."*
4. **2026 Regulations Enforced:** Highlights the Supreme Court 2026 core zone mobile phone ban and September 2026 dual-sided ID verification rules.

---

## 6. Vercel Deployment

1. Push your repository to GitHub or GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Under **Project Settings > Environment Variables**, paste all keys from your `.env.local`.
4. Deploy. Vercel automatically generates production edge caching, SSL, and image optimization.
