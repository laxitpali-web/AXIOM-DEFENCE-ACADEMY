import React from 'react';
import { Shield, Medal, Target } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data';

export default function AboutSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Core Header section */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs uppercase font-mono tracking-widest font-bold">
              <Shield className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/25" />
              <span>THE AXIOM STORY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-brand-navy tracking-tight">
              Nurturing Officers for the Indian Armed Forces
            </h2>
            <p className="text-slate-650 text-base leading-relaxed font-sans">
              Since our inception, Axiom Defence Academy Jaipur has worked with a singular, unwavering mission: to mold disciplined minds, build physically resilient bodies, and cultivate deep logical clarity in written examinations. We do not celebrate mass certificates; we celebrate real officers.
            </p>
          </div>
        )}

        {/* Bento Grid: Why Students Choose Axiom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow hover:shadow-lg transition-all md:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold-dark mb-6 border border-brand-gold/20">
              <Medal className="w-6 h-6 text-brand-gold-dark" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">Our Core Pillars of Discipline</h3>
            <p className="text-slate-650 text-sm leading-relaxed mb-4">
              At Axiom, military discipline is not a subject taught in classrooms—it is a lifestyle lived and synchronized daily. From early assembly lines to systematic homework logging, custom grooming classes, and group task drills, we train students to think, speak, and act like natural-born leaders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 font-mono text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 text-brand-navy">✓ Dynamic Personality</div>
              <div className="flex items-center gap-2 text-brand-navy">✓ Structured Fitness</div>
              <div className="flex items-center gap-2 text-brand-navy">✓ Flawless English</div>
              <div className="hidden sm:flex items-center gap-2 text-brand-navy">✓ UPSC Code Syllabus</div>
              <div className="hidden sm:flex items-center gap-2 text-brand-navy">✓ Active Mentorship</div>
              <div className="hidden sm:flex items-center gap-2 text-brand-navy">✓ GTO Replications</div>
            </div>
          </div>

          <div className="bg-brand-navy text-white p-8 rounded-xl border border-brand-gold/25 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold mb-6 border border-brand-gold/20">
                <Target className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">The Mission & Vision</h3>
              <p className="text-slate-350 text-xs leading-relaxed font-sans">
                To serve as India’s absolute gold-standard of defence training, facilitating access to state-of-the-art mental and physical conditioning for defence aspirants from all walks of life. We seek to inspire parents with complete confidence and light a fire of deep patriotism and integrity in our youth.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest relative z-10">
              ESTD. IN JAIPUR • ALL REAL STORIES
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { num: 1, title: "Expert Officers Team", desc: "Ex-GTO and IMA staff teaching daily guidelines." },
            { num: 2, title: "Regular Mock Exams", desc: "Rigorous weekly evaluations on standard formats." },
            { num: 3, title: "SSB Guidance replica", desc: "Live active physical obstacle course in Jaipur." },
            { num: 4, title: "Elite Peer Circles", desc: "Ambitious, highly focused aspirants studying inside." },
            { num: 5, title: "Custom Grooming", desc: "Personality and English labs for SSB selection." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-center hover:border-brand-gold hover:shadow-md transition-all duration-300">
              <div className="mx-auto w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-4 font-mono font-bold border border-brand-navy/10">{item.num}</div>
              <h4 className="font-bold text-brand-navy text-sm mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-550 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Master Founders Message Layout */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-black text-brand-navy">Direct Messages From Directors</h3>
            <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mt-2">Get Trained From The Experienced Faculty & Ensure Your Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACULTY_MEMBERS.map((faculty, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between relative hover:shadow-md hover:border-brand-gold/40 transition-all duration-300">
                <span className="absolute -top-3 left-6 px-3 py-1 text-[9px] font-mono font-bold bg-brand-navy text-brand-gold rounded border border-brand-gold/35 shadow tracking-wider uppercase">
                  {faculty.role}
                </span>
                
                <div className="pt-2">
                  {/* Faculty Image block */}
                  {faculty.image && (
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-200 mb-5 relative group/img shadow-sm bg-slate-50 shrink-0">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {/* Faux profile card block */}
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <p className="font-serif font-bold text-brand-navy text-base">{faculty.name}</p>
                    <p className="text-xs text-[#b38f1e] font-semibold">{faculty.title}</p>
                  </div>
                  <blockquote className="text-slate-650 text-xs leading-relaxed italic">
                    "{faculty.bio.substring(0, 180)}... Let's harness your capability and train you through disciplined pathways to achieve standard cadet status."
                  </blockquote>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center text-slate-500">
                  <div className="text-[10px] font-mono">
                    <span className="block font-bold text-brand-navy">{faculty.experience}</span>
                    <span>EXP MENTORSHIP</span>
                  </div>
                  <div className="text-[10px] font-mono text-right">
                    <span className="block font-bold text-brand-gold-dark">{faculty.achievementsCount}</span>
                    <span>PROUD METRIC</span>
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
