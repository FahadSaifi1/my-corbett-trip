import React from "react";
import Link from "next/link";
import { PackageData } from "@/content/packages";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight, IconCalendar } from "@/components/ui/CustomIcons";

interface PackageCardProps {
  pkg: PackageData;
}

export const PackageCard = ({ pkg }: PackageCardProps) => {
  return (
    <article className="bg-cream border border-sal-forest/15 flex flex-col justify-between p-6 sm:p-7 hover:border-sal-forest transition-all group">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sal-forest/70">
            <IconCalendar size={13} className="text-tiger-ochre" />
            <span>{pkg.duration}</span>
          </span>
          {pkg.badge && <Badge variant="ochre">{pkg.badge}</Badge>}
        </div>

        <h3 className="font-serif text-2xl font-bold text-sal-forest group-hover:text-tiger-ochre transition-colors mb-2">
          <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
        </h3>

        <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-4">
          {pkg.shortSummary}
        </p>

        {/* Highlights List */}
        <ul className="space-y-1.5 text-xs text-sal-forest/80 mb-6">
          {pkg.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-tiger-ochre text-sm leading-none">•</span>
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-sal-forest/10 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block">
            Zones Used
          </span>
          <span className="text-xs font-medium text-sal-forest">
            {pkg.zonesUsed.join(", ")}
          </span>
        </div>

        <Link
          href={`/packages/${pkg.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-sal-forest hover:text-tiger-ochre transition-colors group-hover:translate-x-0.5"
        >
          <span>View Itinerary</span>
          <IconArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};

