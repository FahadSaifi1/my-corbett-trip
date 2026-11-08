import React from "react";
import type { Metadata } from "next";
import { partnerStays } from "@/content/stays";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";

export const metadata: Metadata = {
  title: "Handpicked Resorts & Wilderness Lodges | Jim Corbett",
  description: "Curated wildlife stays in the Ramnagar and Dhikuli corridor: riverfront luxury, heritage bungalows, and eco-cottages.",
  alternates: {
    canonical: "/stays",
  },
};

export default function StaysPage() {
  const hasStays = partnerStays.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        <section className="bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
                Curated Hospitality
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Handpicked Wilderness Stays in Corbett
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Rather than listing 200 random hotel rooms, we handpick boutique riverfront properties
                and eco-lodges along the Kosi river and Ramnagar buffer.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {hasStays ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerStays.map((stay) => (
                <div key={stay.id} className="bg-cream border border-sal-forest/15 p-6">
                  <h3 className="font-serif text-xl font-bold text-sal-forest">{stay.name}</h3>
                  <p className="text-xs text-sal-forest/70">{stay.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream border border-sal-forest/15 p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-tiger-ochre block mb-2">
                Curated Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest mb-3">
                Custom Resort & Luxury Lodge Pairing
              </h2>
              <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed max-w-xl mx-auto mb-6">
                We partner with boutique properties across Dhikuli, Marchula, and Ramnagar outskirts
                (including riverfront villas and heritage bungalows). Tell us your budget tier and
                dates, and we will pair you with the ideal verified stay.
              </p>
              <div className="max-w-xl mx-auto text-left">
                <LeadForm initialInterest="Safari + Stay Package" sourceSlug="stays-inquiry" />
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

