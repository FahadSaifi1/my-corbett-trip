"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { businessConfig } from "@/content/config";
import { IconCheck, IconArrowRight, IconShieldCheck } from "@/components/ui/CustomIcons";

interface LeadFormProps {
  initialInterest?: string;
  sourceSlug?: string;
  className?: string;
  compact?: boolean;
}

export const LeadForm = ({
  initialInterest = "Safari + Stay",
  sourceSlug = "organic-web",
  className = "",
  compact = false,
}: LeadFormProps) => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Step 1 State
  const [travelMonth, setTravelMonth] = useState("Next Month");
  const [adults, setAdults] = useState("2");
  const [childrenCount, setChildrenCount] = useState("0");
  const [interest, setInterest] = useState(initialInterest);

  // Step 2 State
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [budgetRange, setBudgetRange] = useState("Standard (₹5,000–₹9,000 / night)");
  const [consent, setConsent] = useState(true);

  // Honeypot field for bot filtering
  const [hpField, setHpField] = useState("");

  // Inline Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!travelMonth) errs.travelMonth = "Please select your planned travel month";
    if (!interest) errs.interest = "Please select your primary interest";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: { [key: string]: string } = {};
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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

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
        budgetRange,
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
      const errorMsg = err instanceof Error ? err.message : "Submission failed. Please WhatsApp us directly.";
      setErrorMessage(errorMsg);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="lead-planner"
      className={`bg-cream border border-sal-forest/15 p-5 sm:p-7 text-sal-forest shadow-sm ${className}`}
    >
      {/* Header & Step Indicator */}
      <div className="mb-5 pb-4 border-b border-sal-forest/10 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-tiger-ochre block">
            Official Permit & Stay Concierge
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-sal-forest">
            {step === 1 ? "Customise Your Corbett Expedition" : "Where Shall We Send Your Itinerary?"}
          </h3>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-sal-forest/5 text-sal-forest border border-sal-forest/15">
            Step {step} of 2
          </span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
          {errorMessage}{" "}
          <a
            href={`https://wa.me/${businessConfig.whatsapp}?text=Hi%2C%20I%20tried%20submitting%20an%20enquiry%20for%20Jim%20Corbett.`}
            className="underline font-medium text-red-900 ml-1"
          >
            Click here to WhatsApp us directly.
          </a>
        </div>
      )}

      {/* STEP 1: Dates, Group Size, Interest */}
      {step === 1 && (
        <form onSubmit={handleNextStep} className="space-y-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Planned Travel Month / Window *
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              >
                <option value="This Month">This Month (Immediate / Urgent)</option>
                <option value="Next Month">Next Month</option>
                <option value="November 2026">November 2026 (Dhikala opens Nov 15)</option>
                <option value="December 2026">December 2026 (Winter Birds & Cool Mist)</option>
                <option value="January 2027">January 2027 (Peak Winter Chill)</option>
                <option value="February 2027">February 2027 (Spring Transition)</option>
                <option value="March 2027">March 2027 (Holi Weekend / Pleasant)</option>
                <option value="April 2027">April 2027 (Spring Wildlife)</option>
                <option value="May 2027">May 2027 (High Tiger Sighting at Waterholes)</option>
                <option value="June 2027">June 2027 (Pre-Monsoon Tracking)</option>
                <option value="Monsoon (Jul-Sep)">Monsoon Jul–Sep (Jhirna & Dhela open)</option>
              </select>
              {errors.travelMonth && (
                <p className="text-xs text-red-600 mt-1">{errors.travelMonth}</p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Primary Interest *
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              >
                <option value="Safari + Stay Package">Safari + Resort Stay Package</option>
                <option value="Dhikala FRH Night Stay">Dhikala Forest Rest House Night Stay</option>
                <option value="Safari Only">Safari Permits Only (Day Jeep / Canter)</option>
                <option value="Family Holiday">Family Holiday with Sightseeing</option>
                <option value="Photography Expedition">Photography Expedition (Multi-Safari)</option>
                <option value="Corporate Offsite">Corporate / Large Group Offsite</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Adults (Age 12+) *
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
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
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Children (Under 12)
              </label>
              <select
                value={childrenCount}
                onChange={(e) => setChildrenCount(e.target.value)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3+ Children</option>
              </select>
            </div>
          </div>

          <p className="text-[11px] text-sal-forest/70">
            * 1 Gypsy accommodates max 6 adults + 2 children under 12. Dhikala Canter holds 16 passengers.
          </p>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-6 bg-sal-forest text-cream font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-sal-forest/90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Proceed to Step 2</span>
            <IconArrowRight size={16} />
          </button>
        </form>
      )}

      {/* STEP 2: Contact Details & Consent */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Vikram Malhotra"
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Mobile Number (+91 WhatsApp) *
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              />
              {errors.mobile && (
                <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                City of Residence / Departure *
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. New Delhi, Noida, Mumbai"
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              />
              {errors.city && (
                <p className="text-xs text-red-600 mt-1">{errors.city}</p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
              Preferred Resort / Budget Style
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full bg-white border border-sal-forest/20 px-3 py-2.5 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
            >
              <option value="Comfort Lodge (₹4,000–₹6,500/night)">
                Comfort Forest Lodge (₹4,000–₹6,500 / night)
              </option>
              <option value="Premium Riverside (₹7,000–₹12,000/night)">
                Premium Riverside Resort (₹7,000–₹12,000 / night)
              </option>
              <option value="Ultra Luxury Sanctuary (₹15,000+/night)">
                Ultra Luxury Boutique Lodge (₹15,000+ / night)
              </option>
              <option value="Safari Only (No Hotel Required)">
                Safari Coordination Only (No Hotel Needed)
              </option>
            </select>
          </div>

          {/* DPDP Act 2023 Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-sal-forest/30 text-sal-forest focus:ring-sal-forest"
              />
              <span className="text-xs text-sal-forest/80 leading-snug">
                I agree to be contacted via WhatsApp, phone, or email regarding this Corbett enquiry.
                Your data is protected under India&apos;s DPDP Act 2023 and is never sold or shared.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-4 bg-transparent border border-sal-forest/30 text-sal-forest text-xs uppercase tracking-wider font-medium hover:bg-sal-forest/5 cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3.5 px-6 bg-tiger-ochre text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b5671f] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Expedition Plan...</span>
              ) : (
                <>
                  <span>Request Customised Itinerary</span>
                  <IconCheck size={16} />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-sal-forest/60">
            <IconShieldCheck size={13} className="text-tiger-ochre" />
            <span>Permits issued in traveller&apos;s name via corbettgov.org • Zero spam promise</span>
          </div>
        </form>
      )}
    </div>
  );
};

