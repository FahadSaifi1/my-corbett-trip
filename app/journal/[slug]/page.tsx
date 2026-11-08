import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/content/journal";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { Badge } from "@/components/ui/Badge";
import { IconArrowRight, IconShieldCheck } from "@/components/ui/CustomIcons";

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Corbett Field Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | My Corbett Trip`,
      description: article.excerpt,
      type: "article",
      publishedTime: "2026-11-01T00:00:00.000Z",
      url: `/journal/${article.slug}`,
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema.org Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: "2026-11-01T00:00:00+05:30",
    dateModified: "2026-11-06T00:00:00+05:30",
    author: {
      "@type": "Organization",
      name: businessConfig.name,
      url: `https://${businessConfig.domain}`,
    },
    publisher: {
      "@type": "Organization",
      name: businessConfig.name,
      url: `https://${businessConfig.domain}`,
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
        {/* Article Header */}
        <section className="relative bg-sal-forest text-cream py-12 sm:py-16 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/journal banner.png"
              alt={article.title}
              fill
              priority
              className="object-cover object-center brightness-105 contrast-[1.03]"
              sizes="100vw"
            />
            {/* Clear neutral scrim without green tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <nav className="flex items-center gap-2 text-xs font-mono text-cream/60 mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-cream">Home</Link>
              <span>/</span>
              <Link href="/journal" className="hover:text-cream">Journal</Link>
              <span>/</span>
              <span className="text-tiger-ochre">{article.category}</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <Badge variant="mist">{article.category}</Badge>
              <span className="text-xs font-mono text-cream/70">{article.readTime}</span>
              <span className="text-xs font-mono text-cream/50">•</span>
              <span className="text-xs font-mono text-cream/70">{article.publishDate}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-cream/80 text-sm sm:text-base leading-relaxed font-light">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream border border-sal-forest/15 p-6 sm:p-10 space-y-6 text-sal-forest">
            <div className="prose-editorial mx-auto space-y-5 text-sm sm:text-base text-sal-forest/85 leading-relaxed">
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Cited Sources Box */}
            <div className="mt-10 pt-6 border-t border-sal-forest/15 bg-white p-5 border border-sal-forest/10">
              <h3 className="font-serif text-base font-bold text-sal-forest mb-2 flex items-center gap-2">
                <IconShieldCheck size={16} className="text-tiger-ochre" />
                <span>Verified Sources & Reference Documents</span>
              </h3>
              <p className="text-xs text-sal-forest/70 mb-3">
                All regulatory data, zone timings, and fee structures in this guide were audited from
                official government wildlife portals:
              </p>
              <ul className="space-y-1.5 text-xs font-mono text-sal-forest/80">
                {article.sources.map((src, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-tiger-ochre">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-tiger-ochre"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mandatory Disclaimer */}
            <div className="mt-6 p-4 bg-sal-forest/5 border border-sal-forest/10 text-xs text-sal-forest/75 leading-relaxed">
              {businessConfig.officialPermitDisclaimer}
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 max-w-3xl mx-auto">
            <LeadForm initialInterest="Journal Safari Inquiry" sourceSlug={`journal-${article.slug}`} />
          </div>
        </article>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

