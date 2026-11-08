import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { packagesData } from "@/content/packages";
import { corbettRules2026 } from "@/content/rules";
import { reviews } from "@/content/reviews";
import { teamMembers } from "@/content/team";
import { partnerStays } from "@/content/stays";
import { officialFees } from "@/content/fees";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { ZoneSeasonFilter } from "@/components/modules/ZoneSeasonFilter";
import { DhikalaExplainer } from "@/components/modules/DhikalaExplainer";
import { PackageCard } from "@/components/modules/PackageCard";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { SafeSection } from "@/components/ui/SafeSection";
import { Badge } from "@/components/ui/Badge";
import {
  IconPugmark,
  IconGypsy,
  IconBinoculars,
  IconRiver,
  IconShieldCheck,
  IconArrowRight,
  IconWhatsApp,
  IconCamera,
  IconPhoneBan,
  IconIdCard,
} from "@/components/ui/CustomIcons";

const HOME_FAQS = [
  {
    question: "Can I book a safari or Dhikala stay for tomorrow?",
    answer:
      "Corbett Tiger Reserve enforces strict same-day online booking cut-offs: 06:30 AM for the morning shift and 04:00 PM for the afternoon shift. Furthermore, high-demand zones like Dhikala and Bijrani typically sell out weeks in advance. For last-minute weekend visits, we often check available slots in Jhirna, Dhela, or outer buffer zones.",
  },
  {
    question: "Are day jeeps allowed inside Dhikala zone?",
    answer:
      "No. Under official CTR regulations, day jeep safaris are strictly prohibited inside Dhikala to protect core wildlife. Day visitors can only access Dhikala via the 16-seater Canter safari. Only visitors with Forest Rest House (FRH) overnight room permits are allowed inside in registered gypsies.",
  },
  {
    question: "What is the new 2026 mobile phone ban inside the reserve?",
    answer:
      "Following Supreme Court directives enforced from 5 February 2026, mobile phones are completely barred during safaris in all CTR core tourism zones. Phones must be left at your lodge or deposited in entry gate lockers. Dedicated digital cameras (DSLR/mirrorless) and binoculars are permitted and encouraged.",
  },
  {
    question: "How does the dual-sided ID verification work at the entry gate?",
    answer:
      "From September 2026, clear front and back scans of government-issued photo ID (Aadhaar, Passport, Voter ID) are required during booking. Gate rangers verify original physical documents before opening the barrier. Any mismatch means entry is denied without refund.",
  },
  {
    question: "How does your pricing work compared to official CTR fees?",
    answer:
      "We practice radical two-column transparency. Government permit fees (₹3,380 Indian / ₹6,680 Foreign), vehicle hire (₹2,700–₹3,000), and guide charges (₹1,000) are paid directly to the reserve and registered operators. We charge a clearly stated concierge planning fee for booking clock coordination, lodge curation, and logistical management.",
  },
  {
    question: "Which railway station and airport are closest to Corbett?",
    answer:
      "Ramnagar Railway Station (RMR) is the main railhead, just 15 minutes from most resorts. Direct trains like the Ranikhet Express run nightly from Old Delhi. The nearest airport is Pantnagar (PGH), approx. 80–85 km (2-hour drive) away.",
  },
  {
    question: "Is Corbett open during the monsoon (July to September)?",
    answer:
      "Yes! While Dhikala, Bijrani, and Garjiya close for habitat regeneration from July to October, Jhirna and Dhela zones remain open year-round (subject to local stream conditions), offering lush green landscapes and fewer crowds.",
  },
  {
    question: "Can children and senior citizens go on safaris?",
    answer:
      "Absolutely. Up to 2 children under 12 can join up to 6 adults in one gypsy. Indian students (12–18 yrs) receive a ₹375 permit discount, and senior citizens (60+) receive a ₹250 permit discount with valid government ID.",
  },
];

export default function HomePage() {
  const signaturePackages = packagesData.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative bg-sal-forest text-cream overflow-hidden border-b border-sal-forest/20">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/homepage tiger banner.png"
              alt="Bengal Tiger in Corbett Tiger Reserve"
              fill
              priority
              className="object-cover object-center brightness-105 contrast-[1.03]"
              sizes="100vw"
            />
            {/* Clear neutral scrim without green tint: softly dims behind text on the left, keeping the photo eye-catchy and vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
            <div className="max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream/10 border border-cream/20 text-cream/90 text-xs font-mono uppercase tracking-[0.2em] mb-6">
                <IconPugmark size={14} className="text-tiger-ochre" />
                <span>Corbett Tiger Reserve Field Specialist</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-[1.12] mb-6">
                The forest opens at dawn. We ensure you are ready.
              </h1>

              <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-2xl">
                Expert-guided jeep and canter safaris, verified Dhikala Forest Rest House permits,
                and handpicked lodge retreats in the Ramnagar–Dhikuli wilderness belt.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
                <a
                  href="#lead-planner"
                  className="py-3.5 px-6 bg-tiger-ochre text-white text-xs sm:text-sm uppercase tracking-wider font-semibold text-center hover:bg-[#b5671f] transition-all shadow-md active:scale-[0.99]"
                >
                  Plan My Corbett Trip
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}?text=Hello%20My%20Corbett%20Trip%2C%20I%20am%20planning%20a%20safari%20and%20would%20like%20zone%20advice.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 bg-transparent border border-cream/30 text-cream text-xs sm:text-sm uppercase tracking-wider font-medium text-center hover:bg-cream/10 transition-all flex items-center justify-center gap-2"
                >
                  <IconWhatsApp size={16} className="text-[#25D366]" />
                  <span>Ask a Local Naturalist</span>
                </a>
              </div>

              {/* Honest Trust Strip: auto-shows only real verified credentials */}
              <div className="pt-6 border-t border-cream/15 flex flex-wrap items-center gap-6 text-xs text-cream/70 font-mono">
                {businessConfig.utdbRegistrationNo && (
                  <div>UTDB Reg: {businessConfig.utdbRegistrationNo}</div>
                )}
                {businessConfig.yearsInBusiness && (
                  <div>{businessConfig.yearsInBusiness} Local Experience</div>
                )}
                <div>Official Permits via corbettgov.org</div>
                <div>Supreme Court 2026 Compliant</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK PLANNER STRIP */}
        <section className="bg-cream border-b border-sal-forest/15 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sal-forest text-cream shrink-0">
                  <IconGypsy size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sal-forest/60 block">
                    Safari Vehicles
                  </span>
                  <span className="text-xs font-semibold text-sal-forest">
                    CTR-Registered 4x4 Gypsies & Canters
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sal-forest text-cream shrink-0">
                  <IconBinoculars size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sal-forest/60 block">
                    Authorised Guides
                  </span>
                  <span className="text-xs font-semibold text-sal-forest">
                    Forest Dept. Certified Naturalists
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sal-forest text-cream shrink-0">
                  <IconRiver size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sal-forest/60 block">
                    Ramnagar–Dhikuli Belt
                  </span>
                  <span className="text-xs font-semibold text-sal-forest">
                    Curated Riverside Lodges
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="#lead-planner"
                  className="w-full py-2.5 px-4 bg-sal-forest text-cream text-xs uppercase tracking-wider font-medium text-center hover:bg-sal-forest/90 transition-all block"
                >
                  Quick Itinerary Matcher →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE ZONE NAVIGATOR ("Which zone for your dates?") */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZoneSeasonFilter />
        </section>

        {/* 4. FOUR SIGNATURE PACKAGES (Editorial Layout) */}
        <section className="py-16 sm:py-20 bg-cream/50 border-y border-sal-forest/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-sal-forest/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                  Signature Expeditions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest">
                  Handcrafted Corbett Itineraries
                </h2>
              </div>
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-sal-forest hover:text-tiger-ochre transition-colors"
              >
                <span>Browse All 10 Packages</span>
                <IconArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {signaturePackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. TRANSPARENT PRICING EXPLAINER: CTR Fees vs Concierge Fee */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream border border-sal-forest/15 p-6 sm:p-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Zero Hidden Charges
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest mb-3">
                How We Price: Transparent Two-Column Billing
              </h2>
              <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
                Most online safari portals disguise permit markups or omit vehicle hiring and guide
                charges until check-in. At My Corbett Trip, we separate official government fees from
                our concierge coordination fee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1: Government Statutory Fees */}
              <div className="bg-white border border-sal-forest/15 p-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sal-forest/70 mb-2">
                  <IconShieldCheck size={16} className="text-sal-forest" />
                  <span>Column 1: What You Pay Official CTR</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-sal-forest mb-4">
                  Official Statutory Charges
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-sal-forest/80">
                  <li className="flex items-start justify-between pb-2 border-b border-sal-forest/10">
                    <span>Day Jeep Safari Permit (Indian):</span>
                    <span className="font-mono font-semibold">₹3,380 / jeep</span>
                  </li>
                  <li className="flex items-start justify-between pb-2 border-b border-sal-forest/10">
                    <span>Day Jeep Safari Permit (Foreign):</span>
                    <span className="font-mono font-semibold">₹6,680 / jeep</span>
                  </li>
                  <li className="flex items-start justify-between pb-2 border-b border-sal-forest/10">
                    <span>Registered 4x4 Gypsy Hiring:</span>
                    <span className="font-mono font-semibold">₹2,700 – ₹3,000</span>
                  </li>
                  <li className="flex items-start justify-between pb-2 border-b border-sal-forest/10">
                    <span>Mandatory Nature Guide Fee:</span>
                    <span className="font-mono font-semibold">₹1,000 / shift</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>Dhikala Canter Seat:</span>
                    <span className="font-mono font-semibold">₹1,500 + 18% GST</span>
                  </li>
                </ul>
                <p className="text-[11px] text-sal-forest/60 font-mono mt-4">
                  {officialFees.disclaimer}
                </p>
              </div>

              {/* Column 2: What You Pay Us */}
              <div className="bg-sal-forest text-cream p-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-tiger-ochre mb-2">
                  <IconPugmark size={16} />
                  <span>Column 2: What You Pay My Corbett Trip</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-cream mb-4">
                  Our Curation & Concierge Fee
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-cream/85">
                  <li className="flex items-start gap-2">
                    <span className="text-tiger-ochre">✓</span>
                    <span>Permit Clock Monitoring: We track the exact second rolling windows open.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tiger-ochre">✓</span>
                    <span>Photo ID Pre-Verification: Dual-side formatting to eliminate gate rejection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tiger-ochre">✓</span>
                    <span>Top-Tier Naturalists: Handpicked guides who know predator territories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tiger-ochre">✓</span>
                    <span>Doorstep Resort Coordination: Gypsies arrive directly at your hotel lobby.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-cream/15">
                  <Link
                    href="/safari-cost"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-tiger-ochre hover:text-white transition-colors"
                  >
                    <span>Use Interactive Cost Calculator</span>
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DHIKALA NIGHT-STAY FEATURE */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DhikalaExplainer />
        </section>

        {/* 7. HANDPICKED STAYS (Honesty rule: SafeSection auto-hides if array empty) */}
        <SafeSection data={partnerStays}>
          {(stays) => (
            <section className="py-16 sm:py-20 bg-cream/50 border-y border-sal-forest/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                    Verified Lodgings
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-sal-forest">
                    Handpicked Stays in Ramnagar & Dhikuli
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stays.map((stay) => (
                    <div key={stay.id} className="bg-white border border-sal-forest/15 p-5">
                      <h3 className="font-serif text-xl font-bold text-sal-forest">{stay.name}</h3>
                      <p className="text-xs text-sal-forest/70">{stay.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </SafeSection>

        {/* 8. THE TEAM (Honesty rule: SafeSection auto-hides until real bios exist) */}
        <SafeSection data={teamMembers}>
          {(members) => (
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                  Local Roots
                </span>
                <h2 className="font-serif text-3xl font-bold text-sal-forest">
                  Meet the Naturalists
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member) => (
                  <div key={member.id} className="bg-cream border border-sal-forest/15 p-5">
                    <h3 className="font-serif text-lg font-bold text-sal-forest">{member.name}</h3>
                    <p className="text-xs text-tiger-ochre">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </SafeSection>

        {/* 9. REVIEWS (Honesty rule: SafeSection auto-hides until real reviews added) */}
        <SafeSection data={reviews}>
          {(reviewList) => (
            <section className="py-16 sm:py-20 bg-cream border-y border-sal-forest/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-bold text-sal-forest">
                    Guest Field Logbook
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviewList.map((rev) => (
                    <div key={rev.id} className="bg-white border border-sal-forest/15 p-5">
                      <p className="text-xs text-sal-forest/80 italic mb-3">&quot;{rev.comment}&quot;</p>
                      <p className="text-xs font-semibold text-sal-forest">{rev.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </SafeSection>

        {/* 10. KNOW BEFORE YOU GO: 2026 Core Rules Strip */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
              Important Directives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest mb-3">
              Know Before You Enter Corbett (2026 Mandates)
            </h2>
            <p className="text-xs sm:text-sm text-sal-forest/80">
              Corbett Tiger Reserve strictly enforces wildlife conservation laws. Here are the 3
              most critical regulations to observe:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rule 1: Mobile Ban */}
            <div className="bg-cream border border-sal-forest/15 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-tiger-ochre/15 text-tiger-ochre flex items-center justify-center mb-4">
                  <IconPhoneBan size={24} />
                </div>
                <Badge variant="ochre" className="mb-2">
                  Supreme Court Directive
                </Badge>
                <h3 className="font-serif text-xl font-bold text-sal-forest mb-2">
                  Zero Mobile Phones Inside
                </h3>
                <p className="text-xs text-sal-forest/80 leading-relaxed">
                  Enforced since 5 Feb 2026. Mobile phones are strictly prohibited in core tourism
                  zones to eliminate noise and reckless selfies. Leave phones at your hotel.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sal-forest/10 flex items-center gap-1.5 text-xs font-mono text-sal-forest/70">
                <IconCamera size={14} className="text-tiger-ochre" />
                <span>Dedicated DSLRs & lenses permitted</span>
              </div>
            </div>

            {/* Rule 2: Dual ID check */}
            <div className="bg-cream border border-sal-forest/15 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-sal-forest/10 text-sal-forest flex items-center justify-center mb-4">
                  <IconIdCard size={24} />
                </div>
                <Badge variant="forest" className="mb-2">
                  Enforced Sep 2026
                </Badge>
                <h3 className="font-serif text-xl font-bold text-sal-forest mb-2">
                  Dual-Sided Photo ID Verification
                </h3>
                <p className="text-xs text-sal-forest/80 leading-relaxed">
                  Front and back scans are uploaded at booking. Original physical IDs must be
                  presented at the gate. Any typo or mismatch results in denied entry.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sal-forest/10 text-xs font-mono text-sal-forest/70">
                Carry original Aadhaar / Passport / Voter ID
              </div>
            </div>

            {/* Rule 3: Zero Plastic */}
            <div className="bg-cream border border-sal-forest/15 p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-mist/40 text-sal-forest flex items-center justify-center mb-4">
                  <IconShieldCheck size={24} />
                </div>
                <Badge variant="mist" className="mb-2">
                  Wildlife Act 1972
                </Badge>
                <h3 className="font-serif text-xl font-bold text-sal-forest mb-2">
                  Zero-Plastic & Forest Sanctions
                </h3>
                <p className="text-xs text-sal-forest/80 leading-relaxed">
                  Corbett is a zero-single-use-plastic zone. ₹500 spot fines for littering or
                  spitting. Stepping down from your gypsy inside the forest is illegal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sal-forest/10 text-xs font-mono text-sal-forest/70">
                Use reusable stainless steel bottles
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/safari-rules"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-sal-forest hover:text-tiger-ochre transition-colors"
            >
              <span>Read Full 2026 Visitor Rules & Penalties</span>
              <IconArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-16 sm:py-20 bg-cream/40 border-y border-sal-forest/15">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FaqAccordion items={HOME_FAQS} />
          </div>
        </section>

        {/* 12. FINAL CTA WITH LEAD FORM */}
        <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
              Start Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sal-forest mb-4">
              Plan Your Corbett Expedition
            </h2>
            <p className="text-xs sm:text-base text-sal-forest/80 max-w-xl mx-auto leading-relaxed">
              Tell us your preferred dates and group size. Our local naturalists will verify
              official CTR gate availability and send a customized itinerary.
            </p>
          </div>

          <LeadForm sourceSlug="homepage-final-cta" />
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
