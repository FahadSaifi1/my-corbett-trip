import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/content/journal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Naturalist Field Journal: Corbett Guides & Wildlife Intelligence",
  description:
    "Expert articles on Jim Corbett National Park: zone comparisons, Dhikala booking guides, 2026 rules, safari costs, birding hotspots, and Delhi route guides.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/journal banner.png"
              alt="Corbett Tiger Reserve Naturalist Field Journal"
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
                Field Intelligence & Guides
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                The Naturalist&apos;s Field Journal
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Objective, deeply researched wildlife guides written from the forest floor. Learn
                how zones differ, how to navigate the 2026 rules, and where to track elephants,
                birds, and tigers.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journalArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-cream border border-sal-forest/15 p-6 sm:p-7 flex flex-col justify-between hover:border-sal-forest transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="mist">{article.category}</Badge>
                    <span className="text-xs font-mono text-sal-forest/60">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-sal-forest group-hover:text-tiger-ochre transition-colors mb-3 leading-snug">
                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sal-forest/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-sal-forest/60">
                    {article.publishDate}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sal-forest hover:text-tiger-ochre transition-colors"
                  >
                    <span>Read Article</span>
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

