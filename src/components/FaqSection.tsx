import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldQuestion } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Block */}
        {!hideHeader && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-navy/10 text-brand-navy text-xs font-mono font-bold tracking-widest uppercase border border-brand-navy/10">
              <ShieldQuestion className="w-4 h-4 text-brand-gold shrink-0 fill-brand-gold/15" />
              <span>COMMUNITY DESK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-brand-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-650 text-sm max-w-2xl mx-auto font-sans">
              Find immediate, honest answers regarding our coaching schedules, batch intake caps, hostel guidelines, and fee parameters in Jaipur.
            </p>
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-4 pt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Accordion trigger line */}
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 transition-colors hover:bg-slate-50 outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-brand-gold-dark bg-brand-gold/10 border border-brand-gold/25 px-2 py-0.5 rounded uppercase shrink-0 mt-0.5">
                      {faq.category}
                    </span>
                    <span className="font-bold text-brand-navy text-sm sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Accordion Content Block */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100/60 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
