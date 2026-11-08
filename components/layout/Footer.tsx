import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { officialFees } from "@/content/fees";
import { IconWhatsApp, IconPhone, IconShieldCheck } from "@/components/ui/CustomIcons";

export const Footer = () => {
  return (
    <footer className="bg-sal-forest text-cream border-t border-cream/10 pt-16 pb-28 sm:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mandatory Transparency Callout Box */}
        <div className="bg-sal-forest/60 border border-cream/20 p-5 sm:p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2 bg-tiger-ochre/20 text-tiger-ochre shrink-0">
              <IconShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-cream mb-1 font-semibold tracking-wide">
                Statutory Notice & Operational Transparency
              </h3>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                {businessConfig.officialPermitDisclaimer}
              </p>
              <p className="text-cream/60 text-xs mt-2 font-mono">
                {officialFees.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Assets/logo my corbett trip.png"
                alt="My Corbett Trip Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain brightness-110"
              />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-cream uppercase block">
                {businessConfig.name}
              </span>
            </div>
            <p className="text-cream/70 text-xs sm:text-sm leading-relaxed mb-4">
              {businessConfig.tagline}. We connect discerning wildlife enthusiasts with licensed naturalists, official CTR permits, and heritage lodge hospitality.
            </p>
            {businessConfig.utdbRegistrationNo && (
              <p className="text-xs text-cream/70 mb-1">
                <span className="font-medium text-cream">UTDB Reg:</span> {businessConfig.utdbRegistrationNo}
              </p>
            )}
            {businessConfig.gstin && (
              <p className="text-xs text-cream/70 mb-1">
                <span className="font-medium text-cream">GSTIN:</span> {businessConfig.gstin}
              </p>
            )}
            {businessConfig.yearsInBusiness && (
              <p className="text-xs text-cream/70">
                <span className="font-medium text-cream">Experience:</span> {businessConfig.yearsInBusiness} in Jim Corbett
              </p>
            )}
          </div>

          {/* Col 2: CTR Tourism Zones */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-tiger-ochre mb-4">
              Tourism Zones
            </h4>
            <ul className="space-y-2 text-xs text-cream/80">
              <li>
                <Link href="/safari-zones/dhikala" className="hover:text-cream transition-colors">
                  Dhikala Zone (Canter & FRH only)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/bijrani" className="hover:text-cream transition-colors">
                  Bijrani Zone (Jeep & FRH)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/jhirna" className="hover:text-cream transition-colors">
                  Jhirna Zone (Year-Round)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/dhela" className="hover:text-cream transition-colors">
                  Dhela Zone (Year-Round)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/garjiya" className="hover:text-cream transition-colors">
                  Garjiya Zone (Oct 15 – Jun 30)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/durga-devi" className="hover:text-cream transition-colors">
                  Durga Devi Zone (Birding)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/pakhro" className="hover:text-cream transition-colors">
                  Pakhro Zone (Kotdwar)
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/sonanadi" className="hover:text-cream transition-colors">
                  Sonanadi Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/safari-zones/beyond-the-reserve" className="hover:text-cream transition-colors text-cream/60">
                  Beyond Reserve (Sitabani / Phato)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Expeditions & Planning */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-tiger-ochre mb-4">
              Planning & Regulations
            </h4>
            <ul className="space-y-2 text-xs text-cream/80">
              <li>
                <Link href="/packages" className="hover:text-cream transition-colors">
                  Curated Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/dhikala-night-stay" className="hover:text-cream transition-colors">
                  Dhikala Night Stay Guide
                </Link>
              </li>
              <li>
                <Link href="/safari-cost" className="hover:text-cream transition-colors">
                  Safari Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/safari-rules" className="hover:text-cream transition-colors">
                  2026 Rules (Phone Ban & ID)
                </Link>
              </li>
              <li>
                <Link href="/best-time-to-visit" className="hover:text-cream transition-colors">
                  Best Time to Visit
                </Link>
              </li>
              <li>
                <Link href="/how-to-reach" className="hover:text-cream transition-colors">
                  How to Reach Corbett
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-cream transition-colors">
                  Naturalist Field Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cream transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Concierge */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-tiger-ochre mb-4">
              Concierge Desk
            </h4>
            <div className="space-y-3 text-xs text-cream/80">
              <p className="leading-relaxed">
                {businessConfig.address}
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="flex items-center gap-2 hover:text-cream transition-colors py-1"
                >
                  <IconPhone size={14} className="text-tiger-ochre" />
                  <span>{businessConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}?text=Hi%2C%20I%20have%20an%20enquiry%20regarding%20Jim%20Corbett.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cream transition-colors py-1"
                >
                  <IconWhatsApp size={14} className="text-tiger-ochre" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
              <p className="text-[11px] text-cream/60 pt-1">
                {businessConfig.callbackPromise}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© 2026 {businessConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-cream transition-colors">
              Privacy Policy (DPDP 2023)
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-cream transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cancellation-policy" className="hover:text-cream transition-colors">
              Cancellation Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-cream transition-colors">
              About Us
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-cream transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
