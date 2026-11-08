import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { officialFees } from "@/content/fees";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import {
  IconCanter,
  IconShieldCheck,
  IconCheck,
  IconCalendar,
  IconArrowRight,
} from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Dhikala Canter Safari Booking, Price & Timings (2026)",
  description:
    "Official 16-seater Canter safari into Dhikala zone, Corbett Tiger Reserve. Seat prices (₹1,500 + GST), boarding points at Ramnagar and Dhangarhi, and booking guidelines.",
  alternates: {
    canonical: "/canter-safari",
  },
};

const CANTER_FAQS = [
  {
    question: "Why is the Canter safari only available in Dhikala?",
    answer:
      "Because Corbett Tiger Reserve prohibits day jeeps in the Dhikala core to protect wildlife from traffic congestion. The 16-seater open Canter provides day visitors their only legal way to access the Dhikala Chaur without staying overnight in a Forest Rest House.",
  },
  {
    question: "Where do we board the Canter safari?",
    answer:
      "Canters board at two locations: the Corbett Reception Office in Ramnagar town and Dhangarhi Gate (entry barrier to Dhikala). The bus operates strictly on schedule and will not wait for late passengers.",
  },
  {
    question: "What is the official seat cost?",
    answer:
      "Official CTR pricing: ₹1,500 + 18% GST per seat for Indian nationals, and ₹3,000 + 18% GST per seat for foreign visitors. A maximum of 4 seats can be reserved in a single transaction.",
  },
  {
    question: "What should we carry on a Canter safari?",
    answer:
      "Carry your original government photo ID (mandatory at Dhangarhi gate), water in a reusable steel bottle (no plastic), warm thermal jackets (especially in morning winter slots), and a camera with telephoto capability. Remember: mobile phones are barred inside core zones.",
  },
];

export default function CanterSafariPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/dhikala night stay banner.png"
              alt="Dhikala 16-Seater Canter Safari in Corbett Tiger Reserve"
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
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="ochre">Dhikala Zone Exclusively</Badge>
                <Badge variant="mist">15 Nov – 15 Jun</Badge>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Dhikala Canter Safari Expeditions
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                The only day-access safari into the core of Corbett Tiger Reserve. Board the official
                16-seater open canter from Ramnagar or Dhangarhi gate for a magnificent 5-hour
                journey through the Patli Dun valley and Dhikala Chaur grasslands.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Key Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-cream border border-sal-forest/15 p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block mb-1">
                Vehicle Type
              </span>
              <span className="font-serif text-lg font-bold text-sal-forest">
                16-Seater Open Safari Bus
              </span>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block mb-1">
                Indian Fare
              </span>
              <span className="font-serif text-lg font-bold text-sal-forest">
                ₹1,500 + 18% GST / Seat
              </span>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block mb-1">
                Foreign Fare
              </span>
              <span className="font-serif text-lg font-bold text-sal-forest">
                ₹3,000 + 18% GST / Seat
              </span>
            </div>

            <div className="bg-cream border border-sal-forest/15 p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sal-forest/60 block mb-1">
                Boarding Points
              </span>
              <span className="font-serif text-lg font-bold text-sal-forest">
                Ramnagar & Dhangarhi Gate
              </span>
            </div>
          </div>

          {/* Important Rules Box */}
          <div className="bg-sal-forest text-cream p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-tiger-ochre">
              <IconShieldCheck size={16} />
              <span>Critical Canter Boarding Protocols</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream">
              Strict Gate Timings & Regulations
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/80 max-w-3xl">
              <li className="flex items-start gap-2.5">
                <span className="text-tiger-ochre font-bold">•</span>
                <span>
                  <strong>Strict Departure Policy:</strong> The Canter leaves exactly on government gate schedule. If you arrive late, the bus departs without you, and permits are non-refundable.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-tiger-ochre font-bold">•</span>
                <span>
                  <strong>4-Seat Transaction Limit:</strong> CTR permits only 4 seats per booking transaction to prevent commercial hoarding.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-tiger-ochre font-bold">•</span>
                <span>
                  <strong>Mobile Phone Prohibition:</strong> As in all core zones, mobile phones are strictly barred by Supreme Court order. Bring dedicated cameras.
                </span>
              </li>
            </ul>
          </div>

          {/* Mandatory Transparency Notice */}
          <div className="bg-cream border border-sal-forest/15 p-6 flex items-start gap-3.5">
            <IconShieldCheck size={24} className="text-tiger-ochre shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed">
              <p className="mb-1 font-semibold text-sal-forest">
                Official CTR Permit Transparency:
              </p>
              <p>{businessConfig.officialPermitDisclaimer}</p>
              <p className="text-[11px] font-mono text-sal-forest/60 mt-1">
                {officialFees.disclaimer}
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={CANTER_FAQS} title="Canter Safari FAQs" />
          </div>

          {/* Lead Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
                Reserve Seats
              </span>
              <h2 className="font-serif text-3xl font-bold text-sal-forest">
                Check Canter Seat Availability
              </h2>
            </div>
            <LeadForm initialInterest="Safari Only" sourceSlug="canter-safari-page" />
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar packageName="Dhikala Canter" />
    </div>
  );
}

