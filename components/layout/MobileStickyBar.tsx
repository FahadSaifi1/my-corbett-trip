"use client";

import React from "react";
import { businessConfig } from "@/content/config";
import { IconWhatsApp, IconPhone } from "@/components/ui/CustomIcons";

interface MobileStickyBarProps {
  packageName?: string;
  zoneName?: string;
}

export const MobileStickyBar = ({ packageName, zoneName }: MobileStickyBarProps) => {
  const prefilledTopic = packageName || zoneName || "Jim Corbett Safari";
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
    `Hello My Corbett Trip, I am interested in ${prefilledTopic}. Please share availability and details.`
  )}`;

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-sal-forest/15 px-3 py-2.5 sm:hidden shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Button */}
        <a
          href={`tel:${businessConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-sal-forest active:bg-sal-forest/5 rounded min-h-[44px]"
          aria-label="Call concierge"
        >
          <IconPhone size={18} />
          <span className="text-[10px] uppercase font-semibold tracking-wider mt-0.5">Call</span>
        </a>

        {/* WhatsApp Button (Primary) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] text-white font-medium text-xs tracking-wider uppercase rounded shadow-sm min-h-[44px] active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <IconWhatsApp size={18} />
          <span>WhatsApp</span>
        </a>

        {/* Quick Quote Button */}
        <a
          href="#lead-planner"
          className="flex flex-col items-center justify-center py-2 px-1 bg-sal-forest text-cream font-medium text-xs tracking-wider uppercase rounded min-h-[44px] active:scale-95 transition-transform text-center"
        >
          <span className="text-[11px] leading-tight">Get Quote</span>
        </a>
      </div>
    </aside>
  );
};

