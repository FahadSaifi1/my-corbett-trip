import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  IconCheck,
  IconWhatsApp,
  IconIdCard,
  IconArrowRight,
} from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Enquiry Received | My Corbett Trip",
  description: "Thank you for your safari enquiry. Here are next steps and document requirements.",
  robots: {
    index: false,
    follow: false,
  },
};

async function ThankYouContent({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string }>;
}) {
  const { leadId } = await searchParams;

  return (
    <div className="bg-cream border border-sal-forest/15 p-6 sm:p-10 text-center shadow-sm">
      {/* Success Check Badge */}
      <div className="w-16 h-16 bg-[#25D366]/15 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
        <IconCheck size={32} />
      </div>

      <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
        Safari Request Logged
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest mb-3">
        Thank You. Your Expedition Request is in Motion.
      </h1>

      {leadId && (
        <div className="inline-block px-3 py-1 bg-sal-forest/5 border border-sal-forest/15 text-xs font-mono text-sal-forest mb-6">
          Reference ID: <span className="font-bold text-tiger-ochre">{leadId}</span>
        </div>
      )}

      <p className="text-sm sm:text-base text-sal-forest/80 leading-relaxed mb-8 max-w-xl mx-auto">
        Our local naturalist desk in Ramnagar is checking official Corbett Tiger Reserve quota
        availability for your dates. {businessConfig.callbackPromise}.
      </p>

      {/* Immediate WhatsApp Connect */}
      <div className="mb-10 p-5 bg-sal-forest text-cream text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-cream mb-1">
              Prefer an immediate answer on WhatsApp?
            </h3>
            <p className="text-xs text-cream/80">
              Connect directly with our naturalist team right now.
            </p>
          </div>
          <a
            href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
              `Hello My Corbett Trip, I just submitted enquiry ${leadId || ""}. Could you please check available safari zones?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity shrink-0"
          >
            <IconWhatsApp size={16} />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* What to Keep Ready (CRITICAL 2026 GUIDANCE) */}
      <div className="text-left bg-white border border-sal-forest/15 p-6 mb-8 space-y-4">
        <div className="flex items-center gap-2 font-serif text-lg font-bold text-sal-forest">
          <IconIdCard size={20} className="text-tiger-ochre" />
          <span>What to Keep Ready While We Verify Availability</span>
        </div>

        <ul className="space-y-3 text-xs sm:text-sm text-sal-forest/85">
          <li className="flex items-start gap-2.5">
            <span className="text-tiger-ochre font-bold">1.</span>
            <span>
              <strong>Front & Back Scans of Government ID:</strong> For the primary booking
              leader (Aadhaar, Passport, or Voter ID). Required by CTR gate authorities since 22 Sep 2026.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-tiger-ochre font-bold">2.</span>
            <span>
              <strong>Full Names & Ages:</strong> Exactly matching original ID cards for every
              adult and child. Mismatched details result in gate entry denial without refund.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-tiger-ochre font-bold">3.</span>
            <span>
              <strong>Camera Planning:</strong> Mobile phones are strictly barred during safaris
              by Supreme Court order (enforced Feb 2026). Ensure your camera batteries are
              charged!
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wider text-sal-forest hover:text-tiger-ochre transition-colors"
        >
          <span>Return to Homepage</span>
          <IconArrowRight size={14} />
        </Link>
        <span className="hidden sm:inline text-sal-forest/30">•</span>
        <Link
          href="/safari-rules"
          className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wider text-sal-forest hover:text-tiger-ochre transition-colors"
        >
          <span>Review 2026 Safari Rules</span>
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string }>;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Suspense fallback={<div className="p-12 text-center text-sal-forest">Loading your confirmation...</div>}>
          <ThankYouContent searchParams={searchParams} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
