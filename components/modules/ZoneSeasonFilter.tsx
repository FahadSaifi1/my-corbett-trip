"use client";

import React, { useState } from "react";
import Link from "next/link";
import { safariZones } from "@/content/zones";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight } from "@/components/ui/CustomIcons";
import {
  TopographicContoursIllustration,
  BotanicalLeafAccent,
  NaturalistExpeditionSeal,
} from "@/components/illustrations/WildlifeIllustrations";

const MONTHS = [
  { num: 10, label: "Oct", full: "October" },
  { num: 11, label: "Nov", full: "November" },
  { num: 12, label: "Dec", full: "December" },
  { num: 1, label: "Jan", full: "January" },
  { num: 2, label: "Feb", full: "February" },
  { num: 3, label: "Mar", full: "March" },
  { num: 4, label: "Apr", full: "April" },
  { num: 5, label: "May", full: "May" },
  { num: 6, label: "Jun", full: "June" },
  { num: 7, label: "Jul", full: "July (Monsoon)" },
  { num: 8, label: "Aug", full: "August (Monsoon)" },
  { num: 9, label: "Sep", full: "September (Monsoon)" },
];

export const ZoneSeasonFilter = () => {
  // Default to November (Dhikala & Durga Devi opening month)
  const [selectedMonth, setSelectedMonth] = useState<number>(11);
  const [hasUserSelected, setHasUserSelected] = useState<boolean>(false);

  const activeMonthObj = MONTHS.find((m) => m.num === selectedMonth) || MONTHS[1];

  // Filter zones that are open in the selected month
  const openZones = safariZones.filter((z) => z.openMonths.includes(selectedMonth));
  const closedZones = safariZones.filter((z) => !z.openMonths.includes(selectedMonth));

  return (
    <div className="relative bg-cream border border-sal-forest/15 p-4 sm:p-6 overflow-hidden shadow-xs">
      <TopographicContoursIllustration color="#C8782A" className="opacity-15" />
      <NaturalistExpeditionSeal
        size={76}
        variant="ochre"
        className="absolute top-3 right-4 opacity-30 hidden sm:block pointer-events-none"
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 pb-3 border-b border-sal-forest/10">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <BotanicalLeafAccent size={18} color="#C8782A" />
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-tiger-ochre block font-semibold">
              Seasonal Gate Calendar
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest">
            Which Zone Is Open For Your Dates?
          </h3>
        </div>
        <p className="text-xs text-sal-forest/70 max-w-sm">
          Select your intended travel month to see operational CTR zones, highlight wildlife, and
          safari types permitted.
        </p>
      </div>

      {/* Month Pills Selector */}
      <div className="relative z-10 flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
        {MONTHS.map((m) => {
          const isMonthMatch = m.num === selectedMonth;
          return (
            <button
              key={m.num}
              type="button"
              onClick={() => {
                setSelectedMonth(m.num);
                setHasUserSelected(true);
              }}
              className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium shrink-0 transition-all cursor-pointer border ${
                isMonthMatch
                  ? hasUserSelected
                    ? "bg-sal-forest text-cream border-sal-forest shadow-sm"
                    : "bg-white text-sal-forest/80 border-sal-forest/20 hover:border-sal-forest md:bg-sal-forest md:text-cream md:border-sal-forest md:shadow-sm"
                  : "bg-white text-sal-forest/80 border-sal-forest/20 hover:border-sal-forest"
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Mobile-only interactive invitation prompt (hidden once user taps a month or on desktop) */}
      {!hasUserSelected && (
        <div className="relative z-10 md:hidden py-3 px-4 bg-white/90 border border-sal-forest/15 text-center mb-3">
          <p className="text-xs font-medium text-sal-forest flex items-center justify-center gap-1.5">
            <span className="text-tiger-ochre text-sm font-bold">👆</span>
            <span>Tap your planned travel month above to view open zones</span>
          </p>
        </div>
      )}

      {/* Zone count info line (hidden on mobile until month is chosen) */}
      <div className={`relative z-10 mb-4 ${!hasUserSelected ? "hidden md:block" : "block"}`}>
        <span className="text-xs font-mono text-sal-forest/70">
          Showing <span className="font-bold text-sal-forest">{openZones.length} zones</span>{" "}
          operational in <span className="font-bold text-sal-forest">{activeMonthObj.full}</span>:
        </span>
      </div>

      {/* Zone Cards Grid (hidden on mobile until user clicks a month) */}
      <div className={`relative z-10 ${!hasUserSelected ? "hidden md:grid" : "grid"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {openZones.map((zone) => (
          <div
            key={zone.slug}
            className="bg-white border border-sal-forest/15 p-5 flex flex-col justify-between hover:border-sal-forest transition-colors group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-serif text-lg font-bold text-sal-forest group-hover:text-tiger-ochre transition-colors">
                  {zone.name}
                </h4>
                <Badge variant={zone.isOpenYearRound ? "mist" : "forest"}>
                  {zone.isOpenYearRound ? "Year-Round" : "Open Now"}
                </Badge>
              </div>

              <p className="text-xs text-sal-forest/80 font-mono mb-2">
                Gate: {zone.gate} • {zone.safariTypes.join(" / ")}
              </p>

              <p className="text-xs text-sal-forest/80 line-clamp-2 leading-relaxed mb-4">
                {zone.bestFor}
              </p>
            </div>

            <div className="pt-3 border-t border-sal-forest/10 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-sal-forest/60">
                Quota: {zone.entryLimitPerShift.split("(")[0]}
              </span>
              <Link
                href={`/safari-zones/${zone.slug}`}
                className="inline-flex items-center gap-1 font-medium text-tiger-ochre hover:text-sal-forest transition-colors"
              >
                <span>Zone Guide</span>
                <IconArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Closed Zones Notice */}
      {closedZones.length > 0 && (
        <div className={`mt-6 pt-4 border-t border-sal-forest/10 ${!hasUserSelected ? "hidden md:block" : "block"}`}>
          <p className="text-xs text-sal-forest/60">
            <span className="font-medium text-sal-forest/80">Closed in {activeMonthObj.full}:</span>{" "}
            {closedZones.map((z) => `${z.name} (Opens ${z.season.split("–")[0].trim()})`).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

