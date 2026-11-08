import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { officialFees } from "@/content/fees";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { SafariCostCalculator } from "@/components/modules/SafariCostCalculator";
import {
  IconGypsy,
  IconShieldCheck,
  IconIdCard,
  IconPhoneBan,
} from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Jim Corbett Jeep Safari Booking, Price & Zones (2026)",
  description:
    "Official Jim Corbett jeep safari coordination: Bijrani, Jhirna, Dhela, Garjiya, and Durga Devi. Transparent fee breakdown, Gypsy vehicle hire, and gate timings.",
  alternates: {
    canonical: "/jeep-safari",
  },
};

const JEEP_FAQS = [
  {
    question: "How many people can sit in one safari jeep?",
    answer:
      "A standard registered Maruti Suzuki Gypsy accommodates up to 6 adults and up to 2 children below 12 years of age, in addition to the mandatory driver and Forest Department certified guide.",
  },
  {
    question: "Can I choose which zone my jeep goes to?",
    answer:
      "Yes, provided permits are available for that zone. Permits are zone-specific and cannot be modified after booking on the official CTR portal. Popular zones like Bijrani and Garjiya sell out weeks ahead.",
  },
  {
    question: "What are the safari shift timings?",
    answer:
      "Safaris operate in two daily shifts: Morning (approx. 06:00 AM to 10:00 AM) and Afternoon (approx. 01:30 PM to 05:30 PM in winter; 02:30 PM to 06:30 PM in summer). Gate timings change with seasonal daylight.",
  },
  {
    question: "Can private vehicles enter Corbett Tiger Reserve?",
    answer:
      "No. Private personal cars, bikes, and non-registered vehicles are strictly prohibited inside the tiger reserve. Only CTR-registered gypsies with authorized commercial permits are allowed through the gates.",
  },
];

export default function JeepSafariPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/jeep safari banner.png"
              alt="Registered 4x4 Gypsy Safari in Corbett Tiger Reserve"
              fill
              priority
              className="object-cover object-center brightness-105 contrast-[1.03]"
              sizes="100vw"
            />
            {/* Clear neutral scrim without green tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
                4x4 Open Wilderness Drives
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Jim Corbett Jeep Safari Expeditions
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                The classic, intimate way to explore Corbett Tiger Reserve. Open 4x4 Gypsies navigate
                dense sal woods, riverbeds, and open grasslands with an authorized nature guide and
                experienced tracking driver.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Calculator */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-sal-forest/10 text-sal-forest flex items-center justify-center mb-3">
                <IconGypsy size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                Max 6 Adults + 2 Kids
              </h3>
              <p className="text-xs text-sal-forest/80 leading-relaxed">
                Each gypsy is private to your party. Never shared with strangers. Doorstep pickup
                from your resort in Ramnagar or Dhikuli.
              </p>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-tiger-ochre/15 text-tiger-ochre flex items-center justify-center mb-3">
                <IconPhoneBan size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                Mobile Phone Ban (2026)
              </h3>
              <p className="text-xs text-sal-forest/80 leading-relaxed">
                Enforced by Supreme Court order. Mobile phones must stay in your room or gate locker.
                DSLR and mirrorless cameras are fully permitted.
              </p>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-mist/40 text-sal-forest flex items-center justify-center mb-3">
                <IconIdCard size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                Mandatory Dual-Sided ID
              </h3>
              <p className="text-xs text-sal-forest/80 leading-relaxed">
                Front and back photo ID scans verified at the gate. Original physical IDs required
                for all travellers before entering.
              </p>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div>
            <SafariCostCalculator />
          </div>

          {/* Mandatory Transparency Notice */}
          <div className="bg-cream border border-sal-forest/15 p-6">
            <div className="flex items-start gap-3">
              <IconShieldCheck size={24} className="text-tiger-ochre shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-sal-forest mb-1">
                  Private Company Disclaimer & Official CTR Permit Notice
                </h4>
                <p className="text-xs text-sal-forest/80 leading-relaxed">
                  {businessConfig.officialPermitDisclaimer}
                </p>
                <p className="text-[11px] font-mono text-sal-forest/60 mt-1">
                  {officialFees.disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={JEEP_FAQS} title="Jeep Safari Frequently Asked Questions" />
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Book Safaris
              </span>
              <h2 className="font-serif text-3xl font-bold text-sal-forest">
                Reserve Your Jeep Safari Shift
              </h2>
            </div>
            <LeadForm initialInterest="Safari Only" sourceSlug="jeep-safari-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar packageName="Jeep Safari" />
    </div>
  );
}

