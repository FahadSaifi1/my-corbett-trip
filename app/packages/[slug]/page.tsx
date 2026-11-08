import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  IconCalendar,
  IconShieldCheck,
  IconCheck,
  IconWhatsApp,
  IconArrowRight,
} from "@/components/ui/CustomIcons";

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} (${pkg.duration}) | Jim Corbett Safari Package`,
    description: pkg.shortSummary,
    alternates: {
      canonical: `/packages/${pkg.slug}`,
    },
    openGraph: {
      title: `${pkg.title} | My Corbett Trip`,
      description: pkg.shortSummary,
      url: `/packages/${pkg.slug}`,
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Schema.org TouristTrip JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.shortSummary,
    touristType: pkg.targetAudience,
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: item.title,
          description: item.description,
        },
      })),
    },
    ...(pkg.indicativePricePerPerson
      ? {
          offers: {
            "@type": "Offer",
            price: pkg.indicativePricePerPerson,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            validFrom: "2026-11-01",
          },
        }
      : {}),
  };

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* Header Breadcrumb & Title */}
        <section className="relative bg-sal-forest text-cream py-12 sm:py-16 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/packages banner.png"
              alt={pkg.title}
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-mono text-cream/60 mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-cream">Home</Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-cream">Packages</Link>
              <span>/</span>
              <span className="text-tiger-ochre">{pkg.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cream/80">
                  <IconCalendar size={14} className="text-tiger-ochre" />
                  <span>{pkg.duration}</span>
                </span>
                {pkg.badge && <Badge variant="ochre">{pkg.badge}</Badge>}
                <Badge variant="mist">Best: {pkg.bestMonths}</Badge>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                {pkg.title}
              </h1>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                {pkg.shortSummary}
              </p>
            </div>
          </div>
        </section>

        {/* Content & Sticky Sidebar */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Audience & Overview */}
              <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7">
                <h2 className="font-serif text-xl font-bold text-sal-forest mb-2">
                  Who This Expedition Is Crafted For
                </h2>
                <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-5">
                  {pkg.targetAudience}
                </p>

                <h3 className="font-serif text-base font-bold text-sal-forest uppercase tracking-wide text-xs mb-3">
                  Key Expedition Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-sal-forest/85">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-tiger-ochre font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                  Day-by-Day Flow
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest mb-6">
                  Detailed Itinerary
                </h2>

                <div className="space-y-6">
                  {pkg.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="bg-white border border-sal-forest/15 p-5 sm:p-6 relative pl-6 sm:pl-8 border-l-4 border-l-sal-forest"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-xs font-mono uppercase font-bold text-tiger-ochre">
                          Day 0{day.day}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-sal-forest mb-2">
                        {day.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-cream border border-sal-forest/15 p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-sal-forest mb-3 flex items-center gap-2">
                    <IconCheck size={18} className="text-[#25D366]" />
                    <span>What Is Included</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-sal-forest/80">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#25D366] font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cream border border-sal-forest/15 p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-sal-forest mb-3 text-sal-forest/80">
                    What Is Not Included
                  </h3>
                  <ul className="space-y-2 text-xs text-sal-forest/70">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sal-forest/40">✕</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mandatory Transparency Notice */}
              <div className="bg-sal-forest/5 border border-sal-forest/15 p-5 text-xs text-sal-forest/80 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-sal-forest">
                  <IconShieldCheck size={15} className="text-tiger-ochre" />
                  <span>Statutory Permit & Availability Notice</span>
                </div>
                <p className="leading-relaxed">
                  {businessConfig.officialPermitDisclaimer}
                </p>
                <p className="text-[11px] font-mono text-sal-forest/60">
                  {officialFees.disclaimer}
                </p>
              </div>

              {/* Package FAQs */}
              {pkg.faq.length > 0 && (
                <div>
                  <FaqAccordion
                    items={pkg.faq}
                    title={`${pkg.title} FAQs`}
                    subtitle="Frequently asked questions about this specific expedition."
                  />
                </div>
              )}
            </div>

            {/* Sticky Sidebar Form (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <LeadForm
                  initialInterest={pkg.title}
                  sourceSlug={`package-${pkg.slug}`}
                  compact={true}
                />

                {/* Direct WhatsApp Box */}
                <div className="bg-sal-forest text-cream p-5 text-xs">
                  <span className="font-mono uppercase tracking-wider text-tiger-ochre block mb-1">
                    Quick WhatsApp Check
                  </span>
                  <p className="text-cream/80 mb-3 leading-relaxed">
                    Want to know if permits are available for your exact dates right now?
                  </p>
                  <a
                    href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello My Corbett Trip, I want to check availability for ${pkg.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-[#25D366] text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded shadow-sm hover:opacity-90"
                  >
                    <IconWhatsApp size={16} />
                    <span>Check on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar packageName={pkg.title} />
    </div>
  );
}

