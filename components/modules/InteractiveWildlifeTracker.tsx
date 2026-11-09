"use client";

import React, { useState } from "react";
import Link from "next/link";
import { businessConfig } from "@/content/config";
import {
  IconBinoculars,
  IconArrowRight,
  IconWhatsApp,
} from "@/components/ui/CustomIcons";
import {
  TopographicContoursIllustration,
  BotanicalLeafAccent,
  TigerWatermarkIllustration,
} from "@/components/illustrations/WildlifeIllustrations";

interface WildlifeSpecies {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  populationFact: string;
  bestZones: { name: string; slug: string }[];
  sightingIndex: "Very High" | "High" | "Moderate to High" | "Seasonal Peak";
  sightingMeter: number; // 1-100
  primeHours: string;
  naturalistTip: string;
  description: string;
  badgeColor: string;
}

const WILDLIFE_LIST: WildlifeSpecies[] = [
  {
    id: "tiger",
    name: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    category: "Apex Predator",
    populationFact: "260 tigers (All India Tiger Estimation 2022 — highest density in India)",
    bestZones: [
      { name: "Dhikala", slug: "dhikala" },
      { name: "Bijrani", slug: "bijrani" },
      { name: "Garjiya", slug: "garjiya" },
    ],
    sightingIndex: "High",
    sightingMeter: 85,
    primeHours: "06:00 AM – 08:30 AM & 04:00 PM – Sunset",
    naturalistTip:
      "Tigers patrol firelines and sandy riverbeds before sunrise. Listen intently for chital (spotted deer) and common langur alarm barks echoing through the sal canopy — they give away predator movement minutes before visual contact.",
    description:
      "Corbett is India's foremost tiger stronghold. With vast prey density along the Ramganga river basin, tigers here are large, healthy, and frequently sighted near waterholes and grassland edges.",
    badgeColor: "bg-tiger-ochre text-white",
  },
  {
    id: "elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    category: "Grassland Giant",
    populationFact: "Over 1,000 wild elephants traverse Corbett's migratory corridors",
    bestZones: [
      { name: "Dhikala Chaur", slug: "dhikala" },
      { name: "Bijrani", slug: "bijrani" },
      { name: "Jhirna", slug: "jhirna" },
    ],
    sightingIndex: "Very High",
    sightingMeter: 94,
    primeHours: "Late afternoon (03:30 PM – 06:00 PM) by water bodies",
    naturalistTip:
      "Elephant matriarchs lead family herds onto the open Dhikala Chaur grasslands around 4 PM to bathe in the Ramganga river. Keep safe respectful distance; registered gypsies maintain at least 30 meters.",
    description:
      "The expansive grasslands of Patli Dun and Dhikala offer one of the most majestic Asian elephant spectacles on earth, with multi-generational herds grazing openly against the Himalayan foothills.",
    badgeColor: "bg-sal-forest text-cream",
  },
  {
    id: "gharial",
    name: "Fish-Eating Gharial & Mugger",
    scientificName: "Gavialis gangeticus / Crocodylus palustris",
    category: "Prehistoric River Reptile",
    populationFact: "One of North India's few viable wild breeding populations",
    bestZones: [
      { name: "Dhikala (Gairal & Crocodile Point)", slug: "dhikala" },
      { name: "Ramganga Reservoir", slug: "dhikala" },
    ],
    sightingIndex: "High",
    sightingMeter: 88,
    primeHours: "10:30 AM – 03:00 PM (Basking under midday winter sun)",
    naturalistTip:
      "During crisp winter months (Nov–Feb), gharials haul themselves out onto rocky sandbars below High Bank and Gairal to bask in direct sunlight. Use 8x42 binoculars for breathtaking snout detail.",
    description:
      "Critically endangered gharials with narrow, needle-lined snouts share the pristine, crystal-clear rapids of the Ramganga with broad-snouted marsh mugger crocodiles and smooth-coated otters.",
    badgeColor: "bg-[#285746] text-white",
  },
  {
    id: "deer",
    name: "Spotted Deer (Chital) & Hog Deer",
    scientificName: "Axis axis / Axis porcinus",
    category: "Forest Herbivore",
    populationFact: "Tens of thousands grazing across sal woods and alluvial flats",
    bestZones: [
      { name: "Dhikala", slug: "dhikala" },
      { name: "Bijrani", slug: "bijrani" },
      { name: "Dhela", slug: "dhela" },
    ],
    sightingIndex: "Very High",
    sightingMeter: 98,
    primeHours: "Throughout morning and afternoon shifts",
    naturalistTip:
      "Dhikala Chaur is the prime sanctuary in Corbett for the elusive, low-slung Hog Deer. Watch how chital stay closely synchronized with troops of langurs, eating leaves dropped from the canopy.",
    description:
      "Graceful chital stags with lyre-shaped antlers roam in herds of dozens. Their sudden stamping and sharp whistling alarm bark is the primary telegraph system warning every safari traveller of a stalking tiger.",
    badgeColor: "bg-bark text-white",
  },
  {
    id: "hornbill",
    name: "Great Hornbill & Raptors",
    scientificName: "Buceros bicornis",
    category: "Avian Canopy Wonder",
    populationFact: "600+ recorded bird species — Premier birding hotspot of Uttarakhand",
    bestZones: [
      { name: "Durga Devi", slug: "durga-devi" },
      { name: "Sonanadi", slug: "sonanadi" },
      { name: "Bijrani", slug: "bijrani" },
    ],
    sightingIndex: "High",
    sightingMeter: 82,
    primeHours: "06:30 AM – 11:00 AM (Active feeding along river valleys)",
    naturalistTip:
      "The massive yellow casque of the Great Hornbill can be heard before it is seen — its wings create an audible whooshing sound like a steam train as it flies across deep hill valleys in Durga Devi.",
    description:
      "Corbett is an international birdwatcher's paradise. Along with Great Hornbills, look for Pallas's Fish Eagle, Crested Serpent Eagle, Collared Falconet, and Himalayan Rubythroats.",
    badgeColor: "bg-tiger-ochre-dark text-white",
  },
];

export const InteractiveWildlifeTracker: React.FC = () => {
  const [activeSpeciesId, setActiveSpeciesId] = useState<string>("tiger");
  const [hasUserSelected, setHasUserSelected] = useState<boolean>(false);

  const currentSpecies =
    WILDLIFE_LIST.find((s) => s.id === activeSpeciesId) || WILDLIFE_LIST[0];

  return (
    <div className="relative bg-gradient-to-br from-cream via-cream/90 to-[#EDE6D8] border border-sal-forest/20 p-5 sm:p-7 shadow-sm overflow-hidden">
      {/* Background Topographic Illustration */}
      <TopographicContoursIllustration color="#C8782A" className="opacity-15" />

      {/* Background Tiger Watermark */}
      <TigerWatermarkIllustration
        size={360}
        color="#C8782A"
        className="absolute -right-12 -bottom-10 opacity-20 hidden md:block"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 pb-3 border-b border-sal-forest/15">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <BotanicalLeafAccent size={22} color="#C8782A" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-tiger-ochre font-bold">
                Interactive Sighting Radar
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-sal-forest">
              Corbett Big 5 Wildlife Tracker
            </h2>
            <p className="text-xs sm:text-sm text-sal-forest/80 mt-1 max-w-xl">
              Click any species below to view real-time habitat hotspots, naturalist tracking tips,
              and prime encounter hours across Corbett Tiger Reserve.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-sal-forest/70">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
            <span>Updated for 2026 Season</span>
          </div>
        </div>

        {/* Interactive Species Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
          {WILDLIFE_LIST.map((sp) => {
            const isSpeciesMatch = sp.id === activeSpeciesId;
            return (
              <button
                key={sp.id}
                type="button"
                onClick={() => {
                  setActiveSpeciesId(sp.id);
                  setHasUserSelected(true);
                }}
                className={`p-3 text-left transition-all border cursor-pointer relative ${
                  isSpeciesMatch
                    ? hasUserSelected
                      ? "bg-sal-forest text-cream border-sal-forest shadow-md scale-[1.02]"
                      : "bg-white/80 text-sal-forest/90 border-sal-forest/15 hover:bg-white hover:border-sal-forest/40 md:bg-sal-forest md:text-cream md:border-sal-forest md:shadow-md md:scale-[1.02]"
                    : "bg-white/80 text-sal-forest/90 border-sal-forest/15 hover:bg-white hover:border-sal-forest/40"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider block opacity-70 mb-0.5">
                  {sp.category}
                </div>
                <div className="font-serif font-bold text-sm sm:text-base leading-tight">
                  {sp.name}
                </div>
                {isSpeciesMatch && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-tiger-ochre ${
                      !hasUserSelected ? "hidden md:block" : "block"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile-only interactive invitation prompt (hidden once user taps a species or on desktop) */}
        {!hasUserSelected && (
          <div className="relative z-10 md:hidden py-3 px-4 bg-white/90 border border-sal-forest/15 text-center mb-4">
            <p className="text-xs font-medium text-sal-forest flex items-center justify-center gap-1.5">
              <span className="text-tiger-ochre text-sm font-bold">👆</span>
              <span>Tap any species above to view tracking radar & zones</span>
            </p>
          </div>
        )}

        {/* Active Species Detail Card (hidden on mobile until user clicks a species) */}
        <div className={`bg-white/90 backdrop-blur-xs border border-sal-forest/15 p-5 sm:p-6 ${!hasUserSelected ? "hidden md:grid" : "grid"} grid-cols-1 lg:grid-cols-12 gap-6 items-start shadow-sm`}>
          {/* Left Column: Sighting Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[11px] font-mono uppercase px-2.5 py-0.5 tracking-wider font-semibold ${currentSpecies.badgeColor}`}
              >
                {currentSpecies.category}
              </span>
              <span className="text-xs font-mono italic text-sal-forest/60">
                ({currentSpecies.scientificName})
              </span>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest mb-2">
                {currentSpecies.name}
              </h3>
              <p className="text-xs sm:text-sm text-sal-forest/85 leading-relaxed">
                {currentSpecies.description}
              </p>
            </div>

            {/* Population Fact Banner */}
            <div className="p-3.5 bg-sal-forest/5 border-l-4 border-tiger-ochre text-xs text-sal-forest/90">
              <span className="font-bold font-mono uppercase text-sal-forest block text-[11px] mb-0.5">
                Reserve Census Fact:
              </span>
              <span>{currentSpecies.populationFact}</span>
            </div>

            {/* Naturalist Field Secret */}
            <div className="p-4 bg-cream/70 border border-sal-forest/15 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-tiger-ochre">
                <IconBinoculars size={16} />
                <span>Local Naturalist Tracking Protocol:</span>
              </div>
              <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed italic">
                &ldquo;{currentSpecies.naturalistTip}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Sighting Radar & Zone Recommendations */}
          <div className="lg:col-span-5 bg-sal-forest text-cream p-5 sm:p-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-1.5">
                <span className="text-tiger-ochre font-semibold">Sighting Probability</span>
                <span className="text-cream font-bold">{currentSpecies.sightingIndex}</span>
              </div>
              {/* Animated/Visual Sighting Bar */}
              <div className="w-full bg-cream/15 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-tiger-ochre to-[#E09040] h-full transition-all duration-700 rounded-full"
                  style={{ width: `${currentSpecies.sightingMeter}%` }}
                />
              </div>
            </div>

            {/* Prime Hours */}
            <div className="border-t border-cream/15 pt-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cream/60 block mb-1">
                Prime Encounter Hours
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cream">
                {currentSpecies.primeHours}
              </span>
            </div>

            {/* Top Zones */}
            <div className="border-t border-cream/15 pt-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cream/60 block mb-2">
                Top Tourism Zones To Spot
              </span>
              <div className="flex flex-wrap gap-2">
                {currentSpecies.bestZones.map((z) => (
                  <Link
                    key={z.slug}
                    href={`/safari-zones/${z.slug}`}
                    className="px-3 py-1 bg-cream/10 border border-cream/20 hover:bg-tiger-ochre hover:text-white transition-all text-xs font-mono text-cream flex items-center gap-1.5"
                  >
                    <span>{z.name}</span>
                    <IconArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Inquiry CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
                  `Hello My Corbett Trip, I want to book a safari with high chances of seeing ${currentSpecies.name}. Which zone and dates do you recommend?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-tiger-ochre text-white text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#b5671f] transition-all flex items-center justify-center gap-2"
              >
                <IconWhatsApp size={15} />
                <span>Ask Naturalist About {currentSpecies.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
