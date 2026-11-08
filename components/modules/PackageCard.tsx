"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PackageData } from "@/content/packages";
import { businessConfig } from "@/content/config";
import {
  IconArrowRight,
  IconCalendar,
  IconWhatsApp,
} from "@/components/ui/CustomIcons";
import { BotanicalLeafAccent } from "@/components/illustrations/WildlifeIllustrations";

interface PackageCardProps {
  pkg: PackageData;
}

const PACKAGE_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  "corbett-weekend-escape": {
    src: "/Assets/corbett weekend escape.png",
    alt: "Corbett Weekend Escape - 2 Nights / 3 Days",
  },
  "dhikala-forest-lodge-experience": {
    src: "/Assets/dhikala forest lodge experience.png",
    alt: "Dhikala Forest Lodge Experience - British-Era Rest House in Core",
  },
  "riverside-luxury-retreat": {
    src: "/Assets/riverside luxury retreat.png",
    alt: "Riverside Luxury Retreat by Kosi River Ramnagar",
  },
  "family-safari-holiday": {
    src: "/Assets/family safari holiday.png",
    alt: "Family Safari Holiday in Jim Corbett",
  },
  "photographers-corbett": {
    src: "/Assets/homepage tiger banner.png",
    alt: "Photographer's Deep Corbett Wildlife Tracking",
  },
  "birding-in-corbett": {
    src: "/Assets/safari zones banner.png",
    alt: "Birding in Corbett & Foothills Avian Tour",
  },
  "honeymoon-in-the-jungle": {
    src: "/Assets/riverside luxury retreat.png",
    alt: "Honeymoon in the Jungle Luxury Villa Stay",
  },
  "corbett-and-nainital": {
    src: "/Assets/corbett weekend escape.png",
    alt: "Corbett Wilderness & Nainital Hills",
  },
  "groups-and-corporate-offsites": {
    src: "/Assets/packages banner.png",
    alt: "Groups & Corporate Offsites in Jim Corbett",
  },
  "safari-only": {
    src: "/Assets/jeep safari banner.png",
    alt: "Jim Corbett Safari Only Coordination",
  },
};

export const PackageCard = ({ pkg }: PackageCardProps) => {
  const [activeTab, setActiveTab] = useState<"highlights" | "inclusions" | "day1">("highlights");

  const imageInfo = pkg.heroImage
    ? { src: pkg.heroImage, alt: `${pkg.title} - Jim Corbett Safari Expedition` }
    : PACKAGE_IMAGE_MAP[pkg.slug] || {
      src: "/Assets/packages banner.png",
      alt: `${pkg.title} - Corbett Tiger Reserve Safari`,
    };

  return (
    <article className="relative bg-white border border-sal-forest/20 flex flex-col justify-between hover:border-sal-forest hover:shadow-lg transition-all group overflow-hidden">
      {/* Decorative botanical accent watermark in corner */}
      <BotanicalLeafAccent
        size={44}
        color="#C8782A"
        className="absolute top-2 right-2 opacity-30 group-hover:opacity-60 transition-opacity z-20 pointer-events-none"
      />

      {/* 1. HERO PHOTO BANNER WITH FLOATING BADGES */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-sal-forest">
        <Image
          src={imageInfo.src}
          alt={imageInfo.alt}
          fill
          className="object-cover object-center brightness-[0.96] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle Gradient Scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Floating Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-2">
          {pkg.badge && (
            <span className="px-2.5 py-1 bg-tiger-ochre text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
              {pkg.badge}
            </span>
          )}
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-cream text-[10px] font-mono tracking-wider flex items-center gap-1 border border-cream/20">
            <IconCalendar size={12} className="text-tiger-ochre" />
            <span>{pkg.duration}</span>
          </span>
        </div>

        {/* Floating Bottom Quick Badges on Photo */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-cream/90 font-mono">
          <span className="truncate text-[11px] bg-black/50 px-2 py-0.5 backdrop-blur-xs">
            Zones: {pkg.zonesUsed.join(", ")}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-tiger-ochre font-bold bg-black/50 px-2 py-0.5">
            CTR Permitted
          </span>
        </div>
      </div>

      {/* 2. CARD BODY & INTERACTIVE TABS */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-sal-forest group-hover:text-tiger-ochre transition-colors mb-2">
            <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4 line-clamp-2">
            {pkg.shortSummary}
          </p>

          {/* Interactive Micro-Tabs for Exploring Card Details */}
          <div className="flex items-center gap-1 border-b border-sal-forest/15 pb-2 mb-3 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("highlights")}
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "highlights"
                  ? "bg-sal-forest text-cream font-bold"
                  : "text-sal-forest/70 hover:text-sal-forest"
                }`}
            >
              Highlights
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("inclusions")}
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "inclusions"
                  ? "bg-sal-forest text-cream font-bold"
                  : "text-sal-forest/70 hover:text-sal-forest"
                }`}
            >
              Inclusions
            </button>
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveTab("day1")}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "day1"
                    ? "bg-sal-forest text-cream font-bold"
                    : "text-sal-forest/70 hover:text-sal-forest"
                  }`}
              >
                Day 1
              </button>
            )}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[96px] mb-4">
            {activeTab === "highlights" && (
              <ul className="space-y-1.5 text-xs text-sal-forest/85">
                {pkg.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-tiger-ochre font-bold leading-none">✓</span>
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "inclusions" && (
              <ul className="space-y-1.5 text-xs text-sal-forest/85">
                {pkg.inclusions.slice(0, 3).map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sal-forest font-bold leading-none">•</span>
                    <span className="line-clamp-1">{inc}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "day1" && pkg.itinerary && pkg.itinerary[0] && (
              <div className="text-xs text-sal-forest/85">
                <span className="font-bold text-sal-forest block mb-1">
                  Day 1: {pkg.itinerary[0].title}
                </span>
                <p className="line-clamp-3 text-sal-forest/75 leading-relaxed">
                  {pkg.itinerary[0].description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 3. CARD FOOTER WITH PRICING & CALL-TO-ACTIONS */}
        <div className="pt-4 border-t border-sal-forest/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block">
              Official Permits & Stay
            </span>
            <span className="text-xs font-semibold text-tiger-ochre">
              {pkg.duration.includes("Night") ? "Custom Dates Available" : "Instant Confirmation"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
                `Hello My Corbett Trip, I am interested in the "${pkg.title}" package. Please share dates and details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp about ${pkg.title}`}
              className="p-2.5 bg-sal-forest/10 hover:bg-[#25D366] hover:text-white text-sal-forest transition-colors rounded-xs flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <IconWhatsApp size={16} />
            </a>

            <Link
              href={`/packages/${pkg.slug}`}
              className="py-2.5 px-4 bg-sal-forest hover:bg-tiger-ochre text-cream text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>View Itinerary</span>
              <IconArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
