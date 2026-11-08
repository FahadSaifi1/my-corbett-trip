"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { businessConfig } from "@/content/config";
import { IconCheck, IconShieldCheck } from "@/components/ui/CustomIcons";
import {
  TopographicContoursIllustration,
  BotanicalLeafAccent,
} from "@/components/illustrations/WildlifeIllustrations";

interface LeadFormProps {
  initialInterest?: string;
  sourceSlug?: string;
  className?: string;
  compact?: boolean;
}

export const LeadForm = ({
  initialInterest = "Safari + Stay Package",
  sourceSlug = "organic-web",
  className = "",
  compact = false,
}: LeadFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Expedition Details
  const [travelMonth, setTravelMonth] = useState("Next Month");
  const [adults, setAdults] = useState("2");
  const [childrenCount, setChildrenCount] = useState("0");
  const [interest, setInterest] = useState(initialInterest);

  // Contact Details
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);

  // Honeypot field for bot filtering
  const [hpField, setHpField] = useState("");

  // Inline Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!travelMonth) {
      errs.travelMonth = "Please select your planned travel month";
    }

    if (!interest) {
      errs.interest = "Please select your primary interest";
    }

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name";
    }

    // Clean mobile number (remove spaces, dashes, +91, 0 prefix)
    const cleanedMobile = mobile.replace(/[\s\-()]/g, "").replace(/^(\+91|0)/, "");
    if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      errs.mobile = "Please enter a valid 10-digit Indian mobile number (+91)";
    }

    if (!city.trim()) {
      errs.city = "Please enter your departure city (e.g. Delhi, Gurgaon)";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!consent) {
      errs.consent = "Please check the consent box to receive itinerary updates";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Check honeypot
    if (hpField) {
      router.push("/thank-you");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        travelMonth,
        adults: parseInt(adults, 10),
        children: parseInt(childrenCount, 10),
        interest,
        fullName: fullName.trim(),
        mobile: mobile.trim(),
        city: city.trim(),
        email: email.trim(),
        consent,
        sourceSlug,
        landingUrl: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again or WhatsApp us.");
      }

      // Store in session storage for thank you screen
      if (typeof window !== "undefined") {
        sessionStorage.setItem("mct_last_lead", JSON.stringify(data));
      }

      router.push(`/thank-you?leadId=${encodeURIComponent(data.leadId || "")}`);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Submission failed. Please WhatsApp us directly.";
      setErrorMessage(errorMsg);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="lead-planner"
      className={`relative bg-cream border border-sal-forest/15 ${
        compact ? "p-3.5 sm:p-4" : "p-5 sm:p-7"
      } text-sal-forest shadow-sm overflow-hidden ${className}`}
    >
      <TopographicContoursIllustration color="#1F2A1F" className="opacity-[0.03]" />

      {/* Header */}
      <div className={`relative z-10 ${compact ? "mb-2.5 pb-2" : "mb-5 pb-3"} border-b border-sal-forest/10`}>
        <div className="flex items-center gap-1.5">
          <BotanicalLeafAccent size={compact ? 13 : 16} color="#C8782A" />
          <span className={`${compact ? "text-[10px]" : "text-[11px]"} font-mono uppercase tracking-[0.2em] text-tiger-ochre block font-semibold`}>
            Official Permit & Stay Concierge
          </span>
        </div>
        <h3 className={`font-serif ${compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"} font-bold tracking-tight text-sal-forest mt-0.5`}>
          {compact ? `Plan ${initialInterest}` : "Plan Your Corbett Safari & Stay"}
        </h3>
      </div>

      {errorMessage && (
        <div className="mb-3 p-2 bg-red-50 border border-red-200 text-red-800 text-xs">
          {errorMessage}{" "}
          <a
            href={`https://wa.me/${businessConfig.whatsapp}?text=Hi%2C%20I%20tried%20submitting%20an%20enquiry%20for%20Jim%20Corbett.`}
            className="underline font-medium text-red-900 ml-1"
          >
            WhatsApp us directly.
          </a>
        </div>
      )}

      {/* Unified Single-Step Form */}
      <form onSubmit={handleSubmit} className={`relative z-10 ${compact ? "space-y-2.5" : "space-y-4"}`}>
        {/* Honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="company_title_check"
            value={hpField}
            onChange={(e) => setHpField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Travel Month & Primary Interest */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-2" : "gap-4"}`}>
          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Planned Month *
            </label>
            <select
              value={travelMonth}
              onChange={(e) => setTravelMonth(e.target.value)}
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            >
              <option value="This Month">This Month (Immediate / Urgent)</option>
              <option value="Next Month">Next Month</option>
              <option value="November 2026">November 2026 (Dhikala opens Nov 15)</option>
              <option value="December 2026">December 2026 (Winter Birds)</option>
              <option value="January 2027">January 2027 (Winter Chill)</option>
              <option value="February 2027">February 2027 (Spring Transition)</option>
              <option value="March 2027">March 2027 (Holi Weekend)</option>
              <option value="April 2027">April 2027 (Spring Wildlife)</option>
              <option value="May 2027">May 2027 (High Tiger Sightings)</option>
              <option value="June 2027">June 2027 (Pre-Monsoon)</option>
              <option value="Monsoon (Jul-Sep)">Monsoon Jul–Sep (Jhirna/Dhela)</option>
            </select>
            {errors.travelMonth && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.travelMonth}</p>
            )}
          </div>

          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Primary Interest *
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            >
              <option value="Safari + Stay Package">Safari + Resort Stay</option>
              <option value="Dhikala FRH Night Stay">Dhikala Forest Rest House</option>
              <option value="Safari Only">Safari Permits Only (Jeep/Canter)</option>
              <option value="Family Holiday">Family Holiday with Sightseeing</option>
              <option value="Photography Expedition">Photography Expedition</option>
              <option value="Corporate Offsite">Corporate Offsite</option>
            </select>
            {errors.interest && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.interest}</p>
            )}
          </div>
        </div>

        {/* Row 2: Adults & Children Count */}
        <div className={`grid grid-cols-2 ${compact ? "gap-2" : "gap-4"}`}>
          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Adults (Age 12+) *
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults (1 Jeep)</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5 Adults</option>
              <option value="6">6 Adults (Full Gypsy Max)</option>
              <option value="8">7–10 Adults (2 Gypsies)</option>
              <option value="15">10+ Adults (Group)</option>
            </select>
          </div>

          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Children (Under 12)
            </label>
            <select
              value={childrenCount}
              onChange={(e) => setChildrenCount(e.target.value)}
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            >
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3+ Children</option>
            </select>
          </div>
        </div>

        <p className={`${compact ? "text-[10px] leading-tight" : "text-[11px]"} text-sal-forest/70 font-mono`}>
          * 1 Gypsy accommodates max 6 adults + 2 children under 12. Dhikala Canter holds 16 passengers.
        </p>

        {/* Row 3: Name & Mobile */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-2 pt-1" : "gap-4 pt-1"} border-t border-sal-forest/10`}>
          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Your Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Saleem Warsi"
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Mobile (+91 WhatsApp) *
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="e.g. 84750 87411"
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            />
            {errors.mobile && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* Row 4: Departure City & Optional Email */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-2" : "gap-4"}`}>
          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              City of Departure *
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Delhi, Noida"
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            />
            {errors.city && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.city}</p>
            )}
          </div>

          <div>
            <label className={`block ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"} uppercase tracking-wider font-medium text-sal-forest/80`}>
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`w-full bg-white border border-sal-forest/20 ${compact ? "px-2 py-1.5 text-xs" : "px-3 py-2.5 text-sm"} text-sal-forest focus:outline-none focus:border-sal-forest`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>
            )}
          </div>
        </div>

        {/* DPDP Act 2023 Consent Checkbox */}
        <div className={compact ? "pt-0.5" : "pt-1"}>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 rounded border-sal-forest/30 text-sal-forest focus:ring-sal-forest shrink-0"
            />
            <span className={`${compact ? "text-[10px] leading-tight" : "text-xs leading-snug"} text-sal-forest/80`}>
              I agree to be contacted via WhatsApp/phone for this Corbett enquiry (DPDP Act 2023 compliant).
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-red-600 mt-0.5">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className={compact ? "pt-1" : "pt-2"}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${compact ? "py-2.5 px-4 text-xs font-semibold" : "py-3.5 px-6 text-xs sm:text-sm font-medium"} bg-tiger-ochre text-white uppercase tracking-wider hover:bg-[#b5671f] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50`}
          >
            {isSubmitting ? (
              <span>Checking Availability...</span>
            ) : (
              <>
                <span>Request Customised Itinerary</span>
                <IconCheck size={compact ? 14 : 16} />
              </>
            )}
          </button>
        </div>

        <div className={`flex items-center justify-center gap-1.5 ${compact ? "pt-0.5 text-[10px]" : "pt-1 text-[11px]"} text-sal-forest/60`}>
          <IconShieldCheck size={compact ? 12 : 13} className="text-tiger-ochre shrink-0" />
          <span>Official CTR permits in your name via corbettgov.org</span>
        </div>
      </form>
    </div>
  );
};

