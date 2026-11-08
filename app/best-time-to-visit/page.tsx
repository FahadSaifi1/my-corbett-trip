import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ZoneSeasonFilter } from "@/components/modules/ZoneSeasonFilter";
import { LeadForm } from "@/components/modules/LeadForm";
import { Badge } from "@/components/ui/Badge";
import { IconCalendar, IconArrowRight, IconShieldCheck } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Best Time to Visit Jim Corbett: Season & Month-by-Month Guide",
  description:
    "When to visit Jim Corbett National Park: winter birding (Nov–Feb), peak summer tiger tracking (Mar–Jun), and year-round monsoon safaris in Jhirna and Dhela.",
  alternates: {
    canonical: "/best-time-to-visit",
  },
};

const SEASONS = [
  {
    period: "November to February",
    title: "Winter Season: Crisp Mornings & Migratory Birds",
    temp: "5°C – 22°C",
    highlights:
      "All zones open (Dhikala and Durga Devi open Nov 15). 600+ bird species active. Asian elephant herds graze on the grasslands. Crisp morning mist creates ethereal photography conditions. Warm thermal layers required.",
    recommendedFor: "Birdwatchers, landscape photographers, families, and luxury lodge retreats.",
    badge: "Most Pleasant Weather",
  },
  {
    period: "March to April",
    title: "Spring Season: Pleasant Warmth & High Sighting Activity",
    temp: "15°C – 32°C",
    highlights:
      "Forest understorey thins, making wildlife easier to spot. Temperatures are warm during the day and pleasantly cool at night. Animal movement along waterholes increases noticeably.",
    recommendedFor: "General wildlife enthusiasts, friend groups, and first-time safari visitors.",
    badge: "Balanced Ideal",
  },
  {
    period: "May to June",
    title: "Summer Season: Peak Big Cat Sightings",
    temp: "25°C – 40°C",
    highlights:
      "Dry, hot conditions cause natural forest streams to dry up, forcing tigers, leopards, and deer to congregate predictably around remaining river pools and waterholes. Early morning and late afternoon safaris yield premier photographic sightings.",
    recommendedFor: "Dedicated wildlife photographers and tiger tracking enthusiasts.",
    badge: "Peak Predator Tracking",
  },
  {
    period: "July to September",
    title: "Monsoon Season: Emerald Greenery & Solitude",
    temp: "22°C – 33°C",
    highlights:
      "Core zones like Dhikala and Bijrani close for habitat rejuvenation. However, Jhirna and Dhela remain open year-round (weather permitting). The forest turns vibrant green, waterfalls surge, and tourist numbers drop drastically.",
    recommendedFor: "Monsoon nature lovers, peace seekers, and budget-conscious travellers.",
    badge: "Year-Round Wilderness",
  },
];

export default function BestTimeToVisitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari rules banner.png"
              alt="Best Time to Visit Jim Corbett Wildlife Seasons"
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
                Seasonal Calendar
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Best Time to Visit Jim Corbett National Park
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Corbett transforms with each season. Choosing the right month depends entirely on
                whether your priority is pleasant mountain weather, winter bird migrations, or
                summer big cat tracking around waterholes.
              </p>
            </div>
          </div>
        </section>

        {/* Four Seasons Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SEASONS.map((season, idx) => (
              <div
                key={idx}
                className="bg-cream border border-sal-forest/15 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant={idx === 2 ? "ochre" : "forest"}>{season.badge}</Badge>
                    <span className="text-xs font-mono text-sal-forest/70 font-semibold">
                      {season.temp}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-tiger-ochre block mb-1">
                    {season.period}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-sal-forest mb-3">
                    {season.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
                    {season.highlights}
                  </p>
                </div>

                <div className="pt-3 border-t border-sal-forest/10 text-xs text-sal-forest/90">
                  <strong className="text-sal-forest">Best Suited For:</strong>{" "}
                  {season.recommendedFor}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Zone Calendar */}
          <div>
            <ZoneSeasonFilter />
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <LeadForm initialInterest="Safari + Stay Package" sourceSlug="best-time-to-visit" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

