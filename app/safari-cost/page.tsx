import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { officialFees } from "@/content/fees";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SafariCostCalculator } from "@/components/modules/SafariCostCalculator";
import { LeadForm } from "@/components/modules/LeadForm";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { IconShieldCheck } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Jim Corbett Safari Cost & Official Permit Prices (2026–27)",
  description:
    "100% transparent fee breakdown of Jim Corbett safari permits, Gypsy hiring, guide charges, and Dhikala night stays. Interactive calculator based on official CTR pricing.",
  alternates: {
    canonical: "/safari-cost",
  },
};

const COST_FAQS = [
  {
    question: "Why do different zones have different vehicle charges?",
    answer:
      "Registered gypsy rates are fixed by the local Gypsy Drivers Association and CTR administration based on track distance and terrain roughness. Bijrani is ₹2,700; Dhela, Jhirna, Garjiya, and Durga Devi are ₹3,000; Pakhro is ₹2,800; and Sonanadi ranges between ₹2,800 and ₹4,500.",
  },
  {
    question: "Are senior citizen and student discounts available?",
    answer:
      "Yes. Indian senior citizens (60+) receive a ₹250 concession on their permit with valid government ID. Indian students aged 12 to 18 receive a ₹375 concession with valid school or college ID.",
  },
  {
    question: "What happens if there is one foreign national in our jeep?",
    answer:
      "Under official Corbett Tiger Reserve rules, if any traveller on the permit is a foreign national, the entire permit is charged at the foreign national rate (₹6,680 instead of ₹3,380). OCI and SAARC nationals pay standard Indian national rates.",
  },
];

export default function SafariCostPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari cost baner.png"
              alt="Jim Corbett Safari Cost Calculator and Official Permit Pricing"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sal-forest/95 via-sal-forest/85 to-sal-forest/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-sal-forest/90 via-transparent to-black/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
                Honest Safari Economics
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Jim Corbett Safari Cost Breakdown (2026–27)
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                We believe travellers deserve exact mathematical clarity. Below is the complete,
                unfiltered fee schedule published by Corbett Tiger Reserve, paired with our
                interactive fee calculator.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Statutory Verification Box */}
          <div className="bg-cream border border-sal-forest/15 p-6 flex items-start gap-3.5">
            <IconShieldCheck size={24} className="text-tiger-ochre shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
              <p className="font-semibold text-sal-forest mb-1">
                Official CTR Fee Verification Status:
              </p>
              <p>{officialFees.disclaimer}</p>
              <p className="mt-1">{businessConfig.officialPermitDisclaimer}</p>
            </div>
          </div>

          {/* Interactive Calculator */}
          <SafariCostCalculator />

          {/* Transparent Two-Column Ledger Explainer */}
          <div className="bg-white border border-sal-forest/15 p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-sal-forest">
              Understanding the Two Components of Your Trip Cost
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 text-xs sm:text-sm text-sal-forest/80">
                <h3 className="font-serif text-lg font-bold text-sal-forest">
                  1. Statutory Government & Operator Fees
                </h3>
                <p>
                  These are non-negotiable statutory fees set by the Government of Uttarakhand and
                  the Corbett Tiger Reserve:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Government Entry Permit: ₹3,380 (Indian) / ₹6,680 (Foreign).</li>
                  <li>Registered 4x4 Gypsy: ₹2,700 to ₹3,000 depending on zone.</li>
                  <li>Mandatory Forest Guide: ₹1,000 per safari shift.</li>
                  <li>Dhikala Canter Seat: ₹1,500 + 18% GST (Indian) / ₹3,000 + 18% GST (Foreign).</li>
                </ul>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-sal-forest/80">
                <h3 className="font-serif text-lg font-bold text-sal-forest">
                  2. My Corbett Trip Concierge & Curation
                </h3>
                <p>
                  What we charge covers the specialized operational logistics that make your trip
                  flawless:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Monitoring government slot release clocks at 10:00 AM IST.</li>
                  <li>Pre-formatting front & back ID documents to eliminate gate rejection.</li>
                  <li>Assigning verified, experienced nature guides and careful drivers.</li>
                  <li>Coordinating seamless hotel pickup and return in Ramnagar/Dhikuli.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={COST_FAQS} title="Safari Cost & Billing FAQs" />
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <LeadForm initialInterest="Safari Cost Inquiry" sourceSlug="safari-cost-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

