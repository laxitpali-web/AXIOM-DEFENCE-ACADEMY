import React, { useState } from 'react';
import { Compass, Dumbbell, MessageSquare } from 'lucide-react';
import { DAILY_SHEDULE } from '../data';

export default function RoadmapAndExperience() {
  const [activeRoadmap, setActiveRoadmap] = useState<'12th' | 'graduate'>('12th');

  const testimonials = [
    {
      quote: "My daughter Gaurvi joined Axiom when she was extremely nervous about SSB screening tasks. Under the Ex-GTO Col. Chouhan's strict yet patient feedback, she learned how to project her natural personality. Today, seeing her selected for NDA-1, 2024 is the proudest day of our life.",
      author: "Mr. Soni (Proud Parent of Cadet Gaurvi Soni)",
      selection: "NDA-1, 2024 Selected Student",
      avatar: "SM"
    },
    {
      quote: "Vinay Bhabhra Sir's shortcuts in calculus and trigonometry are absolute magic. I resolved almost 80% of mathematics questions correctly in NDA within record time. The weekly mock testing structure completely eliminates exam fear.",
      author: "Cadet Kangan Shekhawat",
      selection: "NDA-1 2024 Selected Student",
      avatar: "KS"
    },
    {
      quote: "After clearing written CDS, I evaluated multiple corporate training institutes in Rajasthan but chose Axiom because of Col. Chouhan's live outdoor GTO field replica in Jaipur. True, honest feedback on my PIQ sheets helped me clear OTA without revisions.",
      author: "Lieutenant Suchita Vashishth",
      selection: "CDS-1 Selected Officer",
      avatar: "SV"
    }
  ];

  return (
    <section className="py-20 bg-brand-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
        
        {/* SECTION 1: Defence Exam Roadmap */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
              <Compass className="w-4 h-4 text-brand-gold fill-brand-gold/10" />
              <span>CAREER ROUTE PLANNER</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Defence Exam Roadmaps
            </h2>
            <p className="text-slate-300 text-sm font-sans">
              Discover your direct commissioning path into the Army, Navy, or Air Force based on your academic stage.
            </p>
          </div>

          {/* Selector toggle tabs */}
          <div className="flex justify-center max-w-xs mx-auto bg-brand-navy-dark p-1.5 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveRoadmap('12th')}
              className={`w-1/2 py-2 rounded text-xs font-mono font-bold uppercase transition-colors cursor-pointer ${
                activeRoadmap === '12th'
                  ? 'bg-brand-gold text-brand-navy shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              School / 12th Std
            </button>
            <button
              onClick={() => setActiveRoadmap('graduate')}
              className={`w-1/2 py-2 rounded text-xs font-mono font-bold uppercase transition-colors cursor-pointer ${
                activeRoadmap === 'graduate'
                  ? 'bg-brand-gold text-brand-navy shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Graduate Std
            </button>
          </div>

          {/* Interactive timeline of active roadmap */}
          <div className="bg-brand-navy-dark rounded-2xl border border-white/5 p-6 sm:p-10 max-w-4xl mx-auto">
            {activeRoadmap === '12th' ? (
              <div className="space-y-8 relative before:absolute before:left-4 sm:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10 animate-pulse" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">STREAMS IN XI-XII</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">Syllabus foundation classes</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      Concurrently study high school boards of CBSE/RBSE while building advanced skills in Calculus, Integration and physical conditioning.
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10" />
                  <div className="hidden sm:block w-[45%]" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-10 text-left">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">UPSC NDA WRITTEN PAPER</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">Cracking Mathematics & GAT</h4>
                    <p className="text-xs text-slate-305 mt-1 leading-relaxed text-slate-300 font-sans">
                      Sit for UPSC examinations with exhaustive speed tests compiled under Vinay Bhabhra’s mock coaching series in Jaipur.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">SSB Interview board</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">Ex-GTO Psychological evaluations</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      Transform personality flaws and refine Officer Like Qualities (OLQs) during intensive outdoor task drills at Axiom.
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>
              </div>
            ) : (
              <div className="space-y-8 relative before:absolute before:left-4 sm:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10 animate-pulse" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">COLLEGE GRADUATION</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">Engineering or Open Degree paths</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      Final year students or graduates of any stream prepare for Combined Defence Services (CDS) or Air Force Common Tests (AFCAT).
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10" />
                  <div className="hidden sm:block w-[45%]" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-10 text-left">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">Air Force Common Admissions</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">AFCAT & CDS Syllabus Modules</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      Comprehensive focus on Elementary Mathematics, English Grammar and Military general intelligence concepts.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between relative">
                  <span className="absolute left-4 sm:left-1/2 transform -translate-x-[9px] w-5 h-5 rounded-full bg-brand-gold border-4 border-brand-navy-dark z-10" />
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="font-mono text-xs text-brand-gold font-bold uppercase block">Special Direct IMA / INA entries</span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-white mt-1">TGC, UES, NCC SSB clearances</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      Direct call letters for SSB selection boards. Bypass written tests and focus extensively on mock interview guidance.
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 2: Daily Training Experience schedule */}
        <div className="space-y-8 pt-10 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
              <Dumbbell className="w-4 h-4 text-brand-gold" />
              <span>THE DAILY DISCIPLINE CLOCK</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Our Cadet Daily Training Experience
            </h2>
            <p className="text-slate-300 text-sm font-sans">
              We do not believe in leisurely study hours. Our cadets walk on a structured, active timeline replicating true service academy operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 max-w-5xl mx-auto">
            {DAILY_SHEDULE.map((sched, index) => (
              <div 
                key={index}
                className="bg-brand-navy-dark border border-white/5 p-5 rounded-xl space-y-4 hover:border-brand-gold/40 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] uppercase font-mono text-brand-gold font-bold bg-brand-gold/10 border border-brand-gold/25 px-2 py-0.5 rounded block w-fit mx-auto mb-3">
                    {sched.time}
                  </span>
                  <h4 className="font-serif font-bold text-slate-200 text-sm line-clamp-2 leading-snug">{sched.activity}</h4>
                  <p className="text-[11px] text-slate-400 mt-2 font-sans leading-relaxed">{sched.description}</p>
                </div>
                
                <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-slate-500">
                  <span>Focus: {sched.focus} Engine</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Parents & Students Heartwarming Testimonials */}
        <div className="space-y-8 pt-10 border-t border-white/10 font-sans">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
              <MessageSquare className="w-4 h-4 text-brand-gold" />
              <span>FAMILY TESTIMONIALS</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Words of Trust from Parents & Aspirants
            </h2>
            <p className="text-slate-300 text-sm">
              Hear directly from parents who entrusted us with their children, and candidates who secured their entry letters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-brand-navy-dark border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-gold/25 transition-all duration-300"
              >
                <div>
                  {/* Rating stars style */}
                  <div className="flex gap-1 text-brand-gold mb-4 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-xs leading-relaxed font-sans">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 border border-brand-gold/15">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-xs">{t.author}</h4>
                    <span className="text-[10px] text-brand-gold font-mono font-semibold block">{t.selection}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
