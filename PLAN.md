# My Corbett Trip — Architecture & Implementation Plan

**Target:** `[DOMAIN]` (Brand: **My Corbett Trip**)  
**Design Philosophy:** *"Naturalist's field journal meets luxury lodge"* (Quiet, editorial confidence in the spirit of Aman, Singita, &Beyond, and Taj Safaris).  
**Primary Goal:** Transform mobile Meta ad and high-intent organic search traffic into qualified safari and holiday leads via a frictionless 2-step lead engine and prefilled WhatsApp triggers.

---

## 1. Design System & Design Tokens

### Color Palette (Tokens)
- **`--color-sal-forest` (#1F2A1F):** Primary brand dark; deep forest green evoking the dense sal canopies of Bijrani and Dhikala. Used for dark sections, primary buttons, headers, and footer.
- **`--color-riverstone` (#E9E4D8):** Primary brand background; warm, tactile mineral parchment tone reminiscent of Himalayan river pebbles and archival field journals. Replaces harsh #ffffff.
- **`--color-bark` (#6B4F3A):** Secondary natural tone; warm timber/earth used for secondary accents, badges, rule accents, and subtle borders.
- **`--color-tiger-ochre` (#C8782A):** Accent color; vibrant ochre for key highlights, active states, and callout icons. (Text variant: #9B5614 to pass strict WCAG AAA / AA contrast against light backgrounds).
- **`--color-mist` (#A9B4A3):** Neutral muted sage/olive; used for subtle background cards, chip tags, dividers, and secondary borders.
- **`--color-ink` (#141414):** Deep charcoal black; high-contrast typography, crisp line rules, and tabular numeric figures.

### Typography (Self-Hosted via `next/font`)
- **Display Serif:** Cormorant Garamond / Fraunces (Headlines, quote pullouts, editorial narrative titles).
- **Refined Sans:** Instrument Sans / Manrope (Body text, forms, navigation, technical specs, badges).
- **Numbers:** Tabular figures (`font-variant-numeric: tabular-nums`) for fee comparisons, dates, and schedules.
- **Body Measure:** Maximum reading width constrained to `68ch–70ch` for editorial readability.

### Layout & Craft Details
- **Grid:** 12-column responsive layout with deliberate asymmetric balance, generous whitespace, and hairline rules (`1px solid rgba(31, 42, 31, 0.12)`).
- **Icons:** Custom 1.5px stroke SVG icon collection (Pugmark, Safari Gypsy, Open Canter, Binoculars, Ramganga River, Sal Leaf, Compass, Camera with strike-through for phone rule).
- **Grain:** Subtle SVG noise texture on hero headers for organic depth without performance overhead.
- **Restrained Motion:** Gentle 10px–16px entry reveals (200–350ms duration) wrapped in `prefers-reduced-motion` fallbacks.
- **Anti-AI Design Rules:** No purple/blue neon gradients, no glassmorphism cards, no generic 3-box feature cards with rocket icons, no marketing buzzwords ("Unlock", "Seamless", "Elevate").

---

## 2. Complete Sitemap & Route Hierarchy

```
/ (Homepage)
├── /packages
│   └── /packages/[slug] (10 signature packages)
├── /safari-zones (Interactive Hub & Comparison Matrix)
│   ├── /safari-zones/dhikala
│   ├── /safari-zones/bijrani
│   ├── /safari-zones/jhirna
│   ├── /safari-zones/dhela
│   ├── /safari-zones/durga-devi
│   ├── /safari-zones/garjiya
│   ├── /safari-zones/sonanadi
│   ├── /safari-zones/pakhro
│   └── /safari-zones/beyond-the-reserve (Sitabani, Kota, Phato)
├── /jeep-safari
├── /canter-safari
├── /dhikala-night-stay
├── /stays (Curated partner lodges; auto-hidden until entries configured)
├── /safari-cost (Transparent fee ledger + Interactive fee calculator)
├── /safari-rules (2026 rules: Mobile phone ban, Dual ID check, Same-day limits)
├── /best-time-to-visit (Month-by-month wildlife & weather guide)
├── /how-to-reach (Rail, Road from Delhi, Flight via Pantnagar/Dehradun)
├── /journal (Editorial guides & wildlife articles)
│   ├── /journal/corbett-zones-compared
│   ├── /journal/dhikala-night-stay-guide
│   ├── /journal/best-time-to-visit-month-by-month
│   ├── /journal/corbett-safari-cost-explained-2026
│   ├── /journal/new-corbett-rules-2026-phones-and-ids
│   ├── /journal/delhi-to-corbett-road-and-rail
│   ├── /journal/corbett-with-kids
│   └── /journal/birding-in-corbett
├── /about (Local roots, conservation ethos, naturalist philosophy)
├── /contact (Direct phone, WhatsApp, office address, opening hours)
├── /faq (Comprehensive traveller questions)
├── /privacy-policy (DPDP Act 2023 compliant data governance)
├── /terms (Booking terms, permit non-refundability, liability)
├── /cancellation-policy (Strict official permit rules vs private lodge flexibility)
├── /go/[slug] (Focused Meta Ad landing pages: corbett-weekend, dhikala-night-stay, family-safari, luxury-stays)
└── /thank-you (Lead confirmation, next steps, ID checklist)
```

---

## 3. Text Wireframes (Key Pages)

### Wireframe: Homepage (`/`)
1. **Top Notice Bar:** "Official permits issued via CTR portal (corbettgov.org) in your name. Independent private agency." + WhatsApp direct line.
2. **Main Header:** Minimalist wordmark "MY CORBETT TRIP" | Nav (Safari Zones, Packages, Night Stay, Safari Cost, Rules, Journal) | Primary CTA "Plan Safari".
3. **Hero Section (Editorial Lodge Style):**
   - Headline: *"The forest opens at dawn. We ensure you are ready."*
   - Subline: *"Handcrafted wildlife expeditions, verified jeep & canter permits, and authentic forest lodge stays across Corbett Tiger Reserve."*
   - Trust Badge / Disclaimer line: Private operator notice.
   - Quick Planner Strip: Month Picker | Travellers | Safari Interest -> auto-scrolls/fills lead form.
   - Primary Action: "Plan My Corbett Trip" (triggers modal/scroll) | Secondary Action: WhatsApp Direct Chat with prefilled message.
4. **Interactive Zone Navigator ("Which zone for your dates?"):**
   - Month-by-month slider/selector (Jan – Dec).
   - Dynamic cards showing currently open zones, highlight species, gate name, and character note.
5. **Four Signature Expeditions (Asymmetric Layout):**
   - Dhikala Forest Lodge Night Stay (45-day window explainer)
   - Corbett Weekend Escape (2N/3D)
   - Photographer’s Deep Wilderness (4–6 multi-zone drives)
   - Riverside Luxury Retreat (Kosi river lodge + private naturalist)
6. **Transparent Cost Explainer (The Two-Column Breakdown):**
   - Column 1: Government Statutory Fees (Permit ₹3,380 Indian / ₹6,680 Foreign + Vehicle ₹2,700–₹3,000 + Guide ₹1,000 paid to CTR/operators).
   - Column 2: What My Corbett Trip Charges (Curation, custom logistics, expert naturalist coordination, hassle-free permit booking).
7. **Dhikala Forest Rest House Feature:**
   - Honest explanation of the historic 1890 lodge, 45-day rolling window for Indians, 90-day for foreign visitors, solar power rules, and vegetarian-only food policy.
8. **Curated Stays Section:**
   - Component rendered dynamically from `content/stays.ts`; auto-hides cleanly when array is empty.
9. **The Team & Local Roots:**
   - Component rendered dynamically from `content/team.ts`; auto-hides if empty or displays verified team members.
10. **Reviews & Guest Logbook:**
    - Component rendered dynamically from `content/reviews.ts`; auto-hides cleanly when empty.
11. **Essential Knowledge Before You Go (2026 Rules):**
    - 3 key cards: (1) Core Zone Mobile Phone Ban (bring a camera!), (2) Dual-side ID verification, (3) Zero-plastic policy.
12. **Curated FAQ (8–10 high-intent questions):**
    - "Can I book Dhikala for tomorrow?", "Are day jeeps allowed in Dhikala?", "What happens if it rains in Jhirna?"
13. **Final Editorial Lead Form Section:**
    - Step 1: Travel dates/month, adults/children, safari interest.
    - Step 2: Name, mobile (+91), city, email, budget tier, DPDP consent.
14. **Footer:** Full legal disclaimers, company credentials, UTDB registration placeholder, phone/email, emergency numbers, zone directory, and legal links.

### Wireframe: Meta Ad Landing Page (`/go/[slug]`)
- **Header:** Minimalist: Logo on the left, click-to-WhatsApp button on the right. No external navigational leaks.
- **Above The Fold (Mobile 360–390px):**
  - Urgent/Focused Headline matching ad scent (e.g. *"Dhikala Forest Rest House: Inside Corbett's Deepest Core"* or *"Corbett Weekend Safari: 2 Nights in the Wilderness"*).
  - High-impact wildlife photograph with naturalist caption.
  - 2-Step Lead Form directly above the fold on mobile.
- **Highlights List:** 4 concise bullet points with hairline dividers.
- **Transparent Pricing Box:** Clear government fee vs package structure.
- **Sticky Bottom Mobile Bar:** WhatsApp (Primary, green) | Call (Secondary) | Enquire Now.

### Wireframe: Safari Cost & Fee Calculator (`/safari-cost`)
- **Context:** Official CTR fee schedule audit (Last verified: 06 Nov 2026).
- **Interactive Calculator:**
  - Nationality: Indian / Foreign / SAARC / OCI
  - Experience: Day Jeep Safari / Dhikala Canter Safari / FRH Night Stay
  - Number of Adults & Children
  - Zone Selection (Bijrani, Jhirna, Dhela, Dhikala, etc.)
  - Real-time Output: Exact Government Permit + Registered Vehicle + Guide fee + Estimated Total.

---

## 4. Component Architecture (React & Next.js App Router)

- **`components/ui/`**:
  - `Button.tsx`: Editorial primary (Sal Forest / Tiger Ochre), secondary outline (Bark), and tactile text links.
  - `Badge.tsx`: Hairline border tags for zone status (Open / Closed / Year-Round).
  - `Input.tsx`, `Select.tsx`, `Checkbox.tsx`: High-touch accessible form controls with inline validation states.
  - `HairlineDivider.tsx`: Subdued architectural separation lines.
  - `CustomIcons.tsx`: 1.5px custom SVG vector set.
- **`components/layout/`**:
  - `Navbar.tsx`: Sticky responsive header with subtle backdrop blur and mobile drawer.
  - `Footer.tsx`: Comprehensive footer with mandatory legal disclaimers, UTDB info, and zone navigation.
  - `MobileStickyBar.tsx`: Fixed bottom action strip for mobile screens (WhatsApp, Call, Quick Quote).
  - `AdHeader.tsx`: Distraction-free landing header for `/go/*` routes.
- **`components/modules/`**:
  - `LeadForm.tsx`: 2-step conversion powerhouse with Zod validation, +91 phone formatting, and Turnstile honeypot.
  - `ZoneSeasonFilter.tsx`: Interactive month-by-month zone opener.
  - `SafariCostCalculator.tsx`: Interactive fee calculator strictly fed by `content/fees.ts`.
  - `PackageCard.tsx` & `PackageGrid.tsx`: Editorial itinerary previews.
  - `DhikalaExplainer.tsx`: Honest booking guide and 45-day window roadmap.
  - `SafeSection.tsx`: Wrapper that auto-collapses if underlying data arrays (reviews, team, stays) are empty.
  - `FaqAccordion.tsx`: Accessible FAQ with JSON-LD schema integration.

---

## 5. Lead Pipeline & Server-Side Architecture (`/api/lead`)

```mermaid
flowchart TD
    Client[Client Browser / Mobile Ad] -->|Submit Step 2| Route[/api/lead]
    Route --> Step1[1. Zod Validation & Phone Sanitization]
    Route --> Step2[2. Honeypot & Turnstile Token Check]
    Route --> Step3[3. Generate ID: MCT-2611-XXXX]
    Step3 --> Step4[4. Append to Google Sheets via Service Account]
    Step3 --> Step5[5. Send Resend Email Notification]
    Step3 --> Step6[6. Send Telegram Bot Alert - optional]
    Step3 --> Step7[7. Trigger Meta Conversions API CAPI Event]
    Step4 & Step5 & Step6 & Step7 --> Response[Return JSON: success: true, leadId, whatsappUrl]
```

- **Resilience:** If Google Sheets or Telegram fails due to downstream API errors, the failure is caught and logged, the lead is preserved in fallback storage/logs, and the client still receives a graceful success response with a direct WhatsApp bridge.
- **Data Governance (DPDP Act 2023):** Explicit checkbox for communication consent, phone hashing (SHA-256) before passing to Meta CAPI, and strict data minimization.

---

## 6. Content Data Structures (`/content/*.ts`)

All dynamic data isolated into strictly typed files:
- `content/fees.ts`: Official CTR permit fees, vehicle charges, guide fees, concession amounts, and verification metadata.
- `content/zones.ts`: Deep profiles for all 8 zones + buffer areas (gate, season, flora/fauna, tips, FRHs).
- `content/packages.ts`: 10 comprehensive packages (who it's for, itinerary, inclusions, exclusions, pricing flag).
- `content/rules.ts`: 2026 regulations (phone ban, dual-side ID, timings, cancellation policies).
- `content/config.ts`: Business contact info, registration numbers, callback promise time, social links.
- `content/reviews.ts`: Initialized as empty array `[]` (auto-hidden until owner inserts verified feedback).
- `content/stays.ts`: Initialized as empty array `[]` (auto-hidden until partner hotel contracts are added).
- `content/team.ts`: Initialized as empty array `[]` (auto-hidden until verified owner photos/bios provided).
- `content/journal.ts`: 8 in-depth seed articles with cited sources.

