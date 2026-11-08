import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { safariZones } from "@/content/zones";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ZoneSeasonFilter } from "@/components/modules/ZoneSeasonFilter";
import { Badge } from "@/components/ui/Badge";
import { IconShieldCheck, IconArrowRight, IconPugmark } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Corbett Safari Zones Guide: All 8 CTR Tourism Zones Compared",
  description:
    "Explore all 8 Corbett Tiger Reserve ecotourism zones: Dhikala, Bijrani, Jhirna, Dhela, Garjiya, Durga Devi, Sonanadi, and Pakhro. Gate timings, vehicle quotas, and fees.",
  alternates: {
    canonical: "/safari-zones",
  },
};

export default function SafariZonesHubPage() {
  const ctrZones = safariZones.filter((z) => z.isInsideCTR);
  const bufferZones = safariZones.filter((z) => !z.isInsideCTR);

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari zones banner.png"
              alt="Corbett Tiger Reserve Tourism Zones Map and Wilderness"
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
                Ecotourism Geography
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Corbett Tiger Reserve: The 8 Tourism Zones
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Spanning 1,288.31 square kilometers, Corbett Tiger Reserve is structured into 8
                carefully regulated tourism zones to minimize human impact while providing
                world-class wildlife encounters. Each zone offers distinct topography, gates, and
                seasonal calendars.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Month-by-Month Filter */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZoneSeasonFilter />
        </section>

        {/* Complete Zone Directory */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
              Official Tourism Zones
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest">
              Corbett Tiger Reserve Core & Buffer Sectors
            </h2>
          </div>

          <div className="space-y-6">
            {ctrZones.map((zone) => (
              <div
                key={zone.slug}
                className="bg-cream border border-sal-forest/15 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-sal-forest transition-colors"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-sal-forest">
                      {zone.name}
                    </h3>
                    <Badge variant={zone.isOpenYearRound ? "mist" : "forest"}>
                      {zone.season}
                    </Badge>
                    <span className="text-xs font-mono text-sal-forest/70">
                      Gate: {zone.gate}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-3">
                    {zone.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-sal-forest/70">
                    <div>
                      <strong className="text-sal-forest">Best For:</strong> {zone.bestFor}
                    </div>
                    <div>
                      <strong className="text-sal-forest">Safari:</strong> {zone.safariTypes.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto">
                  <Link
                    href={`/safari-zones/${zone.slug}`}
                    className="py-2.5 px-5 bg-sal-forest text-cream text-xs uppercase tracking-wider font-medium text-center hover:bg-sal-forest/90 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Read Zone Guide</span>
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Buffer & Adjacent Areas Section */}
          <div className="mt-16 pt-12 border-t border-sal-forest/15">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Territorial Forest Divisions
              </span>
              <h3 className="font-serif text-2xl font-bold text-sal-forest">
                Beyond the Reserve (Sitabani, Kota & Phato)
              </h3>
              <p className="text-xs sm:text-sm text-sal-forest/70 mt-1 max-w-2xl">
                These beautiful forest divisions lie outside Corbett Tiger Reserve jurisdiction. We
                label them transparently so travellers know exactly which division issues their
                permits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bufferZones.map((zone) => (
                <div key={zone.slug} className="bg-white border border-sal-forest/15 p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif text-xl font-bold text-sal-forest">{zone.name}</h4>
                    <Badge variant="outline">Outside CTR</Badge>
                  </div>
                  <p className="text-xs text-sal-forest/80 leading-relaxed mb-4">
                    {zone.description}
                  </p>
                  <Link
                    href={`/safari-zones/${zone.slug}`}
                    className="text-xs font-semibold text-tiger-ochre hover:text-sal-forest transition-colors inline-flex items-center gap-1"
                  >
                    <span>Explore Outside Zones</span>
                    <IconArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

