"use client";

import React, { useState } from "react";
import Link from "next/link";
import { businessConfig } from "@/content/config";
import { IconWhatsApp, IconPhone } from "@/components/ui/CustomIcons";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-sal-forest/10">
      {/* Top Advisory Bar */}
      <div className="bg-sal-forest text-cream text-[11px] sm:text-xs py-1.5 px-4 tracking-wide text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <span className="truncate">
            Independent private travel agency • Official permits processed via{" "}
            <span className="underline decoration-cream/40">corbettgov.org</span> in your name
          </span>
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {businessConfig.callbackPromise && (
              <span className="text-cream/80">{businessConfig.callbackPromise}</span>
            )}
            <a
              href={`https://wa.me/${businessConfig.whatsapp}?text=Hello%20My%20Corbett%20Trip%2C%20I%20would%20like%20to%20plan%20a%20safari.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-tiger-ochre hover:text-white transition-colors"
            >
              <IconWhatsApp size={14} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-sal-forest uppercase transition-colors group-hover:text-tiger-ochre">
              My Corbett Trip
            </span>
            <span className="text-[10px] tracking-[0.2em] text-sal-forest/60 uppercase -mt-1">
              Naturalist Field Expeditions
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-sal-forest/80">
            <Link href="/safari-zones" className="hover:text-tiger-ochre transition-colors py-2">
              Safari Zones
            </Link>
            <Link href="/packages" className="hover:text-tiger-ochre transition-colors py-2">
              Packages
            </Link>
            <Link href="/dhikala-night-stay" className="hover:text-tiger-ochre transition-colors py-2">
              Dhikala Night Stay
            </Link>
            <Link href="/jeep-safari" className="hover:text-tiger-ochre transition-colors py-2">
              Jeep Safari
            </Link>
            <Link href="/safari-cost" className="hover:text-tiger-ochre transition-colors py-2">
              Cost Breakdown
            </Link>
            <Link href="/safari-rules" className="hover:text-tiger-ochre transition-colors py-2">
              2026 Rules
            </Link>
            <Link href="/journal" className="hover:text-tiger-ochre transition-colors py-2">
              Journal
            </Link>
          </nav>

          {/* CTA & Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-sal-forest hover:text-tiger-ochre transition-colors px-2 py-2"
              aria-label="Call our concierge"
            >
              <IconPhone size={15} />
              <span className="hidden xl:inline">{businessConfig.phoneDisplay}</span>
            </a>
            <Link
              href="/#lead-planner"
              className="inline-flex items-center justify-center px-4 py-2 bg-sal-forest text-cream text-xs uppercase tracking-wider font-medium hover:bg-sal-forest/90 active:scale-95 transition-all shadow-sm"
            >
              Plan My Safari
            </Link>
          </div>

          {/* Mobile Menu Button (min 44px tap target) */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 -mr-2 text-sal-forest hover:text-tiger-ochre transition-colors focus:outline-none focus:ring-1 focus:ring-sal-forest"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cream border-b border-sal-forest/15 px-5 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm uppercase tracking-wider font-medium text-sal-forest/90">
            <Link
              href="/safari-zones"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Safari Zones (All 8 Zones)
            </Link>
            <Link
              href="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Curated Packages
            </Link>
            <Link
              href="/dhikala-night-stay"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Dhikala FRH Night Stay
            </Link>
            <Link
              href="/jeep-safari"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Jeep Safari
            </Link>
            <Link
              href="/canter-safari"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Canter Safari
            </Link>
            <Link
              href="/safari-cost"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Safari Cost Calculator
            </Link>
            <Link
              href="/safari-rules"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              2026 Rules (Phone Ban & ID)
            </Link>
            <Link
              href="/best-time-to-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Best Time to Visit
            </Link>
            <Link
              href="/how-to-reach"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              How to Reach
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              Naturalist Journal
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sal-forest/5"
            >
              About & Ethics
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/#lead-planner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-sal-forest text-cream text-xs uppercase tracking-wider font-medium"
            >
              Plan My Safari
            </Link>
            <a
              href={`https://wa.me/${businessConfig.whatsapp}?text=Hi%2C%20I%20am%20planning%20a%20Jim%20Corbett%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-tiger-ochre text-white text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
            >
              <IconWhatsApp size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

