import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/content/config";
import { officialFees } from "@/content/fees";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import {
  IconShieldCheck,
  IconCalendar,
  IconGypsy,
  IconCompass,
  IconArrowRight,
} from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Dhikala Forest Rest House Booking, Tariff & Rules (2026)",
  description:
    "Official guide to booking an overnight stay at Dhikala Forest Lodge inside Corbett Tiger Reserve. 45-day advance window, room tariff, gypsy costs, and forest rules.",
  alternates: {
    canonical: "/dhikala-night-stay",
  },
};

const DHIKALA_FAQS = [
  {
    question: "When does the Dhikala Forest Rest House booking window open?",
    answer:
      "For Indian citizens, bookings open on a rolling schedule exactly 45 days in advance at 10:00 AM IST on the official Corbett Tiger Reserve website (corbettgov.org). For foreign nationals, bookings open 90 days in advance. Permits sell out within seconds due to limited room inventory.",
  },
  {
    question: "How much does a night stay at Dhikala FRH cost officially?",
    answer:
      "Official CTR tariff: Room fee is ₹3,500 to ₹5,050 per night for Indian nationals (covers 2 adults) and ₹10,450 for foreign nationals. In addition, hiring a mandatory CTR-registered Gypsy + driver stationed inside with you costs ₹7,250 (Dhikala) or ₹7,750 (Sarpduli), plus ₹1,000 per safari shift for the certified guide.",
  },
  {
    question: "What are the rules regarding food and alcohol at Dhikala?",
    answer:
      "Only vegetarian food is served at the official rest house canteen. Alcohol, tobacco, smoking, firecrackers, and loud music are strictly prohibited throughout all Forest Rest Houses. Zero vehicle movement is permitted after sunset.",
  },
  {
    question: "Is electricity available 24/7 inside Dhikala?",
    answer:
      "No. Dhikala operates on eco-friendly solar generators. Electricity is available for limited evening hours (typically 6:00 PM to 10:00 PM) for charging camera batteries and room lighting.",
  },
];

export default function DhikalaNightStayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="ochre">Inside Core Reserve</Badge>
                <Badge variant="mist">British-Era Lodge (Built 1890)</Badge>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Dhikala Forest Rest House Night Stay
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Sleep inside the deepest wilderness of Corbett Tiger Reserve. Wake up to wild
                elephants on the Dhikala Chaur grasslands and enjoy exclusive dawn & dusk game drives
                with a dedicated gypsy before day visitors arrive.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Roadmap */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 45-Day Advance Booking Window Roadmap */}
          <div className="bg-cream border border-sal-forest/15 p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
              The 45-Day Booking Window
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest mb-4">
              How to Secure an Overnight Permit
            </h2>
            <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-8 max-w-3xl">
              With fewer than 30 guest rooms in the entire complex, Dhikala permits are the most
              coveted wilderness tickets in India. We do not invent fake scarcity; here is the
              factual reality of how the government booking calendar operates:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-sal-forest/15 p-5">
                <span className="text-xs font-mono font-bold text-tiger-ochre uppercase block mb-1">
                  Phase 1 (Day T-50)
                </span>
                <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                  Document Pre-Validation
                </h3>
                <p className="text-xs text-sal-forest/75 leading-relaxed">
                  Submit clear front & back scans of government photo ID (Aadhaar/Passport) and party
                  details to our concierge team.
                </p>
              </div>

              <div className="bg-white border border-sal-forest/15 p-5 border-t-4 border-t-tiger-ochre">
                <span className="text-xs font-mono font-bold text-tiger-ochre uppercase block mb-1">
                  Phase 2 (Day T-45 @ 10:00 AM)
                </span>
                <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                  Official Slot Release
                </h3>
                <p className="text-xs text-sal-forest/75 leading-relaxed">
                  CTR opens room permits at exactly 10:00 AM IST for Indian nationals (90 days for
                  foreigners). Our desk coordinates immediate checkout.
                </p>
              </div>

              <div className="bg-white border border-sal-forest/15 p-5">
                <span className="text-xs font-mono font-bold text-tiger-ochre uppercase block mb-1">
                  Phase 3 (Post-Confirmation)
                </span>
                <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                  Vehicle & Guide Assignment
                </h3>
                <p className="text-xs text-sal-forest/75 leading-relaxed">
                  We assign a top-rated CTR-registered Gypsy, experienced tracking driver, and
                  licensed naturalist to accompany you inside.
                </p>
              </div>
            </div>
          </div>

          {/* Rest House Compounds */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Accommodation Options
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest">
                Forest Rest Houses in the Dhikala Sector
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-sal-forest/15 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-sal-forest">Dhikala FRH (Main Campus)</h3>
                  <Badge variant="forest">Built 1890</Badge>
                </div>
                <p className="text-xs text-sal-forest/80 leading-relaxed mb-3">
                  The primary complex overlooking the Ramganga river. Features historic old forest
                  rest house suites, new forest rest house blocks, and cabins. Houses the canteen,
                  library, and evening wildlife film auditorium.
                </p>
                <div className="text-xs font-mono text-sal-forest/70">
                  Gypsy inside FRH: ₹7,250 | Room: ₹3,500–₹5,050 / night
                </div>
              </div>

              <div className="bg-white border border-sal-forest/15 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-sal-forest">Sarpduli FRH</h3>
                  <Badge variant="mist">Quiet Riverfront</Badge>
                </div>
                <p className="text-xs text-sal-forest/80 leading-relaxed mb-3">
                  Located 11 km before Dhikala on the banks of the Ramganga. A smaller, extremely
                  peaceful 2-room British bungalow where crocodiles and birds are frequently seen right
                  from the verandah.
                </p>
                <div className="text-xs font-mono text-sal-forest/70">
                  Gypsy inside FRH: ₹7,750 | Ideal for solitude seekers
                </div>
              </div>

              <div className="bg-white border border-sal-forest/15 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-sal-forest">Gairal FRH</h3>
                  <Badge variant="mist">Deep River Valley</Badge>
                </div>
                <p className="text-xs text-sal-forest/80 leading-relaxed mb-3">
                  Set on the banks of the clear Ramganga river, surrounded by dense sal forest.
                  Features solar electric fencing and a dedicated small dining mess.
                </p>
                <div className="text-xs font-mono text-sal-forest/70">
                  Gypsy inside FRH: ~₹6,500 | Excellent mahseer & otter sightings
                </div>
              </div>

              <div className="bg-white border border-sal-forest/15 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-sal-forest">Sultan FRH</h3>
                  <Badge variant="mist">First Gate Stop</Badge>
                </div>
                <p className="text-xs text-sal-forest/80 leading-relaxed mb-3">
                  The first rest house after entering Dhangarhi gate. Set in deep sal woods along the
                  Sultan sot. Very quiet; guests must arrange rations with the cook.
                </p>
                <div className="text-xs font-mono text-sal-forest/70">
                  Rustic wilderness experience | Limited electricity
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Transparency Notice */}
          <div className="bg-cream border border-sal-forest/15 p-6 flex items-start gap-3.5">
            <IconShieldCheck size={24} className="text-tiger-ochre shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
              <p className="mb-1 font-semibold text-sal-forest">
                Private Travel Agency Disclaimer:
              </p>
              <p>{businessConfig.officialPermitDisclaimer}</p>
              <p className="text-[11px] font-mono text-sal-forest/60 mt-1">
                {officialFees.disclaimer}
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={DHIKALA_FAQS} title="Dhikala Night Stay FAQs" />
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Enquire for 45-Day Window
              </span>
              <h2 className="font-serif text-3xl font-bold text-sal-forest">
                Start Your Dhikala Booking Planning
              </h2>
            </div>
            <LeadForm initialInterest="Dhikala FRH Night Stay" sourceSlug="dhikala-night-stay-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar packageName="Dhikala Night Stay" />
    </div>
  );
}

