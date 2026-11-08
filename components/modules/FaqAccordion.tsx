"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@/components/ui/CustomIcons";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion = ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Clear, factual answers regarding Corbett Tiger Reserve permits, regulations, and safaris.",
}: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-cream border border-sal-forest/15 p-6 sm:p-8">
      <div className="mb-6 pb-4 border-b border-sal-forest/10">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
          Essential Clarity
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sal-forest mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-sal-forest/70">{subtitle}</p>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-sal-forest/15 bg-white transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg font-bold text-sal-forest">
                  {item.question}
                </span>
                <span
                  className={`text-sal-forest/60 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-tiger-ochre" : ""
                  }`}
                >
                  <IconChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-sal-forest/80 leading-relaxed border-t border-sal-forest/5">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

