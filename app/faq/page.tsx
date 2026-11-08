import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { LeadForm } from "@/components/modules/LeadForm";

export const metadata: Metadata = {
  title: "Corbett Safari FAQ: Permits, Phones, IDs & Timings",
  description:
    "Comprehensive answers to all Jim Corbett safari questions: booking windows, 2026 mobile phone ban, gates, Dhikala night stays, and pricing.",
  alternates: {
    canonical: "/faq",
  },
};

const ALL_FAQS = [
  {
    question: "When does the safari booking window open on the official portal?",
    answer:
      "For Indian nationals, permits for both day safaris and Forest Rest Houses (FRHs) open 45 days in advance on a rolling daily basis at 10:00 AM IST on corbettgov.org. For foreign nationals, permits open 90 days in advance.",
  },
  {
    question: "Is My Corbett Trip the official Corbett Tiger Reserve website?",
    answer:
      "No. My Corbett Trip is an independent private travel company and is not affiliated with Corbett Tiger Reserve. Safari and night-stay permits are issued by CTR in the traveller's name via its official portal (corbettgov.org) and are subject to CTR rules and availability.",
  },
  {
    question: "Can I bring my mobile phone on a jungle safari?",
    answer:
      "No. Under Supreme Court directives enforced from 5 February 2026, mobile phones are strictly barred during safaris in all core and tourism zones. Dedicated digital cameras (DSLR, mirrorless, compact) and binoculars are permitted and encouraged.",
  },
  {
    question: "What identity proof is required at the gate?",
    answer:
      "Since 22 September 2026, the group leader must upload clear front and back scans of an authorized photo ID (Aadhaar, Passport, or Voter ID). All travellers must carry the exact original physical document to the gate. Any typo or mismatch results in denied entry without refund.",
  },
  {
    question: "Can I book a day jeep safari in Dhikala zone?",
    answer:
      "No. Day jeep safaris are strictly prohibited inside Dhikala. Day visitors can only explore Dhikala via the official 16-seater Canter safari. Gypsies are only permitted in Dhikala for guests with confirmed overnight FRH room permits.",
  },
  {
    question: "Are safari permits refundable or transferable if my plans change?",
    answer:
      "No. Corbett Tiger Reserve permits are 100% non-refundable and non-transferable under all circumstances. Once issued by CTR, names, dates, shifts, and vehicles cannot be altered.",
  },
  {
    question: "Is non-vegetarian food or alcohol allowed inside the tiger reserve?",
    answer:
      "No. Non-vegetarian food, alcohol, tobacco, firecrackers, and loud music are strictly prohibited throughout all Forest Rest Houses and core zones. Only vegetarian food is served at forest canteens.",
  },
  {
    question: "What clothes should we wear on a safari?",
    answer:
      "Wear muted earth tones such as khaki, olive, beige, dark green, and grey. Avoid bright colors (red, white, yellow) which startle wildlife. In winter (Nov–Feb), bring heavy thermal layers for early morning open gypsy drives.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/safari cost baner.png"
              alt="Jim Corbett Frequently Asked Questions and Field Knowledge"
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
                Knowledge Base
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Jim Corbett Safari FAQ
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Clear, factual answers to essential questions regarding official Corbett Tiger
                Reserve permits, gates, 2026 regulations, and logistics.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FaqAccordion items={ALL_FAQS} title="Frequently Asked Questions" />

          {/* Form */}
          <div className="mt-12">
            <LeadForm sourceSlug="faq-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

