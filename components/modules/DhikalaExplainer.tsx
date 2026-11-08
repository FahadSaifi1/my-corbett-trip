import React from "react";
import Link from "next/link";
import { IconShieldCheck, IconArrowRight, IconCalendar } from "@/components/ui/CustomIcons";
import {
  TopographicContoursIllustration,
  NaturalistExpeditionSeal,
} from "@/components/illustrations/WildlifeIllustrations";

export const DhikalaExplainer = () => {
  return (
    <div className="relative bg-sal-forest text-cream p-5 sm:p-7 border border-cream/15 overflow-hidden">
      {/* Background Topographic Map Texture */}
      <TopographicContoursIllustration color="#F5F2EA" className="opacity-[0.04]" />
      
      {/* Vintage Expedition Seal in top corner */}
      <NaturalistExpeditionSeal size={90} variant="ochre" className="absolute -top-3 -right-3 opacity-25 hidden sm:block" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-tiger-ochre uppercase tracking-[0.2em] mb-2">
          <IconShieldCheck size={16} />
          <span>The Crown Jewel • Strict CTR Protocol</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-cream mb-3">
          Dhikala Forest Rest House: The Truth About Booking
        </h3>

        <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-4">
          Dhikala is the historic epicentre of Corbett Tiger Reserve (established 1890). Because of
          its sensitive core habitat,{" "}
          <strong className="text-cream font-semibold">
            day jeeps are legally prohibited from entering Dhikala
          </strong>
          . There are only two ways to experience this landscape:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Method 1: Night Stay */}
          <div className="bg-cream/5 border border-cream/15 p-5">
            <span className="text-xs font-mono text-tiger-ochre uppercase tracking-wider block mb-2">
              Option 1 (Premier Immersion)
            </span>
            <h4 className="font-serif text-xl font-bold text-cream mb-2">
              Forest Rest House (FRH) Night Stay
            </h4>
            <p className="text-xs text-cream/70 leading-relaxed mb-4">
              Stay inside the core compound in historic rest houses (Dhikala, Sarpduli, Gairal).
              Enjoy dedicated morning and afternoon gypsy drives with a registered vehicle and driver
              stationed inside with you.
            </p>
            <div className="p-3 bg-sal-forest/80 border border-cream/10 text-xs text-cream/90 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <IconCalendar size={14} className="text-tiger-ochre shrink-0" />
                <span>Indian Citizens: Opens 45 days ahead at 10 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendar size={14} className="text-tiger-ochre shrink-0" />
                <span>Foreign Visitors: Opens 90 days ahead</span>
              </div>
            </div>
          </div>

          {/* Method 2: Canter Safari */}
          <div className="bg-cream/5 border border-cream/15 p-5">
            <span className="text-xs font-mono text-tiger-ochre uppercase tracking-wider block mb-2">
              Option 2 (Day Visitors)
            </span>
            <h4 className="font-serif text-xl font-bold text-cream mb-2">
              16-Seater Canter Safari
            </h4>
            <p className="text-xs text-cream/70 leading-relaxed mb-4">
              Open-roof government-run safari bus that departs from Ramnagar reception and Dhangarhi
              gate for a ~5-hour excursion across the Patli Dun valley and Dhikala Chaur.
            </p>
            <div className="p-3 bg-sal-forest/80 border border-cream/10 text-xs text-cream/90 space-y-1.5 font-mono">
              <div>Seat Rate: ₹1,500 + 18% GST (Indian)</div>
              <div>Foreigners: ₹3,000 + 18% GST / seat</div>
              <div className="text-[11px] text-tiger-ochre">Max 4 seats per booking transaction</div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream/70 max-w-xl">
            Permits for Dhikala FRH vanish within seconds of the 45-day window opening. We prepare
            your traveller documentation and coordinate with licensed CTR operators in advance.
          </p>
          <Link
            href="/dhikala-night-stay"
            className="inline-flex items-center gap-2 py-3 px-5 bg-tiger-ochre text-white text-xs uppercase tracking-wider font-medium hover:bg-[#b5671f] transition-all shrink-0"
          >
            <span>Read Dhikala Guide</span>
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

