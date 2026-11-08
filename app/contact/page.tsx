import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LeadForm } from "@/components/modules/LeadForm";
import { IconWhatsApp, IconPhone, IconShieldCheck, IconCompass } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "Contact Concierge Desk | My Corbett Trip",
  description:
    "Get in touch with My Corbett Trip in Ramnagar. Direct phone, WhatsApp concierge, office address, and safari booking inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-sal-forest text-cream py-14 sm:py-20 border-b border-sal-forest/20 overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <Image
              src="/Assets/packages banner.png"
              alt="Contact My Corbett Trip Ramnagar Concierge"
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
                Concierge Desk
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
                Connect With Our Corbett Team
              </h1>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Have questions regarding zone availability, Dhikala 45-day rolling permits, or
                resort stays? Reach our local desk directly via phone, WhatsApp, or the form below.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-cream border border-sal-forest/15 p-6 sm:p-7 space-y-5">
                <h2 className="font-serif text-2xl font-bold text-sal-forest">
                  Ramnagar Concierge Office
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-sal-forest/85">
                  <div className="flex items-start gap-3">
                    <IconCompass size={18} className="text-tiger-ochre shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sal-forest block">Office Address:</strong>
                      <span>{businessConfig.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IconPhone size={18} className="text-tiger-ochre shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sal-forest block">Telephone Line:</strong>
                      <a href={`tel:${businessConfig.phone}`} className="hover:text-tiger-ochre">
                        {businessConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IconWhatsApp size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sal-forest block">WhatsApp Desk:</strong>
                      <a
                        href={`https://wa.me/${businessConfig.whatsapp}?text=Hello%20My%20Corbett%20Trip%2C%20I%20have%20an%20enquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-tiger-ochre underline"
                      >
                        {businessConfig.whatsappDisplay} (Fast Reply)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-tiger-ochre text-base shrink-0 mt-0.5">✉</span>
                    <div>
                      <strong className="text-sal-forest block">Email Desk:</strong>
                      <a href={`mailto:${businessConfig.email}`} className="hover:text-tiger-ochre">
                        {businessConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sal-forest/10 text-xs text-sal-forest/70">
                  <span className="font-semibold text-sal-forest block mb-0.5">Response Protocol:</span>
                  <span>{businessConfig.callbackPromise}</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-sal-forest text-cream p-6">
                <h3 className="font-serif text-lg font-bold text-cream mb-2">
                  Travelling Within 7 Days?
                </h3>
                <p className="text-xs text-cream/80 mb-4 leading-relaxed">
                  For urgent departures, message us on WhatsApp with your date and headcount for
                  real-time zone availability checks.
                </p>
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}?text=Hi%2C%20I%20need%20urgent%20safari%20permits%20within%207%20days.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 rounded shadow-sm hover:opacity-90"
                >
                  <IconWhatsApp size={16} />
                  <span>Urgent WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Form (7 cols) */}
            <div className="lg:col-span-7">
              <LeadForm sourceSlug="contact-page" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

