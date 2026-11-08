import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IconPugmark, IconArrowRight } from "@/components/ui/CustomIcons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 sm:py-28">
        <div className="max-w-xl text-center bg-cream border border-sal-forest/15 p-8 sm:p-12 shadow-sm">
          <div className="w-16 h-16 bg-tiger-ochre/15 text-tiger-ochre rounded-full flex items-center justify-center mx-auto mb-6">
            <IconPugmark size={32} />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-2">
            Lost in the Buffer
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest mb-3">
            Trail Not Found (404)
          </h1>

          <p className="text-xs sm:text-sm text-sal-forest/80 leading-relaxed mb-8 max-w-md mx-auto">
            The forest track you are looking for has either shifted or does not exist. Let us guide
            you back to the main gates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto py-3 px-6 bg-sal-forest text-cream text-xs uppercase tracking-wider font-medium hover:bg-sal-forest/90 transition-all text-center"
            >
              Back to Home Base
            </Link>
            <Link
              href="/safari-zones"
              className="w-full sm:w-auto py-3 px-6 bg-transparent border border-sal-forest/30 text-sal-forest text-xs uppercase tracking-wider font-medium hover:bg-sal-forest/5 transition-all text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>Explore All Zones</span>
              <IconArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

