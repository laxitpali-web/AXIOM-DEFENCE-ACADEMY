import React from 'react';
import FlowArt, { FlowSection } from './ui/story-scroll';
import { Shield, Target, Award, Flame, ChevronRight, Compass, Users, Sparkles, BookOpen } from 'lucide-react';

export default function CadetJourneyScroll() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5">
      <FlowArt aria-label="Axiom Cadet Officer Journey">
        
        {/* SECTION 1: Who We Are / The Awakening */}
        <FlowSection 
          aria-label="The Awakening - Who We Are" 
          style={{ 
            background: 'linear-gradient(135deg, #001530 0%, #002147 100%)', 
            color: '#fff' 
          }}
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
                <Compass className="w-3.5 h-3.5 text-brand-gold" />
                <span>01 — THE AWAKENING</span>
              </span>
              <span className="text-xs font-mono text-slate-400">AXIOM DEFENCE ACADEMY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
              <div className="space-y-6">
                <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-black leading-[0.95] tracking-tight uppercase text-white">
                  Awaken
                  <br />
                  <span className="text-brand-gold">The Leader</span>
                  <br />
                  Within
                </h1>
                <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.3rem)] text-slate-300 font-sans leading-relaxed font-light">
                  Jaipur's premier academy for military leadership. We don't just coach for exams; we forge the character, discipline, and grit required of commissioned officers in the Indian Armed Forces.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                    <Shield className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Ex-GTO Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                    <Target className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">100% Realistic Results</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-brand-navy-dark shadow-2xl">
                  <img 
                    src="https://static.wixstatic.com/media/14d0b9_b76ca5d069dc46b58010d14bfdfe0bce~mv2.jpg" 
                    alt="Cadet training at dawn" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-xs font-mono text-brand-gold font-semibold uppercase tracking-wider">Aspirants to Officers</p>
                    <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">Vibe of Discipline</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>ESTD IN JAIPUR</span>
              <div className="flex items-center gap-2">
                <span>SCROLL DOWN FOR THE MISSION</span>
                <ChevronRight className="w-4 h-4 animate-bounce rotate-90" />
              </div>
            </div>
          </div>
        </FlowSection>

        {/* SECTION 2: The Mission / The Forge */}
        <FlowSection 
          aria-label="The Forge - Our Mission" 
          style={{ 
            background: 'linear-gradient(135deg, #1C2E16 0%, #323C2A 100%)', 
            color: '#fff' 
          }}
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
                <Flame className="w-3.5 h-3.5 text-brand-gold" />
                <span>02 — THE MISSION</span>
              </span>
              <span className="text-xs font-mono text-slate-350">OFFICER LIKE QUALITIES (OLQS)</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
              <div className="relative group order-last lg:order-first">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-brand-navy-dark shadow-2xl">
                  <img 
                    src="https://static.wixstatic.com/media/14d0b9_2507b521903643488d857e976ab59f78~mv2.jpg" 
                    alt="Physical training drills" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-xs font-mono text-brand-gold font-semibold uppercase tracking-wider">SSB Ground Training</p>
                    <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">Outdoor GTO Field</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-black leading-[0.95] tracking-tight uppercase text-white">
                  Forge
                  <br />
                  <span className="text-brand-gold">The Mindset</span>
                  <br />
                  Of Steel
                </h2>
                <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.3rem)] text-slate-300 font-sans leading-relaxed font-light">
                  True military training involves rewriting the rules of focus and action. Under retired Assessors and GTO commanders, we build the 15 crucial Officer Like Qualities (OLQs) needed to excel in Service Selection Boards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-brand-gold font-bold text-xs uppercase font-mono tracking-wider mb-1">Effective Intelligence</h4>
                    <p className="text-[11px] text-slate-350 leading-relaxed font-sans font-light">Practical solving of real complex crises.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-gold font-bold text-xs uppercase font-mono tracking-wider mb-1">Social Adaptability</h4>
                    <p className="text-[11px] text-slate-350 leading-relaxed font-sans font-light">Perfect integration within group environments.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-gold font-bold text-xs uppercase font-mono tracking-wider mb-1">Dynamic Courage</h4>
                    <p className="text-[11px] text-slate-350 leading-relaxed font-sans font-light">Overcoming deep fears in stressful situations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>15 OLQS TRAINING SYSTEM</span>
              <div className="flex items-center gap-2">
                <span>SCROLL FOR THE CRUCIBLE</span>
                <ChevronRight className="w-4 h-4 animate-bounce rotate-90" />
              </div>
            </div>
          </div>
        </FlowSection>

        {/* SECTION 3: How It Works / The Crucible */}
        <FlowSection 
          aria-label="The Crucible - How It Works" 
          style={{ 
            background: 'linear-gradient(135deg, #121212 0%, #202020 100%)', 
            color: '#fff' 
          }}
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
                <Target className="w-3.5 h-3.5 text-brand-gold" />
                <span>03 — THE CRUCIBLE</span>
              </span>
              <span className="text-xs font-mono text-slate-400">THREE INTEGRATED PATHWAYS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
              <div className="space-y-6">
                <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-black leading-[0.95] tracking-tight uppercase text-white">
                  Tested.
                  <br />
                  <span className="text-brand-gold">Honed.</span>
                  <br />
                  Refined.
                </h2>
                <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.3rem)] text-slate-300 font-sans leading-relaxed font-light">
                  A disciplined, tri-pillar framework built by experts ensures every candidate excels concurrently in theoretical written exams and intense physical SSB assessments.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 items-start bg-white/5 border border-white/10 p-3 rounded-lg">
                    <BookOpen className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Written Syllabus Domination</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed mt-0.5">Calculus and general intelligence shortcuts designed directly by Er. Vinay Bhabhra.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white/5 border border-white/10 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Real GTO Obstacle Mockups</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed mt-0.5">Jaipur's only active standard outdoor GTO obstacle courses overseen by Col. Chouhan.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white/5 border border-white/10 p-3 rounded-lg">
                    <Users className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Comprehensive Psychological testing</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed mt-0.5">In-depth PIQ profiling, TAT, WAT, SRT, and mock personal interviews with instant feedback.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-brand-navy-dark shadow-2xl">
                  <img 
                    src="https://static.wixstatic.com/media/14d0b9_c7c825d458444116878005b55f1bf6f2~mv2.jpg" 
                    alt="Strategic navigation maps" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-xs font-mono text-brand-gold font-semibold uppercase tracking-wider">Tactical Planning Mockups</p>
                    <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">Group Tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>ZERO COMPLEXITY MENTORSHIP</span>
              <div className="flex items-center gap-2">
                <span>SCROLL FOR THE LEGACY</span>
                <ChevronRight className="w-4 h-4 animate-bounce rotate-90" />
              </div>
            </div>
          </div>
        </FlowSection>

        {/* SECTION 4: The Legacy / The Triumph */}
        <FlowSection 
          aria-label="The Legacy - Our Success" 
          style={{ 
            background: 'linear-gradient(135deg, #0A1C3E 0%, #1A3DE8 100%)', 
            color: '#fff' 
          }}
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>04 — THE LEGACY</span>
              </span>
              <span className="text-xs font-mono text-slate-300">REAL UNBIASED VERIFICATIONS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
              <div className="relative group order-last lg:order-first">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-brand-navy-dark shadow-2xl">
                  <img 
                    src="https://static.wixstatic.com/media/14d0b9_1c4fcd63ee734c6d8a62edaaaa4c0b76~mv2.jpg" 
                    alt="Military saluting officers" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-xs font-mono text-brand-gold font-semibold uppercase tracking-wider">Commissioned Officers</p>
                    <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">IMA & OTA Passouts</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-black leading-[0.95] tracking-tight uppercase text-white">
                  Legacy
                  <br />
                  <span className="text-brand-gold">Of Real</span>
                  <br />
                  Selections
                </h2>
                <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.3rem)] text-slate-300 font-sans leading-relaxed font-light">
                  We stand by real numbers, not inflated marketing hype. From NDA recommendations like Gaurvi Soni and Kangan Shekhawat to CDS OTA clearances like Lieutenant Suchita Vashishth, our legacy speaks for itself.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10 text-center font-mono">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-gold">10K+</h3>
                    <p className="text-[9px] uppercase tracking-wider text-slate-300 mt-1">Guided Students</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-gold">100%</h3>
                    <p className="text-[9px] uppercase tracking-wider text-slate-300 mt-1">Realistic Records</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-gold">A++</h3>
                    <p className="text-[9px] uppercase tracking-wider text-slate-300 mt-1">Ex-GTO Standard</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>JAIPUR'S TRUSTED CENTRE</span>
              <div className="flex items-center gap-2">
                <span>SCROLL FOR COMMAND</span>
                <ChevronRight className="w-4 h-4 animate-bounce rotate-90" />
              </div>
            </div>
          </div>
        </FlowSection>

        {/* SECTION 5: Join Us / Command Your Destiny */}
        <FlowSection 
          aria-label="Command Your Destiny - Join Us" 
          style={{ 
            background: 'linear-gradient(135deg, #001530 0%, #000000 100%)', 
            color: '#fff' 
          }}
        >
          <div className="flex flex-col h-full justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase border border-brand-gold/25">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>05 — COMMAND YOUR DESTINY</span>
              </span>
              <span className="text-xs font-mono text-slate-400">JAIPUR SESSION 2026-27</span>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-8 my-auto font-sans">
              <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-serif font-black leading-[0.85] uppercase tracking-tight text-white">
                Ready
                <br />
                To Take
                <br />
                <span className="text-brand-gold">Command?</span>
              </h2>
              <p className="max-w-[60ch] mx-auto text-[clamp(1rem,2.2vw,1.6rem)] text-slate-300 leading-relaxed font-light">
                Do not leave your military officer aspirations to algorithms or generic tutoring classrooms. Experience elite Ex-GTO coaching, state-of-the-art obstacle replica grounds, and complete psychological training.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a 
                  href="tel:+91-7023133083"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-bold uppercase text-sm rounded-lg hover:bg-brand-gold-light hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-brand-gold/20"
                >
                  <span>CALL ADMISSIONS DESK</span>
                </a>
                <a 
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold uppercase text-sm rounded-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span>REGISTER DEMO CLASS</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-slate-500">
              <span>© AXIOM DEFENCE ACADEMY JAIPUR</span>
              <span>ESTABLISHED BY EX-OFFICERS</span>
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </section>
  );
}
