import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenEnquiry: () => void;
}

export default function Footer({ setActiveTab, onOpenEnquiry }: FooterProps) {
  return (
    <footer className="bg-brand-navy-dark text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Top Segment: Hero-Aspirational conversion invitation banner */}
        <div className="border-b border-white/10 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold font-mono text-xs uppercase font-extrabold tracking-widest leading-none">
              <Shield className="w-5 h-5 text-brand-gold shrink-0" />
              <span>THE ULTIMATE CALL TO SERVICE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight">
              Join Axiom. Train with Discipline. Serve with Honour.
            </h3>
            <p className="text-slate-305 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
              We mold physical speed, written mathematical concepts and leadership reflexes daily inside our Jaipur military-guided formats. Secure your registration today.
            </p>
          </div>
          <button
            id="footer-btn-enroll"
            onClick={onOpenEnquiry}
            className="px-6 py-3.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-black rounded text-xs uppercase tracking-widest shrink-0 shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Start Your Journey Now
          </button>
        </div>

        {/* Middle Segment: Directories and sitemaps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-sans text-slate-400">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white overflow-hidden flex items-center justify-center text-white p-1 border border-brand-gold shadow">
                <img 
                  src="https://static.wixstatic.com/media/14d0b9_3b8916359c0a4af08077cf4539b8c14c~mv2.png" 
                  alt="Axiom Defence Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif font-extrabold text-base tracking-wider text-white">AXIOM DEFENCE</span>
            </div>
            <p className="leading-relaxed">
              Jaipur's premier military coaching institute founded and instructed directly by senior Ex-GTO officers, veterans and mathematical graduates.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase bg-brand-navy px-2 py-1 rounded border border-white/10 text-brand-gold font-bold">
                ESTABLISHED IN 2012
              </span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase font-bold text-[#b38f1e] tracking-widest">DIAL DIRECTORIES:</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline cursor-pointer block text-left">
                  Our Founding Military Legacy
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('courses'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline cursor-pointer block text-left">
                  Syllabi & NDA/CDS Foundation
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('results'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline cursor-pointer block text-left">
                  100% Verifiable Selections Ledger
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('ssb'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline cursor-pointer block text-left">
                  SSB Obstacles & GTO Rep Field
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('gallery'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline cursor-pointer block text-left">
                  Aspirants Drill Snapshots
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses quick-links */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase font-bold text-[#b38f1e] tracking-widest">COURSES PROGRAMS:</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => { setActiveTab('courses'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline block text-left cursor-pointer">
                  NDA UPSC Preparation (with XII Board)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('courses'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline block text-left cursor-pointer">
                  CDS Graduate Exams Written Code
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('courses'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline block text-left cursor-pointer">
                  AFCAT Airforce Commission pathways
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('ssb'); window.scrollTo(0, 0); }} className="hover:text-brand-gold hover:underline block text-left cursor-pointer">
                  14-Day SSB Personal psychology mocks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach out info */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase font-bold text-[#b38f1e] tracking-widest">OFFICIAL DESK:</h4>
            <div className="space-y-3 font-sans text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>24-A, Veer Vihar Colony, Queen’s Road, Vaishali Nagar, Jaipur (302021)</span>
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919314533083" className="hover:text-brand-gold hover:underline transition-colors">+91-9314533083 (Desk)</a>
                    <a href="tel:+917023133083" className="hover:text-brand-gold hover:underline transition-colors">+91-7023133083 (Admissions)</a>
                    <a href="tel:+919414069455" className="hover:text-brand-gold hover:underline transition-colors">+91-9414069455 (Admin)</a>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:axiomdefence@gmail.com" className="hover:text-brand-gold hover:underline transition-colors">axiomdefence@gmail.com</a>
                    <a href="mailto:bhabhravinay@gmail.com" className="hover:text-brand-gold hover:underline transition-colors">bhabhravinay@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and disclosures Segment */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-sans gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 AXIOM DEFENCE ACADEMY JAIPUR. All Rights Reserved. Redesigned with Honor & Excellence.</p>
            <p className="text-[10px] text-slate-600">Axiom Defence Academy is a registered coaching venue in Jaipur, Rajasthan. Factual figures and rosters verified.</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://www.axiomdefence.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] hover:underline flex items-center gap-1 font-mono transition-colors"
            >
              Original Site <ExternalLink className="w-3 h-3 text-brand-gold" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
