import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { packagesData } from "@/content/packages";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { PackageCard } from "@/components/modules/PackageCard";
import { LeadForm } from "@/components/modules/LeadForm";
import { IconShieldCheck } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Jim Corbett Tour Packages & Wildlife Expeditions",
  description:
    "Curated Corbett tour packages: weekend safaris, Dhikala FRH night stays, luxury riverside retreats, and birding expeditions with certified naturalists.",
  alternates: {
    canonical: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/packages banner.png"
              alt="Corbett Safari Tour Packages"
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
                Handcrafted Itineraries
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Curated Corbett Wildlife Expeditions
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Whether you seek a weekend break from Delhi, an overnight stay inside the deep core
                at Dhikala, or an intensive photographic tracking series, our itineraries pair
                official CTR permits with verified lodges and passionate local naturalists.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          {/* Statutory Pricing Notice */}
          <div className="bg-cream border border-sal-forest/15 p-6 mb-16 flex items-start gap-3.5">
            <IconShieldCheck size={22} className="text-tiger-ochre shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
              <strong className="text-sal-forest font-semibold block mb-0.5">
                Statutory Permit Inclusion Transparency:
              </strong>
              All safari permits in our packages are processed via the official Corbett Tiger Reserve
              portal (corbettgov.org) in the traveller&apos;s name and are subject to CTR quota
              availability and gate identification verification.
            </div>
          </div>

          {/* Custom Lead Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Bespoke Planning
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest">
                Need a Customised Corbett Plan?
              </h2>
              <p className="text-xs sm:text-sm text-sal-forest/70 mt-1">
                Tell us your group size and dates. We will curate the ideal combination of zones and lodges.
              </p>
            </div>
            <LeadForm sourceSlug="packages-hub" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

