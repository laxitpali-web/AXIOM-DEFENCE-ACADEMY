import React, { useState } from 'react';
import { Anchor, Star, Award, Compass, Users } from 'lucide-react';
import { SSB_OLQS } from '../data';

export default function SsbSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [selectedFactor, setSelectedFactor] = useState<string>('All');

  const factors = ['All', 'Factor I', 'Factor II', 'Factor III', 'Factor IV'];

  const filteredOlqs = SSB_OLQS.filter((olq) => {
    if (selectedFactor === 'All') return true;
    return olq.coreAspect.includes(selectedFactor);
  });

  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Core Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-navy/10 text-brand-navy text-xs font-mono font-bold tracking-widest uppercase border border-brand-navy/10">
              <Anchor className="w-4 h-4 text-brand-gold shrink-0 fill-brand-gold/10" />
              <span>OFFICER MINDSET BUILDING</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-brand-navy tracking-tight animate-fade-in">
              Comprehensive SSB Interview Coaching
            </h2>
            <p className="text-slate-650 text-base font-sans leading-relaxed">
              Directed directly by <strong className="text-brand-navy font-bold">Col. J.S. Chouhan, YSM (Ex. GTO)</strong>, our SSB curriculum focuses on building natural personalities and reinforcing true military instincts rather than teaching rote memorization.
            </p>
          </div>
        )}

        {/* Infographic Grid representing the Stage 1 and Stage 2 SSB Preparation Cycles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-navy text-brand-gold font-mono text-sm font-bold">01</div>
            <div>
              <h4 className="font-extrabold text-brand-navy text-sm">Screening (Stage I)</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Refine Officer Intelligence Rating (OIR) speeds. Master Picture Perception & Discussion Test (PPDT) with customized narration practices under senior officers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-navy text-brand-gold font-mono text-sm font-bold">02</div>
            <div>
              <h4 className="font-extrabold text-brand-navy text-sm">SSB Psychology</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Structured mental profile training. Write, refine, and receive deep reviews on TAT, WAT, SRT and Self Description (SD) sheets aligned with your natural personality.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-navy text-brand-gold font-mono text-sm font-bold">03</div>
            <div>
              <h4 className="font-extrabold text-brand-navy text-sm">GTO Ground Tasks</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Step onto our fully replicated GTO outdoor field. Deep practice in Military Planning Exercises, Command Tasks, Double Ditch and individual obstacle setups.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-navy text-brand-gold font-mono text-sm font-bold">04</div>
            <div>
              <h4 className="font-extrabold text-brand-navy text-sm">Personal Interview</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Replicate official environment with mock Board Interview sessions. Analyze PIQ cards in extensive detail, optimizing voice, body language, and response times.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic ELITE Section: The 15 Officer Like Qualities (OLQ) Interactive Board */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-brand-navy">Interactive OLQs Guide</h3>
              <p className="text-slate-500 text-xs font-sans">
                The Indian Armed Forces assess candidates on 15 core Officer Like Qualities. Apply the filter below to study which specific Factor is evaluated during tests.
              </p>
            </div>

            {/* Factor buttons list selector */}
            <div className="flex flex-wrap gap-1">
              {factors.map((factor) => {
                const isActive = selectedFactor === factor;
                return (
                  <button
                    key={factor}
                    onClick={() => setSelectedFactor(factor)}
                    className={`px-3 py-1.5 text-xs font-mono rounded tracking-tight cursor-pointer ${
                      isActive 
                        ? 'bg-brand-navy text-brand-gold font-bold shadow' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {factor}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive display lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOlqs.map((olq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-3 hover:border-brand-gold/40 hover:bg-white transition-all duration-300 group"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-extrabold text-brand-navy bg-brand-navy/5 px-2 py-0.5 rounded border border-brand-navy/10">
                      {olq.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                      {olq.coreAspect.split(': ')[1]}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-brand-navy text-sm group-hover:text-brand-gold-dark transition-colors">
                    {olq.title}
                  </h4>
                  <p className="text-xs text-slate-550 leading-relaxed font-sans mt-1">
                    {olq.description}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                  <span>Standard SSB Evaluation</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GTO Outdoor Obstacles Section detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-r from-brand-navy-dark to-brand-navy text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-gold/20">
          <div className="lg:col-span-12 space-y-6">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest block bg-brand-gold/10 px-3 py-1 rounded border border-brand-gold/35 w-fit">
              LIVE JAIPUR EXPERIENCE
            </span>
            <h3 className="text-3xl font-serif font-black text-white leading-tight">Full-Scale Replica Outdoor GTO Ground</h3>
            <p className="text-slate-300 antialiased text-sm sm:text-base leading-relaxed font-sans">
              Most written coaching centres present theoretical slides for GTO evaluations, failing to prepare students for actual physical mechanics. Axiom Defence Academy bridges this critical gap. Our candidates train on physical outdoor obstacle structures located in Jaipur, including:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans text-xs">
              <div className="bg-brand-navy-dark/60 p-4 rounded-xl border border-white/5">
                <span className="font-serif font-bold text-brand-gold block mb-1.5 text-sm">Obstacles Training</span>
                <span className="text-slate-300 leading-relaxed">Practice rope crossings, high ditches, wall vaults, tiger jumps, and heavy beam balancing.</span>
              </div>
              <div className="bg-brand-navy-dark/60 p-4 rounded-xl border border-white/5">
                <span className="font-serif font-bold text-brand-gold block mb-1.5 text-sm">Command Task replica</span>
                <span className="text-slate-300 leading-relaxed">Replicate specific leadership boards where you direct mock sub-ordinates to move raw payloads across grids.</span>
              </div>
              <div className="bg-brand-navy-dark/60 p-4 rounded-xl border border-white/5">
                <span className="font-serif font-bold text-brand-gold block mb-1.5 text-sm font-bold">Group Planning</span>
                <span className="text-slate-300 leading-relaxed">Collaborative military maps sandbag reviews, discussing tactical route prioritization fast.</span>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-brand-gold pl-4 py-1 italic font-mono text-slate-300 text-xs">
              "Training under an Ex-GTO gives you authentic, honest metrics on how you react to stressful group dynamics, helping you eliminate red-flag attributes long before you face the selection board."
              <span className="block text-[10.5px] font-bold text-brand-gold uppercase mt-1.5 font-mono">— COL. J.S. CHOUHAN, YSM (EX-GTO)</span>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
