import React from 'react';
import { Shield, ArrowRight, MessageSquare, Award, Star, CheckCircle, Users } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ onOpenEnquiry, setActiveTab }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white min-h-[90vh] flex flex-col justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-35 mix-blend-luminosity bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://static.wixstatic.com/media/14d0b9_412d5776f4c64fe68b1e301edcd74da2~mv2_d_3556_1472_s_2.jpg')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy/90 to-brand-navy-dark/75 z-0 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column text */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs uppercase font-mono tracking-widest animate-pulse mx-auto lg:mx-0">
            <Shield className="w-3.5 h-3.5 text-brand-gold" />
            <span>SINCE 2012 • PREMIER DEFENCE ACADEMY</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white font-black tracking-tight leading-[1.05]">
            Your Mission <br />
            <span className="text-brand-gold block sm:inline mt-1">
              Starts Here.
            </span>
          </h1>

          <p className="text-slate-300 antialiased max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-sans mt-4">
            Premium <strong className="text-brand-gold font-semibold font-mono">NDA • CDS • AFCAT • SSB Interview</strong> Preparation in the heart of Jaipur. Disciplined training for tomorrow's officers.
          </p>

          {/* Quick admissions session alert */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-slate-300 bg-brand-navy-dark/65 border border-white/10 p-2.5 rounded-lg max-w-xl mx-auto lg:mx-0 backdrop-blur-sm shadow-md">
            <span className="flex h-2.5 w-2.5 relative items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-200">BATCH ALERT: New session seats filling fast. Register for direct GTO prep!</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 max-w-md sm:max-w-none mx-auto lg:mx-0">
            <button
              id="hero-btn-admission"
              onClick={onOpenEnquiry}
              className="px-8 py-4 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-extrabold rounded text-xs uppercase tracking-widest group flex items-center justify-center gap-2 shadow-xl shadow-brand-gold/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book Demo Class</span>
              <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              id="hero-btn-courses"
              onClick={() => setActiveTab('courses')}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded text-xs uppercase tracking-widest transition-all duration-350 cursor-pointer"
            >
              Explore Courses
            </button>

            <a
              href="https://wa.me/919314533083?text=Jai%20Hind%21%20I%20want%20to%20know%20more%20about%20Axiom%20Defence%20Academy%20batches."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded text-xs uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 transition-all duration-300 border border-emerald-400/20 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-2 text-slate-350">
              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-xs font-mono">100% Real Selections</span>
            </div>
            <div className="flex items-center gap-2 text-slate-350">
              <CheckCircle className="w-1.5 md:w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-xs font-mono">Ex-SSB GTO Guided</span>
            </div>
            <div className="flex items-center gap-2 text-slate-350">
              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="text-xs font-mono">Jaipur Campus</span>
            </div>
          </div>
        </div>

        {/* Right column: Stat Cards and Conversion Badge */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl z-0 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-navy-light/10 rounded-full blur-3xl z-0 pointer-events-none" />

          {/* Quick Stats Overlay Panel */}
          <div className="relative z-10 w-full max-w-sm bg-gradient-to-b from-brand-navy-dark to-brand-navy rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl space-y-6">
            <div className="text-center pb-4 border-b border-white/10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">Axiom Defence Jaipur</h3>
              <p className="font-serif text-xl font-bold text-white">The Academy of Champions</p>
            </div>

            {/* Live Counter 1 */}
            <div className="flex items-start gap-4 p-3 rounded bg-brand-navy-dark/40 hover:bg-brand-navy-dark/70 border border-white/5 transition-colors">
              <div className="p-2.5 rounded bg-brand-gold/10 text-brand-gold font-bold">
                <Users className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-white">1000+</div>
                <div className="text-xs text-slate-400 font-medium font-sans">Boys Commissioned as Officers</div>
              </div>
            </div>

            {/* Live Counter 2 */}
            <div className="flex items-start gap-4 p-3 rounded bg-brand-navy-dark/40 hover:bg-brand-navy-dark/70 border border-white/5 transition-colors">
              <div className="p-2.5 rounded bg-brand-gold/10 text-brand-gold font-bold">
                <Star className="w-5 h-5 text-brand-gold animate-pulse" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-white">80+</div>
                <div className="text-xs text-slate-400 font-medium font-sans">Girls Commissioned as Officers</div>
              </div>
            </div>

            {/* Live Counter 3 */}
            <div className="flex items-start gap-4 p-3 rounded bg-brand-navy-dark/40 hover:bg-brand-navy-dark/70 border border-white/5 transition-colors">
              <div className="p-2.5 rounded bg-brand-gold/10 text-brand-gold font-bold">
                <Award className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight text-white">15+ Years</div>
                <div className="text-xs text-slate-400 font-medium font-sans">SSB Board Mentoring Experience</div>
              </div>
            </div>

            {/* Form CTA Prompt */}
            <button
              id="hero-panel-cta"
              onClick={onOpenEnquiry}
              className="w-full text-center py-3 bg-brand-gold text-brand-navy hover:bg-brand-gold-light rounded-lg text-xs font-extrabold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Request Syllabus & Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
