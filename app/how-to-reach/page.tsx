import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { Badge } from "@/components/ui/Badge";
import { IconCompass, IconArrowRight, IconShieldCheck } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "How to Reach Jim Corbett from Delhi: Road, Train & Flight Guide",
  description:
    "Complete transit guide to Jim Corbett (Ramnagar): Delhi to Corbett road route via NH9 (5.5 hrs), Ranikhet Express train timings, and Pantnagar airport cab distances.",
  alternates: {
    canonical: "/how-to-reach",
  },
};

export default function HowToReachPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari zones banner.png"
              alt="How to Reach Jim Corbett National Park Routes"
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
                Transit & Route Logistics
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                How to Reach Jim Corbett National Park
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Ramnagar is the primary gateway town for most Corbett Tiger Reserve zones. Situated
                approximately 245 to 260 km east of New Delhi, Ramnagar is well connected by smooth
                national highways, direct overnight trains, and regional flights.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Travel Modes */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* By Road */}
            <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-tiger-ochre block mb-1">
                  Most Popular
                </span>
                <h3 className="font-serif text-2xl font-bold text-sal-forest mb-3">
                  By Road from Delhi
                </h3>
                <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
                  <strong>Route:</strong> Delhi → Ghazipur border → Hapur bypass → Garhmukteshwar
                  (Ganga bridge) → Moradabad bypass → Exit towards Kashipur → Ramnagar (NH 9).
                </p>
                <div className="p-3 bg-white border border-sal-forest/10 text-xs font-mono text-sal-forest space-y-1">
                  <div>Distance: ~245–260 km</div>
                  <div>Travel Time: ~5.5 to 6.5 hours</div>
                  <div>Tolls: 4 automated FASTag toll plazas</div>
                </div>
              </div>
              <p className="text-xs text-sal-forest/70 mt-4 pt-3 border-t border-sal-forest/10">
                Tip: Leave Delhi by 5:30 AM to bypass traffic at the Ghazipur border and Moradabad.
              </p>
            </div>

            {/* By Train */}
            <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-tiger-ochre block mb-1">
                  Comfortable & Overnight
                </span>
                <h3 className="font-serif text-2xl font-bold text-sal-forest mb-3">
                  By Train to Ramnagar (RMR)
                </h3>
                <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
                  <strong>Ranikhet Express (#15013):</strong> Departs Old Delhi (DLI) around 10:00 PM
                  and arrives at Ramnagar Railway Station at 4:50 AM next morning. Sleep in comfort
                  and reach in time for morning hotel check-in.
                </p>
                <div className="p-3 bg-white border border-sal-forest/10 text-xs font-mono text-sal-forest space-y-1">
                  <div>Station: Ramnagar (Code: RMR)</div>
                  <div>Corbett Park Link Express (#25014)</div>
                  <div>Resort transfer: 10–20 mins by cab</div>
                </div>
              </div>
              <p className="text-xs text-sal-forest/70 mt-4 pt-3 border-t border-sal-forest/10">
                Tip: Book 1AC/2AC train tickets early on IRCTC during peak holiday seasons.
              </p>
            </div>

            {/* By Air */}
            <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-tiger-ochre block mb-1">
                  Nearest Airports
                </span>
                <h3 className="font-serif text-2xl font-bold text-sal-forest mb-3">
                  By Commercial Flight
                </h3>
                <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
                  <strong>Pantnagar Airport (PGH):</strong> Approx. 80–85 km from Ramnagar (~2 hrs
                  via NH309). Regular flights connect from Delhi.
                </p>
                <div className="p-3 bg-white border border-sal-forest/10 text-xs font-mono text-sal-forest space-y-1">
                  <div>Alternative: Dehradun (DED) ~110 km to Kotdwar / Pakhro gates</div>
                  <div>IGI Airport Delhi (DEL) ~265 km</div>
                </div>
              </div>
              <p className="text-xs text-sal-forest/70 mt-4 pt-3 border-t border-sal-forest/10">
                Pre-book taxi pickup from Pantnagar Airport directly to your Dhikuli lodge.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <LeadForm initialInterest="Travel Route & Safari" sourceSlug="how-to-reach-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

