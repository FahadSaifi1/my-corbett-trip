import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { Badge } from "@/components/ui/Badge";
import { IconPugmark, IconShieldCheck, IconBinoculars, IconSalLeaf } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "About Us | My Corbett Trip — Naturalist Philosophy & Ethics",
  description:
    "Learn about My Corbett Trip: an independent private travel company founded on radical pricing transparency, local naturalist knowledge, and ethical wildlife conservation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
                Our Foundation & Ethics
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Naturalist Roots. Uncompromising Honesty.
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                My Corbett Trip was founded to fix the broken, opaque world of online Corbett
                bookings. We reject deceptive official government impersonation, fake countdown
                timers, and hidden gate fees.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative & Pillars */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base text-sal-forest/85 leading-relaxed">
            <p>
              Most travellers visiting Jim Corbett National Park arrive via high-pressure ads,
              landing on websites intentionally styled to look like government departments. They are
              quoted ambiguous rates only to find unexpected vehicle, gate, and guide fees demanded
              in cash upon arrival.
            </p>
            <p>
              We built <strong>My Corbett Trip</strong> as an independent, private travel company
              grounded in two non-negotiable principles: <em>absolute pricing transparency</em> and{" "}
              <em>deep ecological respect</em>.
            </p>
            <p>
              We do not guarantee tiger sightings; no honest naturalist ever does. What we do
              guarantee is authentic permit processing directly via the official CTR portal
              (corbettgov.org), certified Forest Department guides who understand predator
              territories, registered 4x4 Gypsies in prime mechanical condition, and handpicked
              lodges along the Kosi river.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-sal-forest/10 text-sal-forest flex items-center justify-center mb-3">
                <IconShieldCheck size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                1. Independent & Clear
              </h3>
              <p className="text-xs text-sal-forest/75 leading-relaxed">
                We clearly state we are a private company. Permits are issued in your name via
                corbettgov.org. Zero misleading emblems.
              </p>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-tiger-ochre/15 text-tiger-ochre flex items-center justify-center mb-3">
                <IconPugmark size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                2. Two-Column Billing
              </h3>
              <p className="text-xs text-sal-forest/75 leading-relaxed">
                We clearly separate statutory government permit & vehicle charges from our planning
                concierge fee. Zero hidden gate surcharges.
              </p>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-sal-forest/10 text-sal-forest flex items-center justify-center mb-3">
                <IconBinoculars size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                3. Expert Naturalists
              </h3>
              <p className="text-xs text-sal-forest/75 leading-relaxed">
                Our guides are certified local naturalists who respect silence, track alarm calls,
                and educate travellers on birds and flora.
              </p>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-6">
              <div className="w-10 h-10 bg-mist/40 text-sal-forest flex items-center justify-center mb-3">
                <IconSalLeaf size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                4. Strict Conservation
              </h3>
              <p className="text-xs text-sal-forest/75 leading-relaxed">
                We strictly enforce zero-plastic protocols and adhere fully to the Supreme Court 2026
                mobile phone ban inside core zones.
              </p>
            </div>
          </div>

          {/* Statutory Disclaimer Box */}
          <div className="bg-sal-forest/5 border border-sal-forest/15 p-6 text-xs text-sal-forest/80 leading-relaxed">
            <h4 className="font-semibold text-sal-forest mb-1">Mandatory Disclosure:</h4>
            <p>{businessConfig.officialPermitDisclaimer}</p>
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <LeadForm initialInterest="Custom Expedition" sourceSlug="about-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

