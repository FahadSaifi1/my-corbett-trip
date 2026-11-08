import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { businessConfig } from "@/content/config";
import { packagesData } from "@/content/packages";
import { officialFees } from "@/content/fees";
import { LeadForm } from "@/components/modules/LeadForm";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import {
  IconWhatsApp,
  IconShieldCheck,
  IconCheck,
  IconPhone,
  IconPugmark,
} from "@/components/ui/CustomIcons";

// Meta Ad landing pages configuration
const AD_CAMPAIGNS: Record<
  string,
  {
    title: string;
    subline: string;
    packageSlug: string;
    highlights: string[];
    defaultInterest: string;
    heroBadge: string;
  }
> = {
  "corbett-weekend": {
    title: "Corbett Weekend Safari: 2 Nights in the Wilderness",
    subline:
      "2 exclusive jeep safaris in premier CTR zones, handpicked riverside resort in Dhikuli, and verified official permits issued in your name.",
    packageSlug: "corbett-weekend-escape",
    highlights: [
      "2 Day Jeep Safaris in Bijrani, Garjiya, or Jhirna with certified guide.",
      "Resort stay with all buffet meals (Breakfast & Dinner included).",
      "Official CTR permits processed directly in your name via corbettgov.org.",
      "Direct resort lobby pickup & drop in registered 4x4 Gypsies.",
    ],
    defaultInterest: "Safari + Stay Package",
    heroBadge: "Delhi-NCR Weekend Special",
  },
  "dhikala-night-stay": {
    title: "Dhikala Forest Rest House: Inside Corbett's Deepest Core",
    subline:
      "Sleep inside the historic 1890 British-era lodge on the Dhikala Chaur. Exclusive dawn and dusk core access before day canters arrive.",
    packageSlug: "dhikala-forest-lodge-experience",
    highlights: [
      "2 nights inside Corbett core at Dhikala or Sarpduli Forest Rest House.",
      "Dedicated Gypsy and registered driver stationed with you inside the reserve.",
      "Honest 45-day rolling booking advance window management for Indian citizens.",
      "100% compliant with Supreme Court 2026 phone rules and gate ID protocols.",
    ],
    defaultInterest: "Dhikala FRH Night Stay",
    heroBadge: "Strictly Limited Quota",
  },
  "family-safari": {
    title: "Family Wildlife Vacation in Jim Corbett",
    subline:
      "Gentle safari tracks, family suites, Corbett Museum in Kaladhungi, Corbett Falls, and Garjiya Temple. Paced comfortably for children and grandparents.",
    packageSlug: "family-safari-holiday",
    highlights: [
      "2 child-friendly jeep safaris with certified naturalist guide.",
      "Sightseeing cab for Corbett Museum Kaladhungi and Garjiya Devi Temple.",
      "Student (12–18 yrs) and Senior Citizen official permit discounts applied.",
      "Resort with swimming pool, large lawns, and outdoor games.",
    ],
    defaultInterest: "Family Holiday",
    heroBadge: "Child-Friendly Itinerary",
  },
  "luxury-stays": {
    title: "Riverside Luxury Lodges & Private Naturalist Safaris",
    subline:
      "Boutique Kosi riverfront cottages, private 4x4 gypsies, gourmet bush dining, and personal naturalist guides for an elevated wilderness immersion.",
    packageSlug: "riverside-luxury-retreat",
    highlights: [
      "Curated 5-star riverfront cottages with private decks overlooking the Kosi.",
      "3 Private Jeep Safaris with top-tier naturalist tracking guides.",
      "Chef-curated candlelit bush dinner by the river.",
      "Complete VIP gate clearance and luggage concierge.",
    ],
    defaultInterest: "Safari + Stay Package",
    heroBadge: "Luxury Wildlife Experience",
  },
};

export async function generateStaticParams() {
  return Object.keys(AD_CAMPAIGNS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = AD_CAMPAIGNS[slug];
  if (!campaign) {
    return { title: "Ad Campaign | My Corbett Trip", robots: { index: false, follow: false } };
  }

  return {
    title: `${campaign.title} | My Corbett Trip`,
    description: campaign.subline,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function AdLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = AD_CAMPAIGNS[slug];

  if (!campaign) {
    notFound();
  }

  const pkg = packagesData.find((p) => p.slug === campaign.packageSlug);

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      {/* DISTRACTION-FREE AD HEADER (No standard navbar; only wordmark + WhatsApp) */}
      <header className="sticky top-0 z-50 bg-cream border-b border-sal-forest/15 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-sal-forest uppercase">
            My Corbett Trip
          </span>
          <span className="text-[10px] tracking-[0.2em] text-sal-forest/60 uppercase -mt-1">
            Private Safari Specialist
          </span>
        </Link>

        <a
          href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
            `Hello My Corbett Trip, I clicked your ad for ${campaign.title} and want to check available dates.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold rounded shadow-sm hover:opacity-90 transition-opacity"
        >
          <IconWhatsApp size={16} />
          <span className="hidden sm:inline">WhatsApp Fast Reply</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </header>

      {/* Advisory Bar */}
      <div className="bg-sal-forest text-cream text-[11px] sm:text-xs py-1.5 px-4 text-center">
        <span>
          Independent private travel company • Permits issued in traveller&apos;s name via{" "}
          <strong>corbettgov.org</strong>
        </span>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Focused Copy & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-tiger-ochre/15 text-[#9B5614] border border-tiger-ochre/30 text-xs font-mono uppercase tracking-wider mb-3">
                <IconPugmark size={13} />
                <span>{campaign.heroBadge}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sal-forest leading-[1.15] mb-4">
                {campaign.title}
              </h1>

              <p className="text-sm sm:text-base text-sal-forest/80 leading-relaxed">
                {campaign.subline}
              </p>
            </div>

            {/* Key Inclusions Bullet Box */}
            <div className="bg-cream border border-sal-forest/15 p-5 sm:p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-sal-forest uppercase tracking-wide text-xs">
                Package Highlights & Deliverables
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sal-forest/85">
                {campaign.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#25D366] font-bold shrink-0 mt-0.5">
                      <IconCheck size={16} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transparent Government Fee Disclaimer */}
            <div className="bg-white border border-sal-forest/15 p-4 sm:p-5 text-xs text-sal-forest/80 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-sal-forest">
                <IconShieldCheck size={15} className="text-tiger-ochre" />
                <span>Official CTR Permit Accountability</span>
              </div>
              <p className="leading-relaxed">
                Day jeep permits (₹3,380 Indian / ₹6,680 Foreign) and Dhikala canter seats (₹1,500 + GST)
                are issued directly by the Corbett Tiger Reserve administration in the traveller&apos;s name.
                Permits are subject to CTR quota availability.
              </p>
              <p className="text-[11px] font-mono text-sal-forest/60">
                {officialFees.disclaimer}
              </p>
            </div>

            {/* Call Assurance */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-sal-forest/5 border border-sal-forest/10 text-xs">
              <div>
                <span className="font-semibold text-sal-forest block">Have questions right now?</span>
                <span className="text-sal-forest/70">{businessConfig.callbackPromise}</span>
              </div>
              <a
                href={`tel:${businessConfig.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sal-forest hover:text-tiger-ochre"
              >
                <IconPhone size={14} />
                <span>Call {businessConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 2-Step Lead Form (Form above the fold on mobile) (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20">
              <LeadForm
                initialInterest={campaign.defaultInterest}
                sourceSlug={`ad-${slug}`}
                compact={true}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Ad Landing Footer with Mandatory Disclaimers */}
      <footer className="bg-sal-forest text-cream py-8 px-4 sm:px-8 border-t border-cream/10 text-xs text-center mt-12 pb-24 sm:pb-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-cream/80 leading-relaxed">
            {businessConfig.officialPermitDisclaimer}
          </p>
          <p className="text-cream/60">
            © 2026 {businessConfig.name} • {businessConfig.address} • Phone:{" "}
            {businessConfig.phoneDisplay}
          </p>
        </div>
      </footer>

      <MobileStickyBar packageName={campaign.title} />
    </div>
  );
}
