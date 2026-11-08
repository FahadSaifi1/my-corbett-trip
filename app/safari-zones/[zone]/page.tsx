import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { safariZones } from "@/content/zones";
import { packagesData } from "@/content/packages";
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
  IconCompass,
} from "@/components/ui/CustomIcons";

export async function generateStaticParams() {
  return safariZones.map((zone) => ({
    zone: zone.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zone: string }>;
}): Promise<Metadata> {
  const { zone: zoneSlug } = await params;
  const zone = safariZones.find((z) => z.slug === zoneSlug);
  if (!zone) return { title: "Zone Not Found" };

  return {
    title: `${zone.name} Safari Booking, Gates & Timings | Jim Corbett`,
    description: `Complete guide to ${zone.name} in Jim Corbett: gate info (${zone.gate}), season (${zone.season}), safari fees, key wildlife, and permit booking rules.`,
    alternates: {
      canonical: `/safari-zones/${zone.slug}`,
    },
    openGraph: {
      title: `${zone.name} Guide | My Corbett Trip`,
      description: zone.description,
      url: `/safari-zones/${zone.slug}`,
    },
  };
}

export default async function ZoneDetailPage({
  params,
}: {
  params: Promise<{ zone: string }>;
}) {
  const { zone: zoneSlug } = await params;
  const zone = safariZones.find((z) => z.slug === zoneSlug);

  if (!zone) {
    notFound();
  }

  // Filter packages relevant to this zone
  const relevantPackages = packagesData.filter((pkg) =>
    pkg.zonesUsed.some((zu) => zone.name.toLowerCase().includes(zu.toLowerCase()))
  );

  // Structured Data JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: `${zone.name} - Corbett Tiger Reserve`,
    description: zone.description,
    isAccessibleForFree: false,
    publicAccess: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: zone.baseTown,
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* Zone Hero */}
        <section className="relative bg-sal-forest text-cream py-12 sm:py-16 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src={
                zone.slug === "dhikala"
                  ? "/Assets/dhikala night stay banner.png"
                  : "/Assets/safari zones banner.png"
              }
              alt={`${zone.name} Safari Zone - Corbett Tiger Reserve`}
              fill
              priority
              className="object-cover object-center brightness-105 contrast-[1.03]"
              sizes="100vw"
            />
            {/* Clear neutral scrim without green tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <nav className="flex items-center gap-2 text-xs font-mono text-cream/60 mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-cream">Home</Link>
              <span>/</span>
              <Link href="/safari-zones" className="hover:text-cream">Safari Zones</Link>
              <span>/</span>
              <span className="text-tiger-ochre">{zone.name}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <Badge variant={zone.isInsideCTR ? "forest" : "outline"}>
                  {zone.isInsideCTR ? "Corbett Tiger Reserve" : "Territorial Division (Outside CTR)"}
                </Badge>
                <Badge variant={zone.isOpenYearRound ? "mist" : "ochre"}>
                  {zone.season}
                </Badge>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                {zone.name} Safari Guide
              </h1>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                {zone.description}
              </p>
            </div>
          </div>
        </section>

        {/* Zone Specifications Ribbon */}
        <section className="bg-cream border-b border-sal-forest/15 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-sal-forest/60 block uppercase tracking-wider text-[10px]">
                  Entry Gate
                </span>
                <span className="font-bold text-sal-forest">{zone.gate}</span>
              </div>
              <div>
                <span className="text-sal-forest/60 block uppercase tracking-wider text-[10px]">
                  Base Town & Distance
                </span>
                <span className="font-bold text-sal-forest">{zone.baseTown} ({zone.distanceFromRamnagar.split("(")[0]})</span>
              </div>
              <div>
                <span className="text-sal-forest/60 block uppercase tracking-wider text-[10px]">
                  Shift Vehicle Limit
                </span>
                <span className="font-bold text-sal-forest">{zone.entryLimitPerShift.split("(")[0]}</span>
              </div>
              <div>
                <span className="text-sal-forest/60 block uppercase tracking-wider text-[10px]">
                  Safari Modality
                </span>
                <span className="font-bold text-sal-forest">{zone.safariTypes.join(" / ")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Form */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Comprehensive Field Guide Text */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block">
                  Field Guide & Terrain Analysis
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest">
                  Landscape, Wildlife & Naturalist Character
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-sal-forest/85 leading-relaxed">
                  {zone.detailedGuide.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Terrain & Key Wildlife Callout */}
              <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-sal-forest mb-1">
                    Terrain & Flora
                  </h3>
                  <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
                    {zone.terrain}
                  </p>
                </div>

                <div className="pt-4 border-t border-sal-forest/10">
                  <h3 className="font-serif text-lg font-bold text-sal-forest mb-2">
                    Highlight Wildlife Species
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {zone.keyWildlife.map((animal, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-sal-forest/15 text-xs text-sal-forest font-medium"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rest Houses & Accommodation */}
              {zone.forestRestHouses.length > 0 && (
                <div className="bg-white border border-sal-forest/15 p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-tiger-ochre uppercase tracking-wider mb-2">
                    <IconCompass size={16} />
                    <span>Inside Zone Accommodation</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-sal-forest mb-3">
                    Forest Rest Houses (FRH) in {zone.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
                    Permits for overnight rest houses are issued by CTR via corbettgov.org (rolling 45-day window for Indians; 90 days for foreign visitors).
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sal-forest font-medium">
                    {zone.forestRestHouses.map((frh, i) => (
                      <li key={i} className="flex items-center gap-2 p-2 bg-cream/60 border border-sal-forest/10">
                        <span className="text-tiger-ochre">🏡</span>
                        <span>{frh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practical Tips */}
              <div>
                <h3 className="font-serif text-xl font-bold text-sal-forest mb-3">
                  Practical Field Tips for {zone.name}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-sal-forest/80">
                  {zone.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-tiger-ochre font-bold shrink-0 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Statutory Fee Table */}
              <div className="bg-white border border-sal-forest/15 p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 font-serif text-lg font-bold text-sal-forest">
                  <IconShieldCheck size={18} className="text-tiger-ochre" />
                  <span>Official Statutory Fees for {zone.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 bg-cream/70 border border-sal-forest/10">
                    <span className="text-sal-forest/60 block text-[10px] uppercase">CTR Permit</span>
                    <span className="font-bold text-sal-forest">₹3,380 Indian / ₹6,680 Foreign</span>
                  </div>
                  <div className="p-3 bg-cream/70 border border-sal-forest/10">
                    <span className="text-sal-forest/60 block text-[10px] uppercase">Registered Gypsy</span>
                    <span className="font-bold text-sal-forest">
                      ₹{officialFees.dayJeep.vehicleChargesByZone[zone.slug]?.typical || 3000} / shift
                    </span>
                  </div>
                  <div className="p-3 bg-cream/70 border border-sal-forest/10">
                    <span className="text-sal-forest/60 block text-[10px] uppercase">Mandatory Guide</span>
                    <span className="font-bold text-sal-forest">₹1,000 / shift</span>
                  </div>
                </div>
                <p className="text-[11px] font-mono text-sal-forest/60">
                  {officialFees.disclaimer}
                </p>
              </div>

              {/* Mandatory Disclaimer */}
              <div className="bg-sal-forest/5 border border-sal-forest/15 p-4 text-xs text-sal-forest/80 leading-relaxed">
                {businessConfig.officialPermitDisclaimer}
              </div>

              {/* Zone Specific FAQs */}
              {zone.faq.length > 0 && (
                <div>
                  <FaqAccordion
                    items={zone.faq}
                    title={`${zone.name} FAQs`}
                    subtitle={`Common traveller questions regarding safaris and regulations in ${zone.name}.`}
                  />
                </div>
              )}

              {/* Relevant Packages */}
              {relevantPackages.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl font-bold text-sal-forest mb-4">
                    Packages Featuring {zone.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relevantPackages.slice(0, 2).map((pkg) => (
                      <Link
                        key={pkg.slug}
                        href={`/packages/${pkg.slug}`}
                        className="p-4 bg-cream border border-sal-forest/15 hover:border-sal-forest transition-colors block group"
                      >
                        <h4 className="font-serif text-lg font-bold text-sal-forest group-hover:text-tiger-ochre transition-colors mb-1">
                          {pkg.title}
                        </h4>
                        <p className="text-xs text-sal-forest/70 line-clamp-2">
                          {pkg.shortSummary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <LeadForm
                  initialInterest={`${zone.name} Safari`}
                  sourceSlug={`zone-${zone.slug}`}
                  compact={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar zoneName={zone.name} />
    </div>
  );
}

