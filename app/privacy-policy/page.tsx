import React from "react";
import type { Metadata } from "next";
import { businessConfig } from "@/content/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy (DPDP Act 2023 Compliant) | My Corbett Trip",
  description: "Our commitment to data governance, minimization, and privacy under India's Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-riverstone">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="bg-cream border border-sal-forest/15 p-6 sm:p-10 text-sal-forest space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block">
            Data Governance & Protection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sal-forest">
            Privacy Policy (DPDP Act 2023 Compliant)
          </h1>
          <p className="text-xs font-mono text-sal-forest/60">
            Last updated: 06 November 2026 • Governed under the Digital Personal Data Protection Act, 2023 (India)
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-sal-forest/85 leading-relaxed pt-4 border-t border-sal-forest/10">
            <h2 className="font-serif text-xl font-bold text-sal-forest">1. Introduction & Scope</h2>
            <p>
              My Corbett Trip (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and personal data of travellers. This policy outlines how we collect, process, store, and safeguard your data when you submit safari enquiries on our website ({businessConfig.domain}).
            </p>

            <h2 className="font-serif text-xl font-bold text-sal-forest">2. Personal Data We Collect</h2>
            <p>We practice strict data minimization. We collect only what is legally necessary to verify official Corbett Tiger Reserve permits:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Full Name and contact mobile number (for communication and permit generation).</li>
              <li>City of residence and travel party composition (adults and children count).</li>
              <li>Government photo ID document numbers and scans (required by Forest Department gate authorities).</li>
              <li>Technical data: IP address, device user-agent, and anonymized conversion tokens.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-sal-forest">3. Purpose of Data Processing</h2>
            <p>Your data is processed strictly for:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Generating authorized CTR safari and night-stay permits via corbettgov.org.</li>
              <li>Transmitting requested itineraries and quotes via WhatsApp, SMS, phone, or email.</li>
              <li>Complying with statutory security directives of the Uttarakhand Forest Department.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-sal-forest">4. Non-Disclosure & Zero Spam Promise</h2>
            <p>
              We <strong>never sell, lease, or trade</strong> your personal information to third-party telemarketers or advertisers. Your data is shared exclusively with official park authorities (CTR) and registered vehicle operators required to fulfill your booked safari.
            </p>

            <h2 className="font-serif text-xl font-bold text-sal-forest">5. Your Rights as a Data Principal</h2>
            <p>Under the DPDP Act 2023, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Request a summary of personal data held about you.</li>
              <li>Request correction or deletion of outdated personal data.</li>
              <li>Withdraw your consent for non-essential communication at any time.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-sal-forest">6. Grievance Officer & Contact</h2>
            <p>
              For data privacy inquiries or grievances, contact our Data Governance Desk at: <a href={`mailto:${businessConfig.email}`} className="text-tiger-ochre underline">{businessConfig.email}</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

