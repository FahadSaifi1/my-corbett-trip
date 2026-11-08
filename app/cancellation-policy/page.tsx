import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IconShieldCheck } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | My Corbett Trip",
  description: "Official CTR permit non-refundability rules and private lodge cancellation timelines.",
  alternates: {
    canonical: "/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="bg-cream border border-sal-forest/15 p-6 sm:p-10 text-sal-forest space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block">
            Clear Financial Guidelines
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs font-mono text-sal-forest/60">
            Last updated: 06 November 2026
          </p>

          <div className="space-y-5 text-xs sm:text-sm text-sal-forest/85 leading-relaxed pt-4 border-t border-sal-forest/10">
            {/* Section 1: Official Permits */}
            <div className="bg-white border border-sal-forest/15 p-5">
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-sal-forest mb-2">
                <IconShieldCheck size={18} className="text-tiger-ochre" />
                <span>1. Official Corbett Tiger Reserve (CTR) Permits</span>
              </div>
              <p className="mb-2">
                Under statutory rules established by the Corbett Tiger Reserve and Uttarakhand Forest Department,{" "}
                <strong>all safari and Forest Rest House (FRH) entry permits are 100% non-refundable and non-transferable under all circumstances</strong>.
              </p>
              <p className="text-[11px] font-mono text-sal-forest/70">
                Once issued on corbettgov.org, dates, shifts, zones, and traveller names cannot be cancelled, refunded, or swapped.
              </p>
            </div>

            {/* Section 2: Private Lodge Stays */}
            <div>
              <h2 className="font-serif text-xl font-bold text-sal-forest mb-2">
                2. Private Resort & Hotel Stays
              </h2>
              <p className="mb-2">
                Cancellation terms for hotel and private resort accommodations booked through our packages follow specific notice windows:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>30+ Days Prior to Check-in:</strong> 85% refund on the accommodation portion (15% administrative & banking fee retained).
                </li>
                <li>
                  <strong>15 to 29 Days Prior to Check-in:</strong> 50% refund on the accommodation portion.
                </li>
                <li>
                  <strong>Less than 15 Days Prior to Check-in:</strong> No refund applicable as partner lodges lock rooms.
                </li>
              </ul>
            </div>

            {/* Section 3: Weather & Force Majeure */}
            <div>
              <h2 className="font-serif text-xl font-bold text-sal-forest mb-2">
                3. Weather, Road Closures & Force Majeure
              </h2>
              <p>
                In the rare event that CTR administration officially closes a zone entry gate due to extreme flash flooding or forest management reasons, any refund issued by CTR is credited back to the traveller. My Corbett Trip cannot be held responsible for weather disruptions beyond human control.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

