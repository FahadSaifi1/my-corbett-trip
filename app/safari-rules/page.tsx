import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { corbettRules2026 } from "@/content/rules";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { Badge } from "@/components/ui/Badge";
import {
  TopographicContoursIllustration,
  BotanicalLeafAccent,
  NaturalistExpeditionSeal,
} from "@/components/illustrations/WildlifeIllustrations";

export const metadata: Metadata = {
  title: "Corbett Safari Rules 2026: Mobile Phone Ban, ID Checks & Gate Guidelines",
  description:
    "Official 2026 Jim Corbett visitor regulations: Supreme Court mobile phone ban inside core zones, dual-sided photo ID verification, same-day cut-offs, and spot fines.",
  alternates: {
    canonical: "/safari-rules",
  },
};

export default function SafariRulesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari rules banner.png"
              alt="Corbett Tiger Reserve Safari Rules and Forest Regulations"
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
                Mandatory Guidelines
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Corbett Tiger Reserve Safari Rules (2026)
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Corbett Tiger Reserve is an internationally protected wildlife sanctuary governed by
                strict conservation statutes and Supreme Court directives. Adhering to these rules
                ensures wildlife safety and prevents denied gate entry.
              </p>
            </div>
          </div>
        </section>

        {/* Rules Grid */}
        <section className="relative py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 overflow-hidden">
          <TopographicContoursIllustration color="#1F2A1F" className="opacity-[0.04]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {corbettRules2026.map((rule) => (
              <div
                key={rule.id}
                className="relative bg-cream border border-sal-forest/15 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group hover:border-sal-forest transition-colors"
              >
                <BotanicalLeafAccent
                  size={36}
                  color="#C8782A"
                  className="absolute -top-1 -right-1 opacity-20 group-hover:opacity-40 transition-opacity"
                />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant={rule.id === "phone-ban" ? "ochre" : "forest"}>
                      {rule.category}
                    </Badge>
                    <span className="text-xs font-mono text-sal-forest/60">
                      {rule.effectiveDate}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-sal-forest mb-3">
                    {rule.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sal-forest/85 leading-relaxed mb-4">
                    {rule.fullDetails}
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-sal-forest/15 text-xs text-sal-forest/90">
                  <span className="font-bold text-tiger-ochre uppercase block text-[10px] tracking-wider mb-1">
                    Actionable Naturalist Advice:
                  </span>
                  <span>{rule.actionableTipForGuest}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gate Verification Checklist */}
          <div className="relative z-10 bg-sal-forest text-cream p-6 sm:p-10 space-y-6 overflow-hidden">
            <TopographicContoursIllustration color="#F5F2EA" className="opacity-[0.035]" />
            <NaturalistExpeditionSeal
              size={86}
              variant="ochre"
              className="absolute -top-2 -right-2 opacity-30 hidden sm:block"
            />
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Gate Entry Protocol
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">
                The 3-Point Checklist Before Boarding Your Gypsy
              </h2>
              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed mb-6">
                Avoid gate disappointment. Gate rangers perform strict physical identity and vehicle
                audits before opening the barrier:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-cream/90">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-tiger-ochre text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-cream block">Original Physical Photo IDs in Hand:</strong>
                    Digital screenshots on phones will not work (phones are banned anyway). You must
                    have the exact physical card used during booking.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-tiger-ochre text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-cream block">Phones Left Behind:</strong>
                    Leave all smartphones, smart watches with cellular antennas, and calling devices
                    at your resort or inside gate lockers. Dedicated digital cameras are fully welcome.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-tiger-ochre text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-cream block">No Plastics or Bright Clothing:</strong>
                    Plastic bottles and wrappers carry a ₹500 fine. Wear muted earth tones (olive,
                    khaki, beige, forest green) so you do not alarm animals.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <LeadForm initialInterest="Safari Rules & Planning" sourceSlug="safari-rules-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

